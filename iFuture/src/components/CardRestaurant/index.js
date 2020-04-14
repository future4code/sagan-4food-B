import React from 'react'
import * as S from './styles'

function CardRestaurant(props){

    const { restaurant} = props

    return (
        <S.CardRestaurantWrapper>
            {restaurant}
        </S.CardRestaurantWrapper>
    )
}

export default CardRestaurant