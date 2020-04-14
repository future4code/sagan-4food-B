import React, {useState} from 'react';
import {connect} from 'react-redux'
import {push} from "connected-react-router"
import {routes} from '../Router/index'
import * as S from './styles';
import { Typography, InputAdornment } from '@material-ui/core';

function LoginPage(props) {

  const [userInfo, setUserInfo] = useState({})

  function goToSignUp(){
    props.goToSignUp()
  }

  function getUserInfo(e){
    const {name,value} = e.target
    setUserInfo({...userInfo, [name]:value})
  }

  function sendUserInfo(e){
    e.preventDefault()
  }

  return (
    <S.PageWrapper>
      <S.LogoWrapper>
        <img src={require('../../assets/logo-future-eats-invert.png')}/>
      </S.LogoWrapper>
      <S.TitleWrapper>
        Entrar
      </S.TitleWrapper>
      <form onSubmit={sendUserInfo}>
        <S.InputWrapper
        name='email'
        variant="outlined"
        label="E-mail*"
        placeholder='email@email.com'
        type='text'
        value={userInfo.email || ''}
        onChange={getUserInfo}
        required
        />
        <S.InputWrapper
        name='password'
        variant="outlined"
        label="Senha*"
        placeholder='mínimo 6 caracteres'
        type='text'
        value={userInfo.password || ''}
        onChange={getUserInfo}
        required
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <S.ImgWrapper src={require('../../assets/senha.png')}/>
            </InputAdornment>
          ),
        }}
        />
        <S.ButtonWrapper
        type='onSubmit'
        variant="contained" 
        color="primary">
          <S.ButtonTextWrapper>Entrar</S.ButtonTextWrapper>
        </S.ButtonWrapper>
      </form>
      <S.SignupDirectionerWrapper>
        <Typography onClick={goToSignUp}>Não possui cadastro? Clique aqui</Typography>
      </S.SignupDirectionerWrapper>
    </S.PageWrapper>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    goToSignUp: () => dispatch(push(routes.signup))
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);