import { FieldValidator } from 'final-form'

const email: FieldValidator<string> = value => {
  const error = 'Неверный формат'
  const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (typeof value === 'string') {
    return emailRegExp.test(value) ? undefined : error
  }

  return error
}

export default email
