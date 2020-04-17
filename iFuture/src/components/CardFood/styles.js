import styled from 'styled-components';

import { Card, CardContent, Button, CardMedia } from '@material-ui/core';

export const CardWrapper = styled(Card)`
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
`
export const Content = styled(CardContent)`
  padding: 0px;
`

export const Img = styled(CardMedia)`
  width: 96px;
  height: 112px;
  margin-right: 16px;
`

export const ButtonAddRemove = styled(Button)`
  width: 90px;
  height: 31px;
  border-radius: 8px 0px 8px 0px;
  border: ${props => props.marginRed ? "solid 1px #e8222e" : "solid 1px #000000"};
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 12px;
  text-transform: lowercase;
`





export const Count = styled.div`
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