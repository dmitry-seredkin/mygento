import React, { FC, FieldsetHTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './Fieldset.module.scss'

type TOuterProps = FieldsetHTMLAttributes<HTMLFieldSetElement> & {
  title: string
  children: JSX.Element | JSX.Element[]
}
type TProps = TOuterProps

const Fieldset: FC<TProps> = ({ className, children, title, ...props }) => (
  <fieldset className={cn(styles.container, className)} {...props}>
    <legend className={styles.title}>{title}</legend>
    {children}
  </fieldset>
)

export default Fieldset
