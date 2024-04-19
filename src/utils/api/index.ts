import { UserType } from '../../pages/Signup'

const url = 'https://login-system-api-theta.vercel.app/users'

export const getUsers = async () => {
  return await (await fetch(url)).json()
}

export const addUser = async ({ email, password }: UserType) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password,
      id: Date.now().toString()
    })
  })
}
