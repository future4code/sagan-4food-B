import React from 'react'
import { connect } from 'react-redux'

import * as S from './styles'

import CardRestaurant from '../../components/CardRestaurant';

function Search(props){

    const { restaurants, inputSearch } = props

    return (
        <S.SearchWrapper>
            

            {restaurants
                .filter(restaurant => restaurant.toLowerCase().includes(inputSearch.toLowerCase()))
                .map(restaurant => (
                <CardRestaurant key={restaurant} restaurant={restaurant} />
              ))}


        </S.SearchWrapper>
    )
}

const mapStateToProps = (state) => ({
    inputSearch: state.search.inputSearch
  })

export default connect(mapStateToProps)(Search)
