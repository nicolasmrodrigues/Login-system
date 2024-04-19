import { FormEvent, useEffect, useState } from 'react'
import { EyeOff } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { FieldContainer } from '../../styles'
import ErrorText from '../../components/ErrorText'
import Title from '../../components/Title'
import Field from '../../components/Field'
import Link from '../../components/Link'
import Button from '../../components/Button'
import Panel from '../../components/Panel'
import PasswordButton from '../../components/PasswordButton'
import changePasswordVisibility from '../../utils/password'
import ChangePagesText from '../../components/ChangePagesText'
import { addUser, getUsers } from '../../utils/api'
import { getLoggedUser } from '../../utils/user'

export type UserType = {
  email: string
  password: string
}

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmationPassword, setconfirmationPassword] = useState('')
  const [passwordsMatching, setPasswordsMatching] = useState(true)
  const navigate = useNavigate()

  const loggedUser = getLoggedUser()

  useEffect(() => {
    if (loggedUser) {
      navigate('/')
    }
  })

  const signup = async (event: FormEvent) => {
    event.preventDefault()

    if (password !== confirmationPassword) {
      setPasswordsMatching(false)
      return
    } else {
      setPasswordsMatching(true)
    }

    const users = await getUsers()

    const userAlreadyExists = users.filter(
      (user: UserType) => user.email === email
    )

    if (userAlreadyExists.length > 0) {
      alert('This user alredy exists')
    } else {
      await addUser({ email, password })
      alert('User added successfully')
      navigate('/')
    }
  }

  return (
    <>
      {!loggedUser && (
        <Panel>
          <Title>Signup</Title>
          <form onSubmit={(event) => signup(event)}>
            <Field
              placeholder="Email"
              type="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              required
            />
            <Field
              placeholder="Password"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              required
            />
            <FieldContainer>
              <Field
                id="confirm-password-field"
                placeholder="Confirm password"
                type="password"
                value={confirmationPassword}
                onChange={({ target }) => setconfirmationPassword(target.value)}
                required
              />
              <PasswordButton
                type="button"
                onClick={() =>
                  changePasswordVisibility('confirm-password-field')
                }
              >
                <EyeOff size={20} />
              </PasswordButton>
            </FieldContainer>
            {passwordsMatching ? (
              ''
            ) : (
              <ErrorText>Passwords not matching</ErrorText>
            )}
            <Button type="submit">Signup</Button>
            <ChangePagesText>
              Already have an account? <Link to="/login">Login</Link>
            </ChangePagesText>
          </form>
        </Panel>
      )}
    </>
  )
}

export default Signup
