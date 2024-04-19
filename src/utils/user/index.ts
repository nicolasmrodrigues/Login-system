const storage = () => {
  if (localStorage.getItem('user')) {
    return localStorage
  } else {
    return sessionStorage
  }
}

export const getLoggedUser = () => {
  return storage().getItem('user')
}

export const addLoggedUser = (storage: Storage, id: string) => {
  storage.setItem('user', id)
}

export const removeLoggedUser = () => {
  localStorage.removeItem('user')
  sessionStorage.removeItem('user')
}
