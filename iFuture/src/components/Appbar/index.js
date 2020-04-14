import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../../containers/Router'

import { setInputSearch } from '../../actions/search'

import * as S from './styles'
import { Toolbar, Typography } from '@material-ui/core'

function Appbar(props) {
    const {
        page,
        inputSearch,
        setInputSearch,
        goToLogin,
        goToFeed,
        goToProfile
    } = props

    const buttonReturn = <img src={require("../../assets/back.svg")} alt='Voltar' />

    const clearSearch = () => {
        setInputSearch('')
    }

    let content
    switch (page) {

        case 'signup':
        case 'adressRegister':
            content = <S.SpaceContent>
                <S.Button onClick={goToLogin}>{buttonReturn}</S.Button>
            </S.SpaceContent>
            break;

        case 'feed':
            content = <>
                {inputSearch === ''
                    ?
                    <S.CenteredContent>
                        <Typography variant="h6">Ifuture</Typography>
                    </S.CenteredContent>
                    :
                    <S.SpaceContent>
                        <S.Button onClick={clearSearch}>{buttonReturn}</S.Button>
                        <Typography variant="h6">Busca</Typography>
                        <div></div>
                    </S.SpaceContent>
                }
            </>
            break;

        case 'cart':
            content = <S.CenteredContent>
                <Typography variant="h6">Meu Carrinho</Typography>
            </S.CenteredContent>
            break;

        case 'restaurant':
            content = <S.SpaceContent>
                <S.Button onClick={goToFeed}>{buttonReturn}</S.Button>
                <Typography variant="h6">Restaurante</Typography>
                <div></div>
            </S.SpaceContent>
            break;

        case 'profile':
            content = <S.CenteredContent>
                <Typography variant="h6">Meu perfil</Typography>
            </S.CenteredContent>
            break;

        case 'profileEdit':
            content = <S.SpaceContent>
                <S.Button onClick={goToProfile}>{buttonReturn}</S.Button>
                <Typography variant="h6">Editar</Typography>
                <div></div>
            </S.SpaceContent>
            break;

        case 'adressEdit':
            content = <S.SpaceContent>
                <S.Button onClick={goToProfile}>{buttonReturn}</S.Button>
                <Typography variant="h6">Endereço</Typography>
                <div></div>
            </S.SpaceContent>
            break;

        default:
            content = ''
            break;
    }

    return (
        <S.AppbarStyled position="static">
            <Toolbar>
                {content}
            </Toolbar>
        </S.AppbarStyled>
    )
}

const mapStateToProps = (state) => ({
    inputSearch: state.search.inputSearch
})

const mapDispatchToProps = (dispatch) => ({
    setInputSearch: (inputContent) => dispatch(setInputSearch(inputContent)),
    goToLogin: () => dispatch(push(routes.login)),
    goToFeed: () => dispatch(push(routes.feed)),
    goToProfile: () => dispatch(push(routes.profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(Appbar)