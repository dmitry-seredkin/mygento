import React, { FC } from 'react'

import {
  CheckboxProps,
  FormControlLabel,
  FormControlLabelProps,
  Checkbox as MUICheckbox,
} from '@material-ui/core'
import cn from 'classnames'

import { CheckboxCheckedIcon, CheckboxIcon } from 'components/Icons'

import styles from './Checkbox.module.scss'

export type TOuterProps = Pick<FormControlLabelProps, 'label'> &
  Omit<CheckboxProps, 'classes' | 'checkedIcon' | 'icon'> & {
    error?: boolean
  }
type TProps = TOuterProps

const Checkbox: FC<TProps> = ({ className, label, error, ...props }) => {
  return (
    <FormControlLabel
      classes={{
        root: cn(styles.formControlLabel, className),
        label: styles.label,
      }}
      control={
        <MUICheckbox
          classes={{
            root: cn(styles.checkbox, error && styles.checkboxError),
          }}
          checkedIcon={<CheckboxCheckedIcon className={styles.icon} />}
          icon={<CheckboxIcon className={styles.icon} />}
          {...props}
        />
      }
      label={label}
    />
  )
}

export default Checkbox
