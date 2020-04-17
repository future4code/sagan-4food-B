import React from 'react';
import { connect } from 'react-redux'

import { setDialog } from '../../actions/confirmationDialog'

import { Typography } from '@material-ui/core';
import * as S from './styles'

import ConfirmationDialog from '../ConfirmationDialog';

function CardFood(props) {
  const { setOpen, item, page } = props
  // console.log(item)

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

  const handleClickOpen = () => {
    setOpen(true);
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
        <>
          <S.ButtonAddRemove 
            className="buttom" variant="outlined" color="default"
            onClick={handleClickOpen}
          >
            adicionar
          </S.ButtonAddRemove>
          <ConfirmationDialog item={item}/>
        </>     
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

const mapDispatchToProps = dispatch => ({
  setOpen: (option) => dispatch(setDialog(option))
})

export default connect(null, mapDispatchToProps)(CardFood)