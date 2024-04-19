import { Link as LinkIcon } from 'react-router-dom'
import styled from 'styled-components'

const Link = styled(LinkIcon)`
  color: #0171d3;
  text-decoration: none;
  margin-top: 16px;
  display: inline-block;

  &: hover {
    color: #025cab;
  }
`

export default Link
