import React, { FC } from 'react'

import {
  Checkbox as MUICheckbox,
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
} from '@material-ui/core'

import styles from './Checkbox.module.scss'

type TOuterProps = Omit<FormControlLabelProps, 'control'>
type TProps = TOuterProps

const Checkbox: FC<TProps> = ({ ...props }) => {
  return <FormControlLabel control={<MUICheckbox />} {...props} />
}

export default Checkbox
