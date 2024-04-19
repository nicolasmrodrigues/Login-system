const changePasswordVisibility = (elementId: string) => {
  const field = document.getElementById(elementId)

  if (field?.getAttribute('type') === 'password') {
    field?.setAttribute('type', 'text')
  } else {
    field?.setAttribute('type', 'password')
  }
}

export default changePasswordVisibility
