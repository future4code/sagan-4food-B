import styled from 'styled-components'
import {Typography, TextField, Button} from '@material-ui/core'

export const PageWrapper = styled.div`
    width: 100%;
    height: 640px;
    display: flex;
    flex-direction: column;
    align-items: center
`
export const LogoWrapper = styled.div`
    width: 104px;
    height: 58px;
    object-fit: contain;
    margin: 88px 128px 28px 128px
`
export const TitleWrapper = styled(Typography)`
    width: 20%;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: -0.4px;
    text-align: center;
    margin: 0 32px 12px 32px
`
export const InputWrapper = styled(TextField)`
    width: 90%;
    height: 56px;
    margin: 0 16px 8px 16px
`
export const ButtonWrapper = styled(Button)`
    width: 90%;
    height: 42px;
    border-radius: 2px;
    margin: 0 16px 28px 16px
`
export const ButtonTextWrapper = styled(Typography)`
    font-weight: bold
`
export const SignupDirectionerWrapper = styled(Typography)`
    width: 70%;
    height: 18px;
    font-size: 16px;
    letter-spacing: -0.4px;
    text-align: center;
    font-weight: bold
`
export const ImgWrapper = styled.img`
    // margin: 16px 16px 16px 288px
`
export const PlaceHolderWrapper = styled(Typography)`
    height: 18px;
    font-size: 16px;
    letter-spacing: -0.4px;
    color: #d0d0d0;
`