import styled from 'styled-components'

const Button = styled.button`
  background-color: #0171d3;
  width: 100%;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  color: #fff;
  margin-top: 24px;
  transition: background-color ease 0.2s;

  &:hover {
    background-color: #0263b8;
  }
`

export default Button
