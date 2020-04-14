import React from 'react'
import { connect } from 'react-redux'
import { setInputSearch } from '../../actions/search'

import * as S from './styles'
import { TextField, InputAdornment } from '@material-ui/core'

import Search from '../../components/Search'
import Appbar from '../../components/Appbar'

function SearchPage(props) {

    const { inputSearch, setInputSearch } = props

    const handleInputSearchChange = (e) => {
        setInputSearch(e.target.value)
    }

    const restaurants = ['a', 'b', 'c']

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
                        startAdornment: (
                            <InputAdornment position="start">
                                <img src={require("../../assets/search.svg")} alt='Voltar' />
                            </InputAdornment>
                        ),
                    }}
                />

                {inputSearch === ''
                    
                    ? <S.CenteredContent>
                        <S.MessageSearch>
                            Busque por nome de restaurante
                        </S.MessageSearch>
                    </S.CenteredContent>

                    : <Search restaurants={restaurants} />
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
