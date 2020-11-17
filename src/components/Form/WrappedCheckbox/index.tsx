import React, { FC } from 'react'

import { Field, FieldProps, FieldRenderProps } from 'react-final-form'

import Checkbox, { TOuterProps as CheckboxProps } from '../Checkbox'

type TOuterProps = Omit<CheckboxProps, 'error'> & {
  fieldProps: FieldProps<boolean, FieldRenderProps<boolean, HTMLInputElement>, HTMLInputElement>
}
type TProps = TOuterProps

const WrappedCheckbox: FC<TProps> = ({ fieldProps, ...props }) => (
  <Field<boolean>
    {...fieldProps}
    render={({ input, meta }) => (
      <Checkbox id={fieldProps.name} error={meta.error && meta.touched} {...props} {...input} />
    )}
  />
)

export default WrappedCheckbox
