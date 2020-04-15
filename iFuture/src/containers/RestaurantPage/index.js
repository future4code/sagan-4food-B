import React from 'react';

import * as S from './styles'

import Appbar from '../../components/Appbar';
import RestaurantHeader from '../../components/RestaurantHeader';
import RestaurantDishes from '../../components/RestaurantDishes';

import mock from './mock';

function RestaurantPage() {
  return (
    <div>
      <Appbar page='restaurant' />
      <S.RestaurantWrapper>
        <RestaurantHeader
          img={mock.logoUrl}
          name={mock.name}
          category={mock.category}
          deliveryTime={mock.deliveryTime}
          shipping={mock.shipping}
          address={mock.address}
        />
        <RestaurantDishes 
          data={mock.products}
        />
      </S.RestaurantWrapper>
    </div>
  )
}

export default RestaurantPage;