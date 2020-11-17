import { FieldValidator } from 'final-form'

const required: FieldValidator<string | boolean | File> = value => {
  const error = 'Обязательное поле'

  if (typeof value === 'string') {
    return value.trim() ? undefined : error
  }

  return value ? undefined : error
}

export default required
