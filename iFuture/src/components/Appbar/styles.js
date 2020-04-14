import styled from 'styled-components'
import { AppBar } from '@material-ui/core'

export const AppbarStyled = styled(AppBar)`
    background-color: #ffffff;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    height: 64px;
`

export const SpaceContent = styled.div`
    display: flex;
    width: 100%;
    height: 64px;
    justify-content: space-between;
    align-items: center;
`
export const CenteredContent = styled.div`
    display: flex;
    width: 100%;
    height: 64px;
    justify-content: center;
    align-items: center;
`

export const Button = styled.div``
