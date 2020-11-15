import React, { FC } from 'react'

import { Button as MUIButton, ButtonProps as MUIButtonProps } from '@material-ui/core'

import styles from './Button.module.scss'

type TOuterProps = Omit<MUIButtonProps, 'classes' | 'size' | 'variant'>
type TProps = TOuterProps

const Button: FC<TProps> = ({ ...props }) => {
  const muiClasses: MUIButtonProps['classes'] = {
    root: styles.root,
    disabled: styles.disabled,
    label: styles.label,
  }

  return <MUIButton classes={muiClasses} disableRipple={true} variant="contained" {...props} />
}

export default Button
