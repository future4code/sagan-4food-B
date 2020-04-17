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
                <CardFood item={item}  />
            ))}

            <S.Title> Acompanhamentos </S.Title>

            {data
            .filter(item => item.category === 'Acompanhamento')
            .map(item => (
                <CardFood item={item} />
            ))}
        </div>
    )
}


export default RestaurantDishes;