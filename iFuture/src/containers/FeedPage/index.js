import React, { useState } from 'react';
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../../containers/Router'

import { restaurants } from './constants'

import * as S from './styles'
import { TextField, InputAdornment } from '@material-ui/core'

import Appbar from '../../components/Appbar';
import CardRestaurant from '../../components/CardRestaurant';
import Bottombar from '../../components/Bottombar';

function FeedPage(props) {

  const { goToSearch } = props

  const [categoryClicked, setCategoryClicked] = useState(false)
  const [categorySelected, setCategorySelected] = useState('')

  const selectCategory = (category) => {
    setCategoryClicked(true)
    setCategorySelected(category)
    if (category === categorySelected) {
      setCategoryClicked(!categoryClicked)
      setCategorySelected('')
    }
  }

  const restaurantsFiltered = restaurants.filter(restaurant => restaurant.category === categorySelected)

  let restaurantsAppears
  if (categorySelected === '') {
    restaurantsAppears = restaurants
  } else {
    restaurantsAppears = restaurantsFiltered
  }

  const allCategories = restaurants.map(restaurant => restaurant.category)
  const categories = allCategories.filter((el, i, arr) => arr.indexOf(el) === i);
  let categoriesPersonalized 
  if(categoryClicked){
    categoriesPersonalized = categories.map(category => (
      <S.Category key={category} onClick={() => selectCategory(category)} personalizedColor>
        {category}
      </S.Category>
    ))
  } else {
    categoriesPersonalized = categories.map(category => (
      <S.Category key={category} onClick={() => selectCategory(category)}>
        {category}
      </S.Category>
    ))
  }

  return (
    <S.FeedPageWrapper>
      <Appbar page='feed' />

      <S.Container>

        <TextField
          onClick={goToSearch}
          fullWidth
          variant='outlined'
          placeholder='Restaurante'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={require("../../assets/search.svg")} alt='Voltar' />
              </InputAdornment>
            ),
          }}
        />

        <S.FilterScroll>
          {categoriesPersonalized}
        </S.FilterScroll>

        <S.Restaurants>
          {restaurantsAppears.map(restaurant => (
            <CardRestaurant key={restaurant.id} restaurant={restaurant} />
          ))}
        </S.Restaurants>

      </S.Container>

      <Bottombar page='home'/>

    </S.FeedPageWrapper>
  )
}

const mapDispatchToProps = dispatch => ({
  goToSearch: () => dispatch(push(routes.search))
})

export default connect(null, mapDispatchToProps)(FeedPage);