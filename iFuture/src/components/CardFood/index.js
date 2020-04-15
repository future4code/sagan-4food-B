import React from 'react';

import { Typography } from '@material-ui/core';
import * as S from './styles'

function CardFood(props) {
  const { item } = props

  return (
    <S.CardWrapper key={item.id} elevation={0}>

      <S.Content>
        <S.Img image={item.photoUrl} />
      </S.Content>

      <S.Content>
        <Typography color="primary">
          {item.name}
        </Typography>
        <Typography color="secondary" className="description">
          {item.description}
        </Typography>
        <div className="bottomCard">
          <Typography className="price">
            {/* Precisamos colocar os centavos dos valores. */}
            R$ {Number.parseFloat(item.price).toFixed(2).replace(".", ",")}
          </Typography>
        </div>
      </S.Content>

      {item.quantity !== 0
        ?
        <S.ButtonAddRemove className="buttom" variant="outlined" color="default">
          adicionar
              </S.ButtonAddRemove>
        :
        <S.ButtonAddRemove className="buttom" variant="outlined" color="primary" marginRed>
          remover
              </S.ButtonAddRemove>
      }

      {item.quantity !== 0 &&
        <S.Count color="default">
          {item.quantity}
        </S.Count>}

    </S.CardWrapper>
  )
}

export default CardFood;