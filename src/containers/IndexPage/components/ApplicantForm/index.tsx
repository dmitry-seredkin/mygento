import React, { FC, MouseEventHandler, useState } from 'react'

import { Field, Form } from 'react-final-form'

import Button from 'components/Button'
import { Checkbox, Fieldset, RadioGroup, TextInput } from 'components/Form'
import Link from 'components/Link'
import Modal from 'components/Modal'

import { PRIVACY_POLICY } from 'constants/privacyPolicy'

import styles from './ApplicantForm.module.scss'

type TOuterProps = {
  className?: string
}
type TProps = TOuterProps

const ApplicantForm: FC<TProps> = ({}) => {
  const [privacyModal, setPrivacyModal] = useState<boolean>(false)
  const [successModal, setSuccessModal] = useState<boolean>(true)

  const onFormSubmit = () => {
    setSuccessModal(true)
  }

  const onLinkClick: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault()

    setPrivacyModal(true)
  }

  return (
    <Form
      mutators={{
        acceptPolicy: (args, state, tools) => {
          tools.changeValue(state, 'privacy', () => true)
        },
      }}
      onSubmit={onFormSubmit}
      render={({ form, values, handleSubmit }) => (
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
          <Modal
            open={privacyModal}
            acceptButtonProps={{
              'aria-label': 'accept privacy policy',
              children: 'Я согласен',
            }}
            title="Политика конфиденциальности"
            onAccept={form.mutators.acceptPolicy}
            onClose={() => setPrivacyModal(false)}
          >
            <p className={styles.privacyPolicy}>{PRIVACY_POLICY}</p>
          </Modal>
          <Modal
            open={successModal}
            acceptButtonProps={{
              'aria-label': 'finish registration',
              children: 'Понятно',
            }}
            title={`Спасибо ${values.firstName}!`}
            isCenterTextAlign
            onAccept={form.reset}
            onClose={() => setSuccessModal(false)}
          >
            <span>Мы скоро свяжемся с вами</span>
          </Modal>
          <pre>{JSON.stringify(values, null, 2)}</pre>
          {privacyModal ? 'true' : 'false'}
        </form>
      )}
    />
  )
}

export default ApplicantForm
