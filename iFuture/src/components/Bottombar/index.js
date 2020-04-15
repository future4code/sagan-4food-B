import React from 'react'
import { BottomNavigationAction } from '@material-ui/core';
import { DivWrapper } from './styles'

function Bottombar(props) {
  const { page } = props

  let iconHome = <img src={require("../../assets/homepage-grey.svg")} alt='CartPage' />
  if (page === 'home') {
    iconHome = <img src={require("../../assets/homepage-red.svg")} alt='home' />
  }


  let iconCart = <img src={require("../../assets/shopping-cart-grey.svg")} alt='CartPage' />
  if (page === 'cart') {
    iconCart = <img src={require("../../assets/shopping-cart-red.svg")} alt='home' />
  }

  let inconProfile = <img src={require("../../assets/avatar-grey.svg")} alt='Profile' />
  if (page === 'profile') {
    inconProfile = <img src={require("../../assets/avatar-red.svg")} alt='home' />
  }
  return (
    <DivWrapper>
      {/* <BottomNavigation> */}
      <BottomNavigationAction label="HomePage" icon={iconHome} />
      <BottomNavigationAction label="CartPage" icon={iconCart} />
      <BottomNavigationAction label="Profile" icon={inconProfile} />
      {/* </BottomNavigation> */}
    </DivWrapper>
  )
}

export default Bottombar