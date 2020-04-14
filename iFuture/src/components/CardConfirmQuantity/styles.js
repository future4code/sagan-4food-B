import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export const CardConfirmQuantityWrapper = styled.div`
    position: fixed;
    top: 228px;
    left: 5vw;
    z-index: 2;

    width: 90vw;
    height: 216px;
    background-color: #ffffff;

    display: flex;
    flex-direction: column;
    padding: 31px 16px 21px;
`

export const DivTitle = styled.div`
    height: 42px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 19px;
`

export const Title = styled(Typography)`
    height: 18px;
    font-size: 16px;
    letter-spacing: -0.4px;
    text-align: center;
`

export const AddDiv = styled.div`
  margin-top: 28px;
  height: 19px;
`

export const AddText = styled(Typography)`
    font-size: 16px;
  letter-spacing: -0.4px;
  text-align: right;
  color: #4f81a8;
`