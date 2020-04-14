import React from 'react'

import * as S from './styles'
import { CardContent } from '@material-ui/core'

function CardRestaurant(props){

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
                        {restaurant.deliveryTime} min
                    </S.RestaurantInfo>
                    <S.RestaurantInfo>
                        Frete {restaurant.shipping.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </S.RestaurantInfo>
                </S.InfoFooter>
            </CardContent>
        </S.CardRestaurantWrapper>
    )
}

export default CardRestaurant

// {
//     id: "7",
//     deliveryTime: 20,
//     category: "Italiana",
//     description: "Restaurante Self Service e lanchonete localizado no Laboratório Nacional de Computação Científica",
//     shipping: 2,
//     address: "Rua Barão do Rio Branco, 98 - Centro",
//     name: "Cantina Mamma Perrotta 2",
//     logoUrl: "http://soter.ninja/futureFoods/logos/cantinamammaperrotta.jpg"
//   },