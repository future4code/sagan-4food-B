import React from 'react';
import * as S from './styles'

function RestaurantHeader(props) {
  return (
    <S.CardWarapper elevation={0}>

      <S.Img image={props.img} />

      <S.Content>

        <S.Text color="primary">{props.name}</S.Text>

        <S.Text color="secondary">{props.category}</S.Text>

        <S.Shipping>
          <S.Text color="secondary">{props.deliveryTime - 10} - {props.deliveryTime} min</S.Text>
          <S.Text color="secondary">Frete {props.shipping.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</S.Text>
          <div></div>
        </S.Shipping>

        <S.Text color="secondary">{props.address}</S.Text>

      </S.Content>

    </S.CardWarapper>
  )
}

export default RestaurantHeader;