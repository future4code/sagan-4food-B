import React from 'react';
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'

import * as S from './styles'

import Appbar from '../../components/Appbar';
import CardHistory from '../../components/CardHistory';

function ProfilePage(props) {

  const { goToProfileEdit, goToAdressEdit} = props

  const userMock = {
    id: "De8UACSFgFySnKdXm5hI",
    name: "Astrodev",
    email: "astrodev@future4.com",
    cpf: "111.111.111-11",
    hasAddress: true,
    address: "R. Afonso Braz, 177 - Vila N. Conceição"
  }

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
      <Appbar page='profile'/>
      
      <S.Container>

        <S.TextStyled> {userMock.name} </S.TextStyled>

        <S.TextStyled> {userMock.email} </S.TextStyled>

        <S.TextStyled> {userMock.cpf} </S.TextStyled>

        <S.IconEdit src={require("../../assets/edit.svg")} alt='Voltar' onClick={goToProfileEdit}/>

        <S.AdressContainer>
          <S.TextStyled grey> Endereço cadastrado </S.TextStyled>
          <S.TextStyled> {userMock.address} </S.TextStyled>
          <S.IconEdit src={require("../../assets/edit.svg")} alt='Voltar' onClick={goToAdressEdit}/>
        </S.AdressContainer>

        <S.TextStyled line> Histórico de pedidos </S.TextStyled>

        {orderHistoryListMock.map(order => (
          <CardHistory key={order} order={order}/>
        ))}

      </S.Container>
    </S.ProfilePageWrapper>
  )
}

const mapDispatchToProps = (dispatch) => ({
  goToProfileEdit: () => dispatch(push(routes.profileEdit)),
  goToAdressEdit: () => dispatch(push(routes.adressEdit)),
})

export default connect(null, mapDispatchToProps)(ProfilePage);