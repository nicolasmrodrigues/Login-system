import styled from 'styled-components'
import Button from '../../components/Button'

export const Home = styled.div`
  text-align: center;
  color: #fff;
`

export const SignoutButton = styled(Button)`
  color: #000;
  width: auto;
  background-color: #f9f9f9;
  margin-top: 32px;

  &:hover {
    background-color: #e1e1e1;
  }
`
