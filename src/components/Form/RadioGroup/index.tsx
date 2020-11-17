import React, { FC } from 'react'

import {
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
  FormLabel,
  RadioGroup as MUIRadioGroup,
  Radio,
  RadioGroupProps,
  RadioProps,
} from '@material-ui/core'

import { RadioCheckedIcon, RadioIcon } from 'components/Icons'

import styles from './RadioGroup.module.scss'

export type TOuterProps = Omit<RadioGroupProps, 'classes'> & {
  error?: {
    isShown: boolean
    text: string
  }
  label?: string
  options: Omit<FormControlLabelProps, 'classes' | 'control'>[]
  radioProps?: Omit<RadioProps, 'className' | 'classes' | 'checkedIcon' | 'icon'>
}
type TProps = TOuterProps

const RadioGroup: FC<TProps> = ({ className, error, label, options, radioProps, ...props }) => (
  <FormControl className={className} component="fieldset">
    {!!label && (
      <FormLabel
        classes={{
          root: styles.formLabelRoot,
          focused: styles.formLabelFocused,
        }}
        component="legend"
      >
        {label}
        {error.isShown && <span className={styles.errorMessage}>{error.text}</span>}
      </FormLabel>
    )}
    <MUIRadioGroup className={styles.radioGroup} {...props}>
      {options.map((option, index) => (
        <FormControlLabel
          key={index}
          classes={{
            root: styles.formControlLabel,
            label: styles.formControlLabelLabel,
          }}
          control={
            <Radio
              className={styles.radio}
              checkedIcon={<RadioCheckedIcon className={styles.icon} />}
              icon={<RadioIcon className={styles.icon} />}
              {...radioProps}
            />
          }
          {...option}
        />
      ))}
    </MUIRadioGroup>
  </FormControl>
)

export default RadioGroup
