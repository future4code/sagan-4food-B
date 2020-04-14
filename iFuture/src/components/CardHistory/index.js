import React from 'react'
import * as S from './styles'
import { turnsDate } from './constants'

function CardHistory(props){

    const { order } = props

    const date = turnsDate(order.date)

    return (
        <S.Order>
            <S.TextStyled red>
                {order.name}
            </S.TextStyled>

            <S.TextStyled sizep spacing>
                {date}
            </S.TextStyled>

            <S.TextStyled weight>
                SUBTOTAL {order.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </S.TextStyled>
            
        </S.Order>
    )
}

export default CardHistory