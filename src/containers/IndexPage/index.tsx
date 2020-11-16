import React, { FC } from 'react'

import ApplicantForm from './components/ApplicantForm'

import styles from './IndexPage.module.scss'

type TOuterProps = {
  className?: string
}
type TProps = TOuterProps

const IndexPage: FC<TProps> = ({}) => (
  <main className={styles.container}>
    <h1 className={styles.title}>Анкета соискателя</h1>
    <ApplicantForm />
  </main>
)

export default IndexPage
