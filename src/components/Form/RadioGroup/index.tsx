import React, { FC } from 'react'

import {
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
  FormLabel,
  FormLabelProps,
  RadioGroup as MUIRadioGroup,
  Radio,
  RadioGroupProps,
} from '@material-ui/core'

import { RadioCheckedIcon, RadioIcon } from 'components/Icons'

import styles from './RadioGroup.module.scss'

type TOuterProps = Omit<RadioGroupProps, 'classes'> & {
  label?: string
  options: Omit<FormControlLabelProps, 'classes' | 'control'>[]
}
type TProps = TOuterProps

const RadioGroup: FC<TProps> = ({ label, options, ...props }) => (
  <FormControl component="fieldset">
    {!!label && (
      <FormLabel className={styles.formLabel} component="label">
        {label}
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
            />
          }
          {...option}
        />
      ))}
    </MUIRadioGroup>
  </FormControl>
)

export default RadioGroup
