import React from 'react'
import styled from 'styled-components'

export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e8222e;
  display: flex;
  justify-content: center;
  align-items: center;
`

function Loading(){
    return(
        <PageWrapper>
            <img src={require('../../assets/white-logo.png')}/>
        </PageWrapper>
    )
}

export default Loading