import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router'
import { routes } from '../Router'

import * as S from './styles';

import {getFullAdress, addAdress} from '../../actions/user'
import Appbar from '../../components/Appbar';

function AdressEditPage(props) {
  const {adressInfo, getAdressInfo, addAdress, goToProfile} = props
  const { street, number, complement, neighbourhood, city, state } = adressInfo
  
  useEffect( () => {
    getAdressInfo()
  }, [])
  
  console.log(adressInfo)

  const [inputs, setInputs] = useState({
    logradouro: street,
    numero: number,
    complemento: complement,
    bairro: neighbourhood,
    cidade: city,
    estado: state
  })

  

  const handleInputs = event => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value })
  }

  const { logradouro, numero, complemento, bairro, cidade, estado } = inputs;

  const changeAddress = async (event) => {
    event.preventDefault()
    const addAdressData = {
      street: logradouro,
      number: numero,
      neighbourhood: bairro,
      city: cidade,
      state: estado,
      complement: complemento
    }
    await addAdress(addAdressData)
    goToProfile()
  }

  return (

    <S.AndressEditWrapper color="white">
      <Appbar page='adressEdit' />
      <S.Form onSubmit={changeAddress}>
        <S.Input
          name="logradouro"
          required
          type="text"
          id="outlined-required"
          label="Logradouro"
          value={logradouro}
          onChange={handleInputs}
          placeholder="Rua / Av."
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{ 
            pattern: "[a-zA-Zà-úÀ-ú0-9 ]*",
            title: "O logradouro aceita letras e numeros" 
          }}
        />
        <S.Input
          name="numero"
          required
          type="text"
          id="outlined-required"
          label="Número"
          value={numero}
          onChange={handleInputs}
          placeholder="Número"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{ 
            pattern: "[0-9]*",
            title: "Aceita apenas números"
          }}
        />
        <S.Input
          name="complemento"
          type="text"
          id="outlined-required"
          label="Complemento"
          value={complemento}
          onChange={handleInputs}
          placeholder="Apto./Bloco"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{ 
            pattern: "[a-zA-Zà-úÀ-ú0-9 ]*",
            title: "Complemento aceita letras e números" 
          }}
        />
        <S.Input
          name="bairro"
          required
          type="text"
          id="outlined-required"
          label="Bairro"
          value={bairro}
          onChange={handleInputs}
          placeholder="Bairro"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{ 
            pattern: "[a-zA-Zà-úÀ-ú0-9 ]*",
            title: "Bairro aceita letras e números" 
          }}
        />
        <S.Input
          name="cidade"
          required
          type="text"
          id="outlined-required"
          label="Cidade"
          value={cidade}
          onChange={handleInputs}
          placeholder="Cidade"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{ 
            pattern: "[a-zA-Zà-úÀ-ú0-9 ]*",
            title: "Cidade aceita letras e números" 
          }}
        />
        <S.Input
          name="estado"
          required
          type="text"
          id="outlined-required"
          label="Estado"
          value={estado}
          onChange={handleInputs}
          placeholder="Estado"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{ 
            pattern: "[A-Z ]{2,2}",
            title: "Aceita apenas a sigla do Estado com duas letras maiúsculas" 
          }}
        />
        <S.ButtonSubmit type="submit">Salvar</S.ButtonSubmit>
      </S.Form>
    </S.AndressEditWrapper>
  )
}

const mapStateToProps = state => ({
  adressInfo: state.user.userAddress 
})

const mapDispatchToProps = dispatch => ({
  getAdressInfo: () => dispatch(getFullAdress()),
  addAdress: (addAdressData) => dispatch(addAdress(addAdressData)),
  goToProfile: () => dispatch(push(routes.profile))
})

export default  connect(mapStateToProps, mapDispatchToProps)(AdressEditPage);