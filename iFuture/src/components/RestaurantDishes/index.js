import React from 'react';
import * as S from './styles'

import CardFood from '../CardFood';

function RestaurantDishes(props) {
    const { data } = props
    return (
        <div>
            <S.Title> Principais </S.Title>

            {data
            .filter(item => item.category !== 'Acompanhamento')
            .map(item => (
                <CardFood item={item} page='restaurantDishes' />
            ))}

            <S.Title> Acompanhamentos </S.Title>

            {data
            .filter(item => item.category === 'Acompanhamento')
            .map(item => (
                <CardFood item={item} page='restaurantDishes'/>
            ))}
        </div>
    )
}

export default RestaurantDishes;