import React, { FC } from 'react'

import { TextField, TextFieldProps } from '@material-ui/core'

import styles from './TextInput.module.scss'

export type TOuterProps = Omit<TextFieldProps, 'classes' | 'error' | 'variant'> & {
  error?: {
    isShown: boolean
    text: string
  }
}
type TProps = TOuterProps

const TextInput: FC<TProps> = ({ error, ...props }) => {
  const textFieldClasses: TextFieldProps['classes'] = {
    root: styles.root,
  }
  const inputLabelProps: TextFieldProps['InputLabelProps'] = {
    classes: {
      root: styles.labelRoot,
      focused: styles.labelFocused,
      error: styles.labelError,
    },
    shrink: true,
  }
  const inputProps: TextFieldProps['InputProps'] = {
    classes: {
      root: styles.inputRoot,
      focused: styles.inputFocused,
      disabled: styles.inputDisabled,
      input: styles.input,
      error: styles.inputError,
    },
    disableUnderline: true,
  }
  const formHelperTextProps: TextFieldProps['FormHelperTextProps'] = {
    classes: {
      root: styles.helperTextRoot,
      disabled: styles.helperTextDisabled,
      error: styles.helperTextError,
    },
  }

  return (
    <TextField
      classes={textFieldClasses}
      placeholder={typeof props.label === 'string' && props.label.replace(/\s*\*$/, '')}
      FormHelperTextProps={formHelperTextProps}
      InputLabelProps={inputLabelProps}
      InputProps={inputProps}
      helperText={error.isShown ? error.text : props.helperText}
      error={error.isShown}
      {...props}
    />
  )
}

export default TextInput
