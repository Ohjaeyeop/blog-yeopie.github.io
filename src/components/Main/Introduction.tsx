import styled from '@emotion/styled'
import { FunctionComponent } from 'react'

const Background = styled.div`
  width: 100%;
`

const Wrapper = styled.div`
  align-items: flex-start;
  width: 100%;
  padding: 30px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`

const SubTitle = styled.div`
  font-size: 15px;
  color: lightgray;

  @media (max-width: 768px) {
    display: none;
  }
`

const Title = styled.div`
  width: 100%;
  font-size: 45px;
  font-weight: 800;
  margin-top: 50px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`

const Introduction: FunctionComponent = function () {
  return (
    <Background>
      <Wrapper>
        <div>
          <SubTitle>Jaeyeop</SubTitle>
          <SubTitle>Oh</SubTitle>
          <Title>Blog</Title>
        </div>
      </Wrapper>
    </Background>
  )
}

export default Introduction
