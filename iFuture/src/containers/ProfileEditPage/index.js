import React from 'react';
import Appbar from '../../components/Appbar';
import Textfield from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {DivWrapper, FormWrapper, TitleWrapper} from './styled'
import OrdersInProgress from '../../components/OrdersInProgress';

const editUserProfile = [
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
    }
]

function ProfileEditPage() {
  return (
    <DivWrapper>
        <Appbar page='profileEdit'/>
        <FormWrapper>
          {editUserProfile.map(field => {
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
          <Button type='submit' variant='contained' color='primary'>Salvar</Button>
        </FormWrapper>
        <OrdersInProgress/>
      </DivWrapper>
  )
}

export default ProfileEditPage;