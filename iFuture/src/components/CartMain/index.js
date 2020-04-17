import React from 'react'
import * as S from './styles'

import CardFoodInCart from '../CardFoodInCart'

function CartMain(props) {
    const { restaurant } = props
    
    return (
        <main>
            { restaurant.products.length === 0
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

                    {restaurant.products.map(item => (
                        <CardFoodInCart item={item} />
                    ))}

                </S.FullCartWrapper>
            }
        </main>
    )
}

export default CartMain
