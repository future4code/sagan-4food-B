import React, {useState} from 'react'
import * as S from './styles'
import { TextField, MenuItem } from '@material-ui/core'

function CardConfirmQuantity(){

    const [quantity, setQuantity] = useState(0)

    const selectOption = (e) => {
        setQuantity(e.target.value)
    }

    console.log(quantity)

    const addQuantity = () => {
        // adicionar a quantidade ao respectivo produtos
    }

    return <S.CardConfirmQuantityWrapper>
        <S.DivTitle>
            <S.Title>
                Selecione a quantidade desejada
            </S.Title>
        </S.DivTitle>

        <TextField
            select
            fullWidth
            variant='outlined'
            value={quantity}
            onChange={selectOption}
        >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => (
                <MenuItem value={number}>{number}</MenuItem>
            ))}
        </TextField>

        <S.AddDiv onClick={addQuantity}>
            <S.AddText> Adicionar ao carrinho </S.AddText>
        </S.AddDiv>

    </S.CardConfirmQuantityWrapper>
}

export default CardConfirmQuantity