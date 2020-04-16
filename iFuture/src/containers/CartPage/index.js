import React from 'react';
import * as S from '../CartPage/styles'

import Appbar from '../../components/Appbar';
import Bottombar from '../../components/Bottombar';
import CartMain from '../../components/CartMain';
import CartFooter from '../../components/CartFooter';

import restaurant from '../RestaurantPage/mock'

function CartPage() {
  // const restaurant = { products: [] }
  
  return (
    <S.ContentWrapper>
      <Appbar page='cart' />

      <S.Container>
        
        <S.AdressBoxWrapper>
          <S.Text gray> Endereço da entrega </S.Text>
          <S.Text> {restaurant.address} </S.Text>
        </S.AdressBoxWrapper>

        <CartMain restaurant={restaurant}/>

        <CartFooter restaurant={restaurant}/>
        
      </S.Container>

      <Bottombar page='cart' />
    </S.ContentWrapper>
  )
}

export default CartPage;