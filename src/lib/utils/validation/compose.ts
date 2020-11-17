import { FieldValidator } from 'final-form'

const compose: <T>(validators: FieldValidator<T>[]) => FieldValidator<T> = validators => (
  ...args
) => validators.reduce((error, validator) => error || validator(...args), undefined)

export default compose
