import React from 'react'
import { connect } from 'react-redux'

import * as S from './styles'

import CardFoodInCart from '../CardFoodInCart'

function CartMain(props) {
    const { restaurant, infoQuantity } = props
    // console.log(infoQuantity)

    // PRECISO FILTRAR, PRA NÃO MANDAR TUDO
    // dentro do restaurant.products encontre os ids q estão no infoQuantity
    // const filteredList = restaurant.products.filter(item => 
    //     item.id === x)
    let filteredList = []
    for(let item of restaurant.products){
        if(infoQuantity.indexOf(item) !== -1){
            filteredList.push(item)
        }
    }
    console.log('filteredlist',filteredList)

    return (
        <main>
            {restaurant.products.length === 0
                ?
                <S.EmptyCartWrapper>
                    <S.Text>
                        Carrinho Vazio
                    </S.Text>
                </S.EmptyCartWrapper>

                :
                <S.FullCartWrapper>

                    <S.DivMain>
                        <S.Text red> {restaurant.name} </S.Text>
                        <S.Text> {restaurant.address} </S.Text>
                        <S.Text> {restaurant.deliveryTime - 10} - {restaurant.deliveryTime} min </S.Text>
                    </S.DivMain>

                                        
                    {/* chamar filteredList aqui */}
                    {restaurant.products
                        .map(item => (
                            <CardFoodInCart item={item} />
                        ))}

                </S.FullCartWrapper>
            }
        </main>
    )
}

const mapStateToProps = state => ({
    infoQuantity: state.food.infoQuantity
})

export default connect(mapStateToProps)(CartMain)
