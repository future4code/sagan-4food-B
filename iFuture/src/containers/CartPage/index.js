import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as S from '../CartPage/styles'

import { getProfile } from '../../actions/user';

import Appbar from '../../components/Appbar';
import Bottombar from '../../components/Bottombar';
import CartMain from '../../components/CartMain';
import CartFooter from '../../components/CartFooter';

function CartPage(props) {

  const { user, restaurant, infoQuantity } = props
  console.log(user)

  useEffect(() => {
    getProfile()
  }, [])

  let filteredList = []
  if (restaurant.products) {
    for (let item of restaurant.products) {
      for (let elem of infoQuantity) {
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
            <CartMain filteredList={filteredList} restaurant={restaurant} />
            <CartFooter filteredList={filteredList} infoQuantity={infoQuantity} restaurant={restaurant} />
          </>
        ) : <div>Oi</div>
        }

      </S.Container>

      <Bottombar page='cart' />
    </S.ContentWrapper>
  )
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  restaurant: state.food.restaurantDetails,
  infoQuantity: state.food.infoQuantity
})

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => dispatch(getProfile())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);