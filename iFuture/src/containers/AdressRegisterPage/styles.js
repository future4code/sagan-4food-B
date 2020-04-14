import styled from 'styled-components';

import { TextField, Button, Typography } from '@material-ui/core';

export const AndressRegisterWrapper = styled.div`
  text-align: center;
`

export const Title = styled(Typography)`
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin: 16px 0 0 0;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
export const Input = styled(TextField)`
  margin: 8px 16px;
`

export const ButtonSubmit = styled(Button)`
  background: red;
  margin: 8px 16px;
  height: 42px;
`