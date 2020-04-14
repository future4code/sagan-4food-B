import React from 'react';
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../../containers/Router'

import * as S from './styles'
import { TextField, InputAdornment } from '@material-ui/core'

import Appbar from '../../components/Appbar';
import CardRestaurant from '../../components/CardRestaurant';

function FeedPage(props) {

  const { goToSearch } = props

  const categories = ['Burger', 'Asiática', 'Massas', 'Saudáveis', 'Árabe', 'Lalala', 'aaaaa', 'bbbbb']

  const restaurants = ['a', 'b', 'c']

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
          {categories.map(category => (
            <S.Category key={category}>
              {category}
            </S.Category>
          ))}
        </S.FilterScroll>

        <S.Restaurants>
          {restaurants.map(restaurant => (
            <CardRestaurant key={restaurant} restaurant={restaurant} />
          ))}
        </S.Restaurants>

      </S.Container>

    </S.FeedPageWrapper>
  )
}

const mapDispatchToProps = dispatch => ({
  goToSearch: () => dispatch(push(routes.search))
})

export default connect(null, mapDispatchToProps)(FeedPage);