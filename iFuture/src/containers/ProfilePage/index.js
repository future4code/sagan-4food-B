import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import { getProfile } from '../../actions/user';

import * as S from './styles'

import Appbar from '../../components/Appbar';
import CardHistory from '../../components/CardHistory';
import Bottombar from '../../components/Bottombar';

function ProfilePage(props) {

  const { user, goToProfileEdit, goToAdressEdit, getProfile } = props

  useEffect(() => {
    getProfile()
  }, [])

  const orderHistoryListMock = [
    {
      name: "Mc Donalds",
      date: 1574660015364,
      value: 10
    },
    {
      name: "Burger King",
      date: 1574663615364,
      value: 20
    },
    {
      name: "Bar do Zé",
      date: 1574660015364,
      value: 30
    }
  ]

  const onEditProfile = (user) => {
    // mande o usuário para o editar perfil

    // vá pro goToProfileEdit (retirar quando integra com a api)
    goToProfileEdit()
  }

  const onEditAdress = (user) => {
    // mande o usuário para o editar endereço

    // vá pro goToAdressEdit (retirar quando integra com a api)
    goToAdressEdit()
  }

  return (
    <S.ProfilePageWrapper>
      <Appbar page='profile' />

      <S.Container>

        <S.TextStyled> {user.name} </S.TextStyled>

        <S.TextStyled> {user.email} </S.TextStyled>

        <S.TextStyled> {user.cpf} </S.TextStyled>

        <S.IconEdit src={require("../../assets/edit.svg")} alt='Voltar' onClick={() => onEditProfile(user)} />

        <S.AdressContainer>
          <S.TextStyled grey> Endereço cadastrado </S.TextStyled>
          <S.TextStyled> {user.address} </S.TextStyled>
          <S.IconEdit src={require("../../assets/edit.svg")} alt='Voltar' onClick={() => onEditAdress(user)} />
        </S.AdressContainer>

        <S.TextStyled line> Histórico de pedidos </S.TextStyled>

        {orderHistoryListMock.length === 0
          ?
          <S.EmptyOrders>
            <S.EmptyOrdersText>
              Você não realizou nenhum pedido
            </S.EmptyOrdersText>
          </S.EmptyOrders>
          :
          orderHistoryListMock.map(order => (
            <CardHistory key={order} order={order} />
          ))
        }

      </S.Container>

      <Bottombar page='profile' />

    </S.ProfilePageWrapper>
  )
}

const mapStateToProps = (state) => ({
  user: state.user.user
})

const mapDispatchToProps = (dispatch) => ({
  goToProfileEdit: () => dispatch(push(routes.profileEdit)),
  goToAdressEdit: () => dispatch(push(routes.adressEdit)),
  getProfile: () => dispatch(getProfile())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);