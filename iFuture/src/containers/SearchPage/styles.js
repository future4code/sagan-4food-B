import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export const SearchPageWrapper = styled.div`
    background-color: #ffffff;
    height: 100vh;
`
export const Container = styled.div`
    margin: 16px;
`

export const CenteredContent = styled.div`
    margin-top: 8px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MessageSearch = styled(Typography)`
    height: 18px;
    font-size: 16px;
    letter-spacing: -0.4px;
`