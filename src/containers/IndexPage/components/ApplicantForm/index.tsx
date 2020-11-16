import React, { FC, MouseEventHandler, useState } from 'react'

import { Field, Form } from 'react-final-form'

import Button from 'components/Button'
import { Checkbox, RadioGroup, TextInput } from 'components/Form'
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
          <Field
            name="firstName"
            render={({ input }) => <TextInput label="Имя" required {...input} />}
          />
          <Field
            name="lastName"
            render={({ input }) => <TextInput label="Фамилия" required {...input} />}
          />
          <Field
            name="email"
            type="email"
            render={({ input }) => <TextInput label="Электронная почта" required {...input} />}
          />
          <Field
            name="sex"
            render={({ input }) => (
              <RadioGroup
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
          <Field
            name="git"
            render={({ input }) => <TextInput label="Вставьте ссылку на Github" {...input} />}
          />
          <Field
            name="privacy"
            type="checkbox"
            render={({ input }) => (
              <Checkbox
                label={
                  <>
                    Я согласен с{' '}
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
