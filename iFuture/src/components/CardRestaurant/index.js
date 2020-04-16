import React from 'react'

import * as S from './styles'
import { CardContent } from '@material-ui/core'

function CardRestaurant(props) {

    const { restaurant } = props

    const redirectRestaurant = (restaurantId) => {
        // chamar a action que redireciona pro restaurant detail

    }

    return (
        <S.CardRestaurantWrapper>
            <S.CardImage onClick={() => redirectRestaurant(restaurant.id)}>
                <S.Image
                    image={restaurant.logoUrl}
                    title={restaurant.name}
                />
            </S.CardImage>
            <CardContent>
                <S.RestaurantName>
                    {restaurant.name}
                </S.RestaurantName>
                <S.InfoFooter>
                    <S.RestaurantInfo>
                        {restaurant.deliveryTime} - {restaurant.deliveryTime + 10} min
                    </S.RestaurantInfo>
                    <S.RestaurantInfo>
                        Frete R$ {Number(restaurant.shipping).toFixed(2).replace(".", ",")}
                        {/* Frete {restaurant.shipping.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} */}
                    </S.RestaurantInfo>
                </S.InfoFooter>
            </CardContent>
        </S.CardRestaurantWrapper>
    )
}

export default CardRestaurant