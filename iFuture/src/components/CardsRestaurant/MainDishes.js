import React from 'react';
import styled from 'styled-components';
import { Card, Typography, Button, CardMedia, CardContent } from '@material-ui/core';

const CardWrapper = styled(Card)`
  border-radius: 8px;
  margin: 8px 0px;
  border: solid 1px #b8b8b8;
  display: flex;
  align-items: center;
  position: relative;
  height: 112px;

  .description {
    font-size: 12px;
    height: 30px;
  }

  .price {
    font-size: 16px;
  }

  .bottomCard {
    display: flex;
    justify-content: space-between;
  }

  .buttom {
    width: 90px;
    height: 31px;
    border-radius: 8px 0px 8px 0px;
    border: solid 1px #000000;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 12px;
  }

  .buttom2 {
    max-width: 33px;
    max-height: 33px;
    border-radius: 0px 8px 0px 8px;
    border: solid 1px #000000;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 12px;
    padding: 7px 12px;
  }
`

const ButtonAdd = styled(Button)`
  width: 90px;
  height: 31px;
  border-radius: 8px 0px 8px 0px;
  border: solid 1px #000000;
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 12px;
  text-transform: lowercase;
`

const Count = styled.div`
    width: 33px;
    height: 33px;
    border-radius: 0px 8px 0px 8px;
    border: solid 1px #000000;
    position: absolute;
    top: 0;
    right: 0;
    text-align: center;
    font-size: 16px;
    padding: 7px;
`

const Img = styled(CardMedia)`
  width: 96px;
  height: 112px;
  margin-right: 16px;
`
const Content = styled(CardContent)`
  padding: 0px;
`

const Title = styled(Typography)`
  margin: 16px 0 8px 0;
  border-bottom: 1px solid black;
`

function MainDishes(props) {
  return (
    <div>
      <Title>
        Principal
      </Title>
      {props.data.map(item => {
        return (
          <CardWrapper key={item.id} elevation={0}>
            <Content>
              <Img image={item.photoUrl} />
            </Content>
            <Content>
              <Typography color="primary">
                {item.name}
              </Typography>
              <Typography color="secondary" className="description">
                {item.description}
              </Typography>
              <div className="bottomCard">
                <Typography className="price">
                  {/* Precisamos colocar os centavos dos valores. */}
                  R$ {Number.parseFloat(item.price).toFixed(2).replace(".", ",")}
                </Typography>
              </div>
            </Content>
            {item.quantity !== 0 ?
              <ButtonAdd className="buttom" variant="outlined" color="default">
                adicionar
              </ButtonAdd>
              :
              <ButtonAdd className="buttom" variant="outlined" color="primary">
                remover
              </ButtonAdd>
            }
            {item.quantity !== 0 && <Count color="default">
              {item.quantity}
            </Count>}
          </CardWrapper>
        )
      })
      }
    </div >
  )
}

export default MainDishes;