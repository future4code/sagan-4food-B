import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export const ContentWrapper = styled.div`
  background-color: white;
  height: 100vh;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 16px;
  margin-bottom: 64px;
`

export const AdressBoxWrapper = styled.div`
background-color: #eeeeee;
width: 100%;
height: 76px;
margin: 0 -16px;
padding: 16px;
margin-bottom: 16px;
`

export const Text = styled(Typography)`
  font-size: 16px;
  height: 16px;
  letter-spacing: -0.4px;
  margin-bottom: 8px;
  color: ${props => props.gray ? "#b8b8b8" : "#000000"};
  text-align: ${props => props.right && "right"};
`