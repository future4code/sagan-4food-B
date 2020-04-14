import React from 'react'
import { connect } from 'react-redux'
import { setInputSearch } from '../../actions/search'

import * as S from './styles'
import { TextField, InputAdornment } from '@material-ui/core'

import Appbar from '../../components/Appbar'
import CardRestaurant from '../../components/CardRestaurant'

function SearchPage(props) {

    const { inputSearch, setInputSearch } = props

    const handleInputSearchChange = (e) => {
        setInputSearch(e.target.value)
    }

    const restaurants = [
        {
          id: "1",
          description: "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
          shipping: 6,
          address: "Rua das Margaridas, 110 - Jardim das Flores",
          name: "Habibs",
          logoUrl: "http://soter.ninja/futureFoods/logos/habibs.jpg",
          deliveryTime: 60,
          category: "Árabe"
        },
        {
          id: "10",
          address: "Travessa Reginaldo Pereira, 130 - Ibitinga",
          name: "Tadashii",
          logoUrl: "http://soter.ninja/futureFoods/logos/tadashii.png",
          deliveryTime: 50,
          category: "Asiática",
          description: "Restaurante sofisticado busca o equilíbrio entre ingredientes que realçam a experiência da culinária japonesa.",
          shipping: 13
        },
        {
          id: "3",
          deliveryTime: 20,
          category: "Italiana",
          description: "Restaurante Self Service e lanchonete localizado no Laboratório Nacional de Computação Científica",
          shipping: 2,
          address: "Rua Barão do Rio Branco, 98 - Centro",
          name: "Cantina Mamma Perrotta",
          logoUrl: "http://soter.ninja/futureFoods/logos/cantinamammaperrotta.jpg"
        },
        {
          id: "2",
          description: "McDonald's Corporation é a maior cadeia mundial de restaurantes de fast food de hambúrguer, servindo cerca de 68 milhões de clientes por dia em 119 países através de 37 mil pontos de venda.",
          shipping: 19,
          address: "Avenida dos Papagaios, 1350 - Sta. Efigênia",
          name: "McDonalds",
          logoUrl: "http://soter.ninja/futureFoods/logos/mcdonalds.png",
          deliveryTime: 15,
          category: "Hamburguer"
        },
      ]

    const restaurantsFiltered = restaurants.filter(restaurant => restaurant.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))

    return (
        <S.SearchPageWrapper>
            <Appbar page='search' />

            <S.Container>
                <TextField
                    value={inputSearch}
                    onChange={handleInputSearchChange}
                    fullWidth
                    variant='outlined'
                    placeholder='Restaurante'
                    InputProps={{
                        startAdornment: (<InputAdornment position="start">
                                <img src={require("../../assets/search.svg")} alt='Voltar' />
                            </InputAdornment>),
                    }}
                />

                {inputSearch === ''

                    ? <S.CenteredContent>
                        <S.MessageSearch>
                            Busque por nome de restaurante
                        </S.MessageSearch>
                    </S.CenteredContent>

                    : restaurantsFiltered.length === 0

                        ? <S.CenteredContent>
                            <S.MessageSearch>
                                Não encontramos :(
                            </S.MessageSearch>
                        </S.CenteredContent>

                        : <S.SearchWrapper>
                            {restaurantsFiltered.map(restaurant => (
                                <CardRestaurant key={restaurant.id} restaurant={restaurant} />
                            ))}
                        </S.SearchWrapper>
                }

            </S.Container>
        </S.SearchPageWrapper>

    )
}

const mapStateToProps = (state) => ({
    inputSearch: state.search.inputSearch
})

const mapDispatchToProps = dispatch => ({
    setInputSearch: (inputContent) => dispatch(setInputSearch(inputContent))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
