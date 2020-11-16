import React, { FC, MouseEventHandler, useState } from 'react'

import { Field, Form } from 'react-final-form'

import Button from 'components/Button'
import { Checkbox, Fieldset, RadioGroup, TextInput } from 'components/Form'
import Link from 'components/Link'

import styles from './ApplicantForm.module.scss'

type TOuterProps = {
  className?: string
}
type TProps = TOuterProps

const ApplicantForm: FC<TProps> = ({}) => {
  const [privacyModal, setPrivacyModal] = useState<boolean>(false)
  const onFormSubmit = () => {
    console.log('submit')
  }

  const onLinkClick: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault()

    setPrivacyModal(true)
  }

  return (
    <Form
      onSubmit={onFormSubmit}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <Fieldset className={styles.personalDataFieldset} title="Личные данные">
            <Field
              name="firstName"
              render={({ input }) => (
                <TextInput className={styles.textInput} label="Имя" required {...input} />
              )}
            />
            <Field
              name="lastName"
              render={({ input }) => (
                <TextInput className={styles.textInput} label="Фамилия" required {...input} />
              )}
            />
            <Field
              name="email"
              type="email"
              render={({ input }) => <TextInput label="Электронная почта" required {...input} />}
            />
          </Fieldset>
          <Field
            name="sex"
            render={({ input }) => (
              <RadioGroup
                className={styles.sex}
                label="Пол"
                options={[
                  { label: 'Мужской', value: 'male' },
                  { label: 'Женский', value: 'female' },
                ]}
                required
                {...input}
              />
            )}
          />
          <Fieldset className={styles.githubFieldset} title="Github">
            <Field
              name="git"
              render={({ input }) => <TextInput label="Вставьте ссылку на Github" {...input} />}
            />
          </Fieldset>
          <Field
            name="privacy"
            type="checkbox"
            render={({ input }) => (
              <Checkbox
                className={styles.checkbox}
                label={
                  <>
                    * Я согласен с{' '}
                    <Link aria-label="open modal with privacy policy" onClick={onLinkClick}>
                      политикой конфиденциальности
                    </Link>
                  </>
                }
                {...input}
              />
            )}
          />
          <Button type="submit">Отправить</Button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
          {privacyModal ? 'true' : 'false'}
        </form>
      )}
    />
  )
}

export default ApplicantForm
