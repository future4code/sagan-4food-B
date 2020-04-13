import React from 'react'
import * as S from './styles'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

function Appbar(props) {
    const { page, inputSearch } = props

    const buttonReturn = <img src={require("../../assets/back.png")} alt='Voltar' />

    let content
    switch (page) {

        case 'login':
        case 'signup':
        case 'adressRegister':
            content = <S.SpaceContent>{buttonReturn}</S.SpaceContent>
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
                        {buttonReturn}
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
                {buttonReturn}
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
                {buttonReturn}
                <Typography variant="h6">Editar</Typography>
                <div></div>
            </S.SpaceContent>
            break;

        case 'adressEdit':
            content = <S.SpaceContent>
                {buttonReturn}
                <Typography variant="h6">Endereço</Typography>
                <div></div>
            </S.SpaceContent>
            break;

        default:
            content = ''
            break;
    }

    return (
        <AppBar color="white" position="static">
            <Toolbar>
                {content}
            </Toolbar>
        </AppBar>
    )
}

export default Appbar