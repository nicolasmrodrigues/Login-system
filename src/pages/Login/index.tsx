import { FormEvent, useEffect, useState } from 'react'
import { EyeOff } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { FieldContainer } from '../../styles'
import Title from '../../components/Title'
import Field from '../../components/Field'
import Button from '../../components/Button'
import Link from '../../components/Link'
import Panel from '../../components/Panel'
import ErrorText from '../../components/ErrorText'
import PasswordButton from '../../components/PasswordButton'
import ChangePagesText from '../../components/ChangePagesText'
import changePasswordVisibility from '../../utils/password'
import { getUsers } from '../../utils/api'
import { ContainerFlex } from './styles'
import { addLoggedUser, getLoggedUser } from '../../utils/user'

type UserType = {
  email: string
  password: string
}

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userNotFound, setUserNotFound] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const navigate = useNavigate()

  const loggedUser = getLoggedUser()

  useEffect(() => {
    setUserNotFound(false)
  }, [email, password])

  useEffect(() => {
    if (loggedUser) {
      navigate('/')
    }
  })

  const login = async (event: FormEvent) => {
    event.preventDefault()

    const users = await getUsers()

    const user = users?.filter(
      (user: UserType) => user.email === email && user.password === password
    )

    if (user[0]) {
      addLoggedUser(sessionStorage, user[0].id)
      if (rememberMe) {
        addLoggedUser(localStorage, user[0].id)
      }
      navigate('/')
    } else {
      setUserNotFound(true)
    }
  }

  return (
    <>
      {!loggedUser && (
        <Panel>
          <Title>Login</Title>
          <form onSubmit={(event) => login(event)}>
            <Field
              placeholder="Email"
              type="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              required
            />
            <FieldContainer>
              <Field
                id="password-field"
                placeholder="Password"
                type="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                required
              />
              <PasswordButton
                type="button"
                onClick={() => changePasswordVisibility('password-field')}
              >
                <EyeOff size={20} />
              </PasswordButton>
            </FieldContainer>
            {userNotFound && <ErrorText>Email or password incorrect</ErrorText>}
            <ContainerFlex>
              <div>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me-checkbox"
                  defaultChecked={false}
                  onChange={() => {
                    setRememberMe(!rememberMe)
                  }}
                />
                <label htmlFor="remember-me-checkbox">Remember me</label>
              </div>
              <Link to="">Forgot password?</Link>
            </ContainerFlex>
            <Button type="submit">Login</Button>
            <ChangePagesText>
              Don&apos;t have an account? <Link to="/signup">Signup</Link>
            </ChangePagesText>
          </form>
        </Panel>
      )}
    </>
  )
}

export default Login
