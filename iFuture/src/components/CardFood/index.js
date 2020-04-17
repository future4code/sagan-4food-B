import React from 'react';
import { connect } from 'react-redux'

import { setDialog, setItemId } from '../../actions/confirmationDialog'

import { Typography } from '@material-ui/core';
import * as S from './styles'

import ConfirmationDialog from '../ConfirmationDialog';

function CardFood(props) {
  const { setOpen, item, page, setItemId, infoQuantity } = props
  console.log(infoQuantity)

  let price
  if (page === 'restaurantDishes') {
    price = item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }
  if (page === 'cartMain') {
    const final = item.price.includes(',')
      ? item.price
      : `${item.price},00`
    price = `R$ ${final}`
  }

  const handleClickOpen = (itemId) => {
    setOpen(true);
    setItemId(itemId)
  };

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
            {price}
          </Typography>
        </div>
      </S.Content>

      

      {/* {item.quantity !== 0
        ?
        <> */}
          <S.ButtonAddRemove 
            className="buttom" variant="outlined" color="default"
            onClick={() => handleClickOpen(item.id)}
          >
            adicionar
          </S.ButtonAddRemove>
          <ConfirmationDialog/>
        {/* </>     
        :
        <S.ButtonAddRemove className="buttom" variant="outlined" color="primary" marginRed>
          remover
        </S.ButtonAddRemove>
      } */}

      {/* {item.quantity !== 0 &&
        <S.Count color="default">
          {item.quantity}
        </S.Count>} */}

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

export default connect(mapStateToProps, mapDispatchToProps)(CardFood)