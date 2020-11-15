import React, { FC } from 'react'

import {
  Checkbox as MUICheckbox,
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
} from '@material-ui/core'

import { CheckboxIcon, CheckboxCheckedIcon } from 'components/Icons'

import styles from './Checkbox.module.scss'

type TOuterProps = Omit<FormControlLabelProps, 'control'>
type TProps = TOuterProps

const Checkbox: FC<TProps> = ({ ...props }) => {
  return (
    <FormControlLabel
      classes={{
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
  )
}

export default Checkbox
