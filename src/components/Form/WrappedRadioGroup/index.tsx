import React, { FC } from 'react'

import { Field, FieldProps, FieldRenderProps } from 'react-final-form'

import RadioGroup, { TOuterProps as RadioGroupProps } from '../RadioGroup'

type TOuterProps = Omit<RadioGroupProps, 'error'> & {
  errorMessage: string
  fieldProps: FieldProps<boolean, FieldRenderProps<boolean, HTMLInputElement>, HTMLInputElement>
}
type TProps = TOuterProps

const WrappedRadioGroup: FC<TProps> = ({ errorMessage, fieldProps, ...props }) => (
  <Field<boolean>
    {...fieldProps}
    render={({ input, meta }) => (
      <RadioGroup
        id={fieldProps.name}
        error={{ isShown: meta.error && meta.touched, text: errorMessage }}
        {...props}
        {...input}
      />
    )}
  />
)

export default WrappedRadioGroup
