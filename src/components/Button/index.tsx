import React, { FC } from 'react'

import styles from './Button.module.scss'

type TOuterProps = {
  className?: string
}
type TProps = TOuterProps

const Button: FC<TProps> = ({}) => <button className={styles.button}>check</button>

export default Button
