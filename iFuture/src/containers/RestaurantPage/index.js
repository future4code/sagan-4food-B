import React from 'react';

import * as S from './styles'

import Appbar from '../../components/Appbar';
import RestaurantHeader from '../../components/RestaurantHeader';
import RestaurantDishes from '../../components/RestaurantDishes';
import { connect } from 'react-redux';

function RestaurantPage(props) {
  const {mock} = props

  return (
    <div>
      <Appbar page='restaurant' />
      <S.RestaurantWrapper>
        <RestaurantHeader
          mock={mock}
        />
        <RestaurantDishes 
          data={mock.products}
        />
      </S.RestaurantWrapper>
    </div>
  )
}

const mapStateToProps = state => ({
  mock: state.food.restaurantDetails
})

export default connect(mapStateToProps)(RestaurantPage);