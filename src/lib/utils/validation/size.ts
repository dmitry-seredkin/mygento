import { FieldValidator } from 'final-form'

const required: FieldValidator<File> = value => {
  const error = 'Загружайте файл размером не более 16 MB'
  const size = 16 * 1024 * 1024

  return value.size < size ? undefined : error
}

export default required
