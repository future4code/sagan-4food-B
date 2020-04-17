import React from 'react'
import { connect } from 'react-redux'

import * as S from './styles'

import CardFoodInCart from '../CardFoodInCart'

function CartMain(props) {
    const { restaurant, infoQuantity } = props


    let filteredList = []
    for(let item of restaurant.products){
        for(let elem of infoQuantity) {
            if (item.id === elem.id) {
                filteredList.push(item)
            }
        }
    }
    console.log('filteredlist',filteredList)

    return (
        <main>
            {filteredList.length === 0
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

                    {filteredList
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
