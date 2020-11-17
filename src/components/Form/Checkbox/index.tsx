import React, { FC } from 'react'

import { FormControlLabel, FormControlLabelProps, Checkbox as MUICheckbox } from '@material-ui/core'
import cn from 'classnames'

import { CheckboxCheckedIcon, CheckboxIcon } from 'components/Icons'

import styles from './Checkbox.module.scss'

export type TOuterProps = Omit<FormControlLabelProps, 'control'> & {
  error?: boolean
}
type TProps = TOuterProps

const Checkbox: FC<TProps> = ({ error, ...props }) => {
  return (
    <FormControlLabel
      classes={{
        root: styles.formControlLabel,
        label: styles.label,
      }}
      control={
        <MUICheckbox
          classes={{
            root: cn(styles.checkbox, error && styles.checkboxError),
          }}
          checkedIcon={<CheckboxCheckedIcon className={styles.icon} />}
          icon={<CheckboxIcon className={styles.icon} />}
        />
      }
      {...props}
    />
  )
}

export default Checkbox
