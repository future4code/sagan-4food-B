import React, { Component } from 'react';

import * as S from './styles'

import Appbar from '../../components/Appbar';

const createNewUser = [
  {
    name: "name",
    label: "Nome",
    placeholder: "Nome e Sobrenome",
    type: "text",
    required: true,
    pattern: "[a-zA-Zà-úÀ-ú ]{3,}",
    title: "Nome completo do Usuário"
  },
  {
    name: 'email',
    label: "Email",
    placeholder: "email@email.com",
    type: "email",
    required: true,
    title: "Digite um email Válido"
  },
  {
    name: 'cpf',
    label: "CPF",
    placeholder: "000.000.000-00",
    type: "text",
    required: true,
    pattern: "[0-9]{3,}[.]{1,}[0-9]{3,}[.]{1,}[0-9]{3,}[-]{1,}[0-9]{2,}",
    title: "Digite seu CPF sem pontos e espaços."
  },
  {
    name: 'password',
    label: "Senha",
    type: "password",
    placeholder: "Mínimo 6 caracteres",
    required: true,
    pattern: "{6,}",
    title: "Sua senha deve conter no minimo 6 caracteres"
  },
  {
    name: 'confirm',
    label: "Confirmar",
    type: "password",
    placeholder: "Confirme a senha anterior",
    required: true,
    pattern: "{6,12}",
    title: "confirmação da senha"
  }
];

const logo = <img src={require("../../assets/logo-future-eats-invert.svg")} alt='Voltar' />

class SignupPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {}
    }
  }

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    })
  }

  handleSubmission = event => {
    event.preventDefault();
    console.log(this.state.form)
  }

  render() {
    return (
      <S.DivWrapper>
        <Appbar page='signup' />
        
        <S.Container>

        {logo}

        <S.TitleWrapper>

          <S.Title>
            Cadastrar
          </S.Title>

        </S.TitleWrapper>
        <S.FormWrapper onSubmit={this.handleSubmission}>
          {createNewUser.map(field => {
            return (
              <S.Input
                key={field.name}
                variant="outlined"
                margin="normal"
                label={field.label}
                name={field.name}
                placeholder={field.placeholder}
                value={this.state.form[field.name]}
                onChange={this.handleInput}
                type={field.type}
                inputProps={{ pattern: field.pattern }}
                required={field.required}
                title={field.title}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )
          })}
          <S.ButtonStyled type='submit' variant='contained' color='primary'>Criar</S.ButtonStyled>
        </S.FormWrapper>
        
        </S.Container>
      </S.DivWrapper>
    )
  }
}
export default SignupPage;