import styled from 'styled-components'

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;

  a {
    margin-top: 0;
  }

  input,
  label {
    cursor: pointer;
    user-select: none;
  }

  label {
    margin-left: 4px;
  }
`
