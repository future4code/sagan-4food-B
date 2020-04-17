import React, { useState } from 'react'
import * as S from './styles'

import { placeOrder } from '../../actions/food'
import { connect } from 'react-redux'

function CartFooter(props) {
    const { restaurant, infoQuantity, filteredList, placeOrder, restaurantId } = props

    let newList = []
    for(let item of filteredList){
        for(let elem of infoQuantity) {
            if (item.id === elem.id) {
                newList.push(item.price * elem.quantity)
            }
        }
    }

    const valorTotal = newList.reduce((total, numero) => {
        return total + numero
    }, 0)

    const [payment, setpayment] = useState('')

    function savePaymentMethod(e) {
        setpayment(e.target.id)
    }

    function onPlaceOrder(e) {
        e.preventDefault()
        const placeOrderData = {
            products: infoQuantity,
            paymentMethod: payment
        }
        console.log(restaurant)
        console.log(restaurantId)
        placeOrder(placeOrderData, restaurantId)
    }

    const total = valorTotal // fazer a lógica
    
    const subtotal = total + restaurant.shipping

    return (
        <S.CartFooterWrapper>

            <S.Text right> Frete {restaurant.shipping.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </S.Text>

            <S.PriceBoxWrapper>
                <S.Text> SUBTOTAL </S.Text>
                <S.Text red bold> {subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </S.Text>
            </S.PriceBoxWrapper>

            <S.Title> Forma de pagamento </S.Title>

            <S.FormWrapper onSubmit={onPlaceOrder}>

                <S.PayementOptionBoxWrapper>

                    <S.RadioButtonWrapper
                        name="payementOption"
                        type="radio"
                        value={payment || ''}
                        id='money'
                        required
                        onClick={savePaymentMethod}
                        disabled={restaurant.products.length === 0 ? true : false}
                    />

                    <S.Text> Dinheiro </S.Text>

                </S.PayementOptionBoxWrapper>


                <S.PayementOptionBoxWrapper>
                    <S.RadioButtonWrapper
                        name="payementOption"
                        type="radio"
                        value={payment || ''}
                        id='creditcard'
                        onClick={savePaymentMethod}
                        disabled={restaurant.products.length === 0 ? true : false}
                    />

                    <S.Text> Cartão de crédito </S.Text>
                </S.PayementOptionBoxWrapper>

                <S.ConfirmButtonWrapper
                    marginTop={restaurant.products.length === 0 ? '145px' : '19px'}
                    color={restaurant.products.length === 0 ? 'rgba(232, 34, 46, 0.5)' : '#e8222e'}
                    type='onsubmit'
                >
                    Confirmar
                </S.ConfirmButtonWrapper>

            </S.FormWrapper>

        </S.CartFooterWrapper>
    )
}

const mapStateToProps = state => ({
    restaurantId: state.food.restaurantId
})

const mapDispatchToProps = dispatch => ({
    placeOrder: (placeOrderData, restaurantId) => dispatch(placeOrder(placeOrderData, restaurantId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartFooter)