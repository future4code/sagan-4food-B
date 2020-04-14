import React, {Component} from 'react';
import Appbar from '../../components/Appbar';
import Textfield from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import  Typography  from '@material-ui/core/Typography';
import {DivWrapper, FormWrapper, TitleWrapper} from './SignupPageStyle'
import Bottombar from '../../components/Bottombar';

const createNewUser = [

  {
    name: "name",
    label: "Nome",
    placeholder:"Nome e Sobrenome",
    type: "text",
    required: true,
    pattern: "[a-zA-Z]{3,}",
    title: "Nome completo do Usuário"
  },
  {
    name: 'email',
    label: "Email",
    placeholder:"email@email.com",
    type: "email",
    required: true,
    title: "Digite um email Válido"
  },
  {
    name: 'cpf',
    label: "CPF",
    placeholder:"000.000.000-00",
    type: "text",
    required: true,
    pattern: "/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/",
    title: "Digite seu CPF sem pontos e espaços."
  },
  {
    name: 'password',
    label: "Senha",
    type: "password",
    placeholder:"Mínimo 6 caracteres",
    required: true,
    pattern: "{6,}",
    title: "Sua senha deve conter no minimo 6 caracteres"
  },
  {
    name: 'confirm',
    label: "Confirmar",
    type: "password",
    placeholder:"Confirme a senha anterior",
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


  render() {
    return (
      <DivWrapper>
        <Appbar page='signup'/>
        {logo}
        <TitleWrapper>
        <Typography variant='h5'>Cadastrar</Typography>
        </TitleWrapper>
        <FormWrapper>
          {createNewUser.map(field => {
            return(
                <Textfield
                variant="outlined"
                margin="normal"
                label={field.label}
                name={field.name}
                placeholder={field.placeholder}
                type={field.type}
                inputProps={{ pattern: field.pattern }}
                required={field.required}
                title={field.title}
                />
            )
          })}
          <Button type='submit' variant='contained' color='primary'>Criar</Button>
        </FormWrapper>
      </DivWrapper>
    )
  }
}
export default SignupPage;