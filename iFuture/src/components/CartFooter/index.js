import React, { useState } from 'react'
import * as S from './styles'

function CartFooter(props) {
    const { restaurant } = props

    const [payment, setpayment] = useState({ paymentMethod: '' })

    function savePaymentMethod(e) {
        setpayment({ paymentMethod: e.target.id })
    }

    function teste(e) {
        e.preventDefault()
    }

    const total = 0 // fazer a lógica
    
    const subtotal = total - restaurant.shipping

    return (
        <S.CartFooterWrapper>

            <S.Text right> Frete {restaurant.shipping.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </S.Text>

            <S.PriceBoxWrapper>
                <S.Text> SUBTOTAL </S.Text>
                <S.Text red bold> {subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </S.Text>
            </S.PriceBoxWrapper>

            <S.Title> Forma de pagamento </S.Title>

            <S.FormWrapper onSubmit={teste}>

                <S.PayementOptionBoxWrapper>

                    <S.RadioButtonWrapper
                        name="payementOption"
                        type="radio"
                        value={payment.paymentMethod || ''}
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
                        value={payment.paymentMethod || ''}
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

export default CartFooter