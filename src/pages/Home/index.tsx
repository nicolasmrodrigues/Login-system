import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignoutButton } from './styles'
import { Home as HomeStyle } from './styles'
import { getLoggedUser, removeLoggedUser } from '../../utils/user'

const Home = () => {
  const loggedUser = getLoggedUser()

  const navigate = useNavigate()

  const signout = () => {
    removeLoggedUser()
    navigate('/')
  }

  useEffect(() => {
    if (!loggedUser) {
      navigate('/login')
    }
  })

  return (
    <>
      {loggedUser && (
        <HomeStyle>
          <h1>You are logged!</h1>
          <SignoutButton onClick={signout}>Sign out</SignoutButton>
        </HomeStyle>
      )}
    </>
  )
}

export default Home
