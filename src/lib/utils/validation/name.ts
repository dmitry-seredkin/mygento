import { FieldValidator } from 'final-form'

const name: FieldValidator<string> = value => {
  const error = 'Можно использовать только буквы'
  const nameRegExp = /^[а-яА-Яa-zA-Z]+$/

  if (typeof value === 'string') {
    return nameRegExp.test(value.trim()) ? undefined : error
  }

  return error
}

export default name
