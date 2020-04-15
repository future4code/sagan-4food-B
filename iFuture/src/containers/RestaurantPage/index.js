import React from 'react';
import styled from 'styled-components';

import Appbar from '../../components/Appbar';
import Header from '../../components/CardsRestaurant/Header';

import mock from './mock';
import MainDishes from '../../components/CardsRestaurant/MainDishes';
import Accompaniments from '../../components/CardsRestaurant/Accompaniments';

const RestaurantWrapper = styled.div`
  background: white;
  padding: 0 16px;
`

function RestaurantPage() {
  return (
    <div>
      <Appbar page='restaurant' />
      <RestaurantWrapper>
        <Header
          img={mock.logoUrl}
          name={mock.name}
          category={mock.category}
          deliveryTime={mock.deliveryTime}
          shipping={mock.shipping}
          address={mock.address}
        />
        <MainDishes data={mock.products} />
        <Accompaniments data={mock.products}/>
      </RestaurantWrapper>
    </div>
  )
}

export default RestaurantPage;