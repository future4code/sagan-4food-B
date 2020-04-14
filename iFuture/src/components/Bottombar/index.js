import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { DivWrapper } from './styles'



function Bottombar() {
    return (
      <DivWrapper>
        {/* <BottomNavigation> */}
          <BottomNavigationAction label="HomePage" icon={<img src={require("../../assets/homepage.svg")} alt='home' />} />
          <BottomNavigationAction label="CartPage" icon={<img src={require("../../assets/shopping-cart.svg")} alt='CartPage' />} />
          <BottomNavigationAction label="Profile" icon={<img src={require("../../assets/avatar.svg")} alt='Profile' />} />
        {/* </BottomNavigation> */}
      </DivWrapper>
    )
}

export default Bottombar