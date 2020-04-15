import React from 'react';
import styled from 'styled-components';



import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

const CardWarapper = styled(Card)`
`

const Content = styled.div`
  padding: 0px;
`

const Img = styled(CardMedia)`
  width: 100%;
  height: 120px;
  border-radius: 12px 12px 0px 0px;
`

const Title = styled(Typography)`
  font-size: 16px;
`
const Text = styled(Typography)`
  margin: 8px 0;
`

const TextDescription = styled.div`
  padding: 0px;

.shipping {
  display: flex;
  justify-content: space-between;
}
`

function Header(props) {
  return (
    <CardWarapper elevation={0}>
      <Content>
        <Img image={props.img} />
        <Title color="primary">
          {props.name}
        </Title>
        <TextDescription>
          <Text color="secondary">{props.category}</Text>
          <div className="shipping" ><Text color="secondary">{props.deliveryTime} min</Text>
            <Text color="secondary">Frente {props.shipping}</Text><div></div>
          </div>
          <Text color="secondary">{props.address}</Text>
        </TextDescription>
      </Content>
    </CardWarapper>
  )
}



export default Header;