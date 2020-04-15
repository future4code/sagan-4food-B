import React, { useState } from 'react';
import Appbar from '../../components/Appbar';

import * as S from './styles';

function AdressRegisterPage() {

  const [inputs, setInputs] = useState({
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: ''
  })

  const handleInputs = event => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value })
  }

  const { logradouro, numero, complemento, bairro, cidade, estado } = inputs;

  return (
      <S.AndressRegisterWrapper>
      <Appbar page='adressRegister' />
        <S.Title>Meu Endreço</S.Title>
        <S.Form>
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
            inputProps={{ pattern: "[a-zA-Zà-úÀ-ú ]" }} 
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
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{ pattern: "[0-9]" }}
          />
          <S.Input
            name="complemento"
            type="text"
            id="outlined-required"
            label="Complemento"
            value={complemento}
            onChange={handleInputs}
            placeholder="Apto./Bloco"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{ pattern: "[a-zA-Zà-úÀ-ú ]" }}
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
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{ pattern: "[a-zA-Zà-úÀ-ú ]" }}
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
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{ pattern: "[a-zA-Zà-úÀ-ú ]" }}
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
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{ pattern: "[a-zA-Zà-úÀ-ú ]" }}
          />
          <S.ButtonSubmit type="submit">Salvar</S.ButtonSubmit>
        </S.Form>
      </S.AndressRegisterWrapper>
  )
}

export default AdressRegisterPage;