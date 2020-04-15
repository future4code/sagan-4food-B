import React from 'react';
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'

import * as S from './styles'

import Appbar from '../../components/Appbar';
import CardHistory from '../../components/CardHistory';
import { Typography } from '@material-ui/core';

function ProfilePage(props) {

  const { user, goToProfileEdit, goToAdressEdit } = props

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

  return (
    <S.ProfilePageWrapper>
      <Appbar page='profile' />

      <S.Container>

        <S.TextStyled> {user.name} </S.TextStyled>

        <S.TextStyled> {user.email} </S.TextStyled>

        <S.TextStyled> {user.cpf} </S.TextStyled>

        <S.IconEdit src={require("../../assets/edit.svg")} alt='Voltar' onClick={goToProfileEdit} />

        <S.AdressContainer>
          <S.TextStyled grey> Endereço cadastrado </S.TextStyled>
          <S.TextStyled> {user.address} </S.TextStyled>
          <S.IconEdit src={require("../../assets/edit.svg")} alt='Voltar' onClick={goToAdressEdit} />
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
    </S.ProfilePageWrapper>
  )
}

const mapStateToProps = (state) => ({
  user: state.user.user
})

const mapDispatchToProps = (dispatch) => ({
  goToProfileEdit: () => dispatch(push(routes.profileEdit)),
  goToAdressEdit: () => dispatch(push(routes.adressEdit)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);