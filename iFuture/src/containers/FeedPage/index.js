import React from 'react';
import { connect } from 'react-redux'
import { setInputSearch } from '../../actions/search'

import * as S from './styles'
import { TextField, InputAdornment } from '@material-ui/core'


import Appbar from '../../components/Appbar';
import CardRestaurant from '../../components/CardRestaurant';
import Search from '../../components/Search';

function FeedPage(props) {

  const { inputSearch, setInputSearch } = props

  const handleInputSearchChange = (e) => {
    setInputSearch(e.target.value)
  }

  const categories = ['Burger', 'Asiática', 'Massas', 'Saudáveis', 'Árabe', 'Lalala', 'aaaaa', 'bbbbb']

  const restaurants = ['a', 'b', 'c']

  return (
    <S.FeedPageWrapper>
      <Appbar page='feed' />

      <S.Container>

        <TextField
          value={inputSearch}
          onChange={handleInputSearchChange}
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

        {inputSearch === ''
          ?
          <>
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
          </>
          :

          <Search restaurants={restaurants}/>

        }




      </S.Container>

    </S.FeedPageWrapper>
  )
}

const mapStateToProps = (state) => ({
  inputSearch: state.search.inputSearch
})

const mapDispatchToProps = dispatch => ({
  setInputSearch: (inputContent) => dispatch(setInputSearch(inputContent))
})

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);