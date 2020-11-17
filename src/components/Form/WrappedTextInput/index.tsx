import React, { FC } from 'react'

import { Field, FieldProps, FieldRenderProps } from 'react-final-form'

import TextInput, { TOuterProps as TextInputProps } from '../TextInput'

type TOuterProps = Omit<TextInputProps, 'error'> & {
  fieldProps: FieldProps<string, FieldRenderProps<string, HTMLInputElement>, HTMLInputElement>
}
type TProps = TOuterProps

const WrappedTextInput: FC<TProps> = ({ fieldProps, ...props }) => (
  <Field<string>
    {...fieldProps}
    render={({ input, meta }) => (
      <TextInput
        id={fieldProps.name}
        error={{
          isShown: meta.error && meta.touched,
          text: meta.error || '',
        }}
        {...props}
        {...input}
      />
    )}
  />
)

export default WrappedTextInput
