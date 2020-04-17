import React from 'react';
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core';
import * as S from './styles'

import { setDialog, setItemId } from '../../actions/confirmationDialog'
import { removeQuantity } from '../../actions/food'

import ConfirmationDialog from '../ConfirmationDialog';

function CardFood(props) {
  const { setOpen, item, setItemId, infoQuantity, removeQuantity } = props

  const productExist = infoQuantity.findIndex(product =>
    product.id === item.id)

  const handleClickOpen = (itemId) => {
    setOpen(true);
    setItemId(itemId)
  };

  const clickToRemove = (itemId) => {
    removeQuantity(itemId)
  }

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
            {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </Typography>
        </div>
      </S.Content>

      {productExist > -1
        ?
        <S.ButtonRemove 
          variant="outlined" 
          onClick={() => clickToRemove(item.id)}
        >
          remover
        </S.ButtonRemove>
        :
        <>
          <S.ButtonAdd
            variant="outlined"
            onClick={() => handleClickOpen(item.id)}
          >
            adicionar
          </S.ButtonAdd>
          <ConfirmationDialog />
        </>
      }

      {productExist > -1
        &&
        <S.Count color="default">
        {infoQuantity[productExist].quantity}
      </S.Count>
      }

    </S.CardWrapper>
  )
}

const mapStateToProps = state => ({
  infoQuantity: state.food.infoQuantity
})

const mapDispatchToProps = dispatch => ({
  setOpen: (option) => dispatch(setDialog(option)),
  setItemId: (itemId) => dispatch(setItemId(itemId)),
  removeQuantity: (itemId) => dispatch(removeQuantity(itemId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardFood)