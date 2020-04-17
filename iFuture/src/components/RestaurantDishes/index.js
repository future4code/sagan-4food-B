import React from 'react';
import * as S from './styles'

import CardFood from '../CardFood';
import { connect } from 'react-redux';

function RestaurantDishes(props) {
    const { data, infoQuantity } = props
    // console.log(infoQuantity)

    // const itemInfoQuantity = data.filter(item => item.id === infoQuantity.id)

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
const mapStateToProps = state => ({
    // infoQuantity: state.food.infoQuantity
  })

export default connect(mapStateToProps)(RestaurantDishes);