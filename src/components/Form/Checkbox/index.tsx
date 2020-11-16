import React, { FC } from 'react'

import {
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
  Checkbox as MUICheckbox,
} from '@material-ui/core'

import { CheckboxCheckedIcon, CheckboxIcon } from 'components/Icons'

import styles from './Checkbox.module.scss'

type TOuterProps = Omit<FormControlLabelProps, 'control'>
type TProps = TOuterProps

const Checkbox: FC<TProps> = ({ className, ...props }) => {
  return (
    <FormControl className={className}>
      <FormControlLabel
        classes={{
          root: styles.formControlLabel,
          label: styles.label,
        }}
        control={
          <MUICheckbox
            classes={{
              root: styles.checkbox,
            }}
            checkedIcon={<CheckboxCheckedIcon className={styles.icon} />}
            icon={<CheckboxIcon className={styles.icon} />}
            disableRipple
          />
        }
        {...props}
      />
    </FormControl>
  )
}

export default Checkbox
