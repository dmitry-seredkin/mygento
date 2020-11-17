import React, { FC, MouseEventHandler, useCallback, useState } from 'react'

import { FormApi } from 'final-form'
import { Form } from 'react-final-form'

import Button from 'components/Button'
import { Fieldset, WrappedCheckbox, WrappedRadioGroup, WrappedTextInput } from 'components/Form'
import Link from 'components/Link'
import Modal, { TOuterProps as ModalProps } from 'components/Modal'

import { compose, email, required } from 'utils/validation'

import { PRIVACY_POLICY } from 'constants/privacyPolicy'

import styles from './ApplicantForm.module.scss'

type TOuterProps = {
  className?: string
}
type TProps = TOuterProps

const ApplicantForm: FC<TProps> = ({}) => {
  const [modal, setModal] = useState<Omit<ModalProps, 'onClose'> | null>(null)

  const onLinkClick = useCallback(
    (form: FormApi): MouseEventHandler<HTMLAnchorElement> => e => {
      e.preventDefault()

      setModal({
        open: true,
        buttonTitle: 'Я согласен',
        children: <p className={styles.privacyPolicy}>{PRIVACY_POLICY}</p>,
        title: 'Политика конфиденциальности',
        onAccept: form.mutators.acceptPolicy,
      })
    },
    []
  )

  const onFormSubmit = useCallback((values, form) => {
    setModal({
      open: true,
      buttonTitle: 'Понятно',
      children: <span>Мы скоро свяжемся с вами</span>,
      isCenterTextAlign: true,
      title: `Спасибо ${values.firstName}!`,
      onAccept: form.restart,
    })
  }, [])

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
            <WrappedTextInput
              className={styles.textInput}
              fieldProps={{ name: 'firstName', validate: required }}
              label="Имя *"
            />
            <WrappedTextInput
              className={styles.textInput}
              fieldProps={{ name: 'lastName', validate: required }}
              label="Фамилия *"
            />
            <WrappedTextInput
              fieldProps={{ name: 'email', type: 'email', validate: compose([required, email]) }}
              label="Электронная почта *"
            />
          </Fieldset>
          <WrappedRadioGroup
            className={styles.sex}
            errorMessage="укажите пол"
            fieldProps={{ name: 'sex', validate: required }}
            label="Пол *"
            options={[
              { label: 'Мужской', value: 'male' },
              { label: 'Женский', value: 'female' },
            ]}
          />
          <Fieldset className={styles.githubFieldset} title="Github">
            <WrappedTextInput fieldProps={{ name: 'github' }} label="Вставьте ссылку на Github" />
          </Fieldset>
          <WrappedCheckbox
            className={styles.checkbox}
            fieldProps={{ name: 'privacy', type: 'checkbox', validate: required }}
            label={
              <>
                * Я согласен с{' '}
                <Link aria-label="open modal with privacy policy" onClick={onLinkClick(form)}>
                  политикой конфиденциальности
                </Link>
              </>
            }
          />
          <Button type="submit">Отправить</Button>
          <Modal
            open={!!modal?.open}
            onClose={() => setModal({ ...modal, open: false })}
            {...modal}
          />
        </form>
      )}
    />
  )
}

export default ApplicantForm
