import React, { FC } from 'react'

import { LinkProps, Link as MUILink } from '@material-ui/core'
import cn from 'classnames'

import styles from './Link.module.scss'

type TOuterProps = Omit<LinkProps, 'underline'>
type TProps = TOuterProps

const Link: FC<TProps> = ({ className, ...props }) => (
  <MUILink className={cn(styles.link, className)} underline="always" {...props} />
)

export default Link
