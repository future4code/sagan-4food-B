import React from 'react';
import * as S from '../CartPage/styles'

import Appbar from '../../components/Appbar';
import Bottombar from '../../components/Bottombar';
import CartMain from '../../components/CartMain';
import CartFooter from '../../components/CartFooter';

import { connect } from 'react-redux';

function CartPage(props) {
  
  const { user, restaurant, infoQuantity } = props
  
  let filteredList = []
  if (restaurant.products) {
  for(let item of restaurant.products){
      for(let elem of infoQuantity) {
          if (item.id === elem.id) {
              filteredList.push(item)
          }
      }
  }
}




  return (
    <S.ContentWrapper>
      <Appbar page='cart' />

      <S.Container>
        
        <S.AdressBoxWrapper>
          <S.Text gray> Endereço da entrega </S.Text>
          <S.Text> {user.address} </S.Text>
        </S.AdressBoxWrapper>
        
      {Object.keys(restaurant).length !== 0 ? (
        <>
      <CartMain filteredList={filteredList} restaurant={restaurant}/>
      <CartFooter filteredList={filteredList} infoQuantity={infoQuantity} restaurant={restaurant}/>
      </>
      ) : <div>Oi</div>
    }

      </S.Container>

      <Bottombar page='cart' />
    </S.ContentWrapper>
  )
}

const mapStateToProps = state => ({
  restaurant: state.food.restaurantDetails,
  user: state.user.user,
  infoQuantity: state.food.infoQuantity
});

export default connect(mapStateToProps)(CartPage);