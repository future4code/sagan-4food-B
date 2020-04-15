import React, { Component } from 'react';
import Appbar from '../../components/Appbar';
import Textfield from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { DivWrapper, FormWrapper } from './styled'
import OrdersInProgress from '../../components/OrdersInProgress';

const editUserProfile = [
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
  }
]

class ProfileEditPage extends Component {
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
      <DivWrapper>
        <Appbar page='profileEdit' />
        <FormWrapper onSubmit={this.handleSubmission}>
          {editUserProfile.map(field => {
            return (
              <Textfield
                key={field.name}
                variant="outlined"
                margin="normal"
                label={field.label}
                name={field.name}
                placeholder={field.placeholder}
                type={field.type}
                inputProps={{ pattern: field.pattern }}
                required={field.required}
                title={field.title}
                value={this.state.form[field.name]}
                onChange={this.handleInput}
              />
            )
          })}
          <Button type='submit' variant='contained' color='primary'>Salvar</Button>
        </FormWrapper>
        <OrdersInProgress />
      </DivWrapper>
    )
  }
}
export default ProfileEditPage;