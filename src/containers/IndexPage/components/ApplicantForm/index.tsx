import React, { FC, MouseEventHandler, useCallback, useState } from 'react'

import { FormApi } from 'final-form'
import { Field, Form } from 'react-final-form'

import Button from 'components/Button'
import Dropzone from 'components/Dropzone'
import { Fieldset, WrappedCheckbox, WrappedRadioGroup, WrappedTextInput } from 'components/Form'
import Link from 'components/Link'
import Modal, { TOuterProps as ModalProps } from 'components/Modal'

import { compose, email, name, required, size } from 'utils/validation'

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
        removeResumeFile: (args, state, tools) => {
          tools.changeValue(state, 'resume', () => null)
        },
      }}
      onSubmit={onFormSubmit}
      render={({ form, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Fieldset className={styles.personalDataFieldset} title="Личные данные">
            <WrappedTextInput
              className={styles.textInput}
              fieldProps={{ name: 'firstName', validate: compose([required, name]) }}
              label="Имя"
              required
            />
            <WrappedTextInput
              className={styles.textInput}
              fieldProps={{ name: 'lastName', validate: compose([required, name]) }}
              label="Фамилия"
              required
            />
            <WrappedTextInput
              className={styles.textInput}
              fieldProps={{ name: 'email', type: 'email', validate: compose([required, email]) }}
              label="Электронная почта"
              required
            />
            <Field<File>
              name="resume"
              validate={compose([required, size])}
              render={({ input: { value, onChange }, meta }) => (
                <Dropzone
                  accept=".pdf"
                  className={styles.dropzone}
                  error={meta.touched && meta.error}
                  value={value}
                  onDrop={files => onChange(files[0])}
                  onRemove={form.mutators.removeResumeFile}
                />
              )}
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
            radioProps={{
              required: true,
            }}
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
            required
          />
          <Button type="submit" disabled={!form.getState().valid}>
            Отправить
          </Button>
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
