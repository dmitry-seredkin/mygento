import React, { FC } from 'react'

import { Field, Form } from 'react-final-form'

import Button from 'components/Button'
import { Checkbox, RadioGroup, TextInput } from 'components/Form'

import styles from './ApplicantForm.module.scss'

type TOuterProps = {
  className?: string
}
type TProps = TOuterProps

const ApplicantForm: FC<TProps> = ({}) => {
  const onFormSubmit = () => {
    console.log('submit')
  }

  return (
    <Form
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
            render={({ input }) => (
              <Checkbox
                label={
                  <>
                    Я согласен с <a>политикой конфиденциальности</a>
                  </>
                }
                {...input}
              />
            )}
          />
          <Button type="submit">Отправить</Button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </form>
      )}
      onSubmit={onFormSubmit}
    />
  )
}

export default ApplicantForm
