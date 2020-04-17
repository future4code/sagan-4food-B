import React from 'react';
import { connect } from 'react-redux'

import { setDialog, setItemId } from '../../actions/confirmationDialog'

import { Typography } from '@material-ui/core';
import * as S from './styles'

function CardFoodInCart(props) {
  const { item, infoQuantity } = props
  console.log(infoQuantity)

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
            R$ {item.price.includes(',')
        ? item.price
        : `${item.price},00`}
          </Typography>
        </div>
      </S.Content>

      <S.ButtonRemove variant="outlined" >
        remover
      </S.ButtonRemove>

      <S.Count>
        1
      </S.Count>

    </S.CardWrapper>
  )
}

const mapStateToProps = state => ({
  infoQuantity: state.food.infoQuantity
})

const mapDispatchToProps = dispatch => ({
  setOpen: (option) => dispatch(setDialog(option)),
  setItemId: (itemId) => dispatch(setItemId(itemId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardFoodInCart)