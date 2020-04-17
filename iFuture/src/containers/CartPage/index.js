import React from 'react';
import * as S from '../CartPage/styles'

import Appbar from '../../components/Appbar';
import Bottombar from '../../components/Bottombar';
import CartMain from '../../components/CartMain';
import CartFooter from '../../components/CartFooter';

import restaurant from '../RestaurantPage/mock'
import { connect } from 'react-redux';

function CartPage(props) {
  // const restaurant = { products: [] }
  // const { restaurant } = props
  
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

const mapStateToProps = state => ({
  // restaurant: state.food.restaurantDetails
});

export default connect(mapStateToProps)(CartPage);