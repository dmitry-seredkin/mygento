import React, { FC } from 'react'

import { Button as MUIButton, ButtonProps as MUIButtonProps } from '@material-ui/core'
import cn from 'classnames'

import styles from './Button.module.scss'

export type TOuterProps = Omit<MUIButtonProps, 'classes' | 'size' | 'variant'> & {
  onlyIcon?: boolean
}
type TProps = TOuterProps

const Button: FC<TProps> = ({ onlyIcon, ...props }) => {
  const muiClasses: MUIButtonProps['classes'] = {
    root: cn(styles.root, onlyIcon && styles.rootOnlyIcon),
    disabled: styles.disabled,
    label: styles.label,
    endIcon: styles.endIcon,
  }

  return <MUIButton classes={muiClasses} variant="contained" disableRipple {...props} />
}

export default Button
