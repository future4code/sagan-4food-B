import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import { Typography1, Typography2, Typography3, CardContentStyled, CardStyled, DivImagem } from './styled'

function OrdersInProgress() {
  return (
    <CardStyled>
      <CardActionArea>
        <CardContentStyled>
          <DivImagem>
            <img src={require("../../assets/clock.svg")} alt='clock' />
          </DivImagem>
          <div>
            <Typography1 gutterBottom variant="h5" component="h2">
              Pedido em andamento
          </Typography1>
            <Typography2 component="p">
              Bullguer Vila Madalena
          </Typography2>
            <Typography3 component="p">
              SUBTOTAL R$67,00
          </Typography3>
          </div>
        </CardContentStyled>
      </CardActionArea>
    </CardStyled>
  )
}

export default OrdersInProgress