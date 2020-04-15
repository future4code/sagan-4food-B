import React from 'react';
import * as S from './styles'

import CardFood from '../CardFood';

function RestaurantDishes(props) {
    const { data } = props

    return (
        <div>

            <S.Title> Principais </S.Title>

            {data.map(item => {
                if (item.category !== "Acompanhamento") {
                    return <CardFood item={item} />
                }
            })}

            <S.Title> Acompanhamentos </S.Title>

            {data.map(item => {
                if (item.category === "Acompanhamento") {
                    return <CardFood item={item} />
                }
            })}

        </div>
    )
}

export default RestaurantDishes;