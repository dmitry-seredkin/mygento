import React, { FC } from 'react'

import { Modal as MUIModal, ModalProps } from '@material-ui/core'
import cn from 'classnames'

import Button, { TOuterProps as ButtonProps } from 'components/Button'
import { CrossIcon } from 'components/Icons'

import styles from './Modal.module.scss'

type TOuterProps = Omit<ModalProps, 'disableBackdropClick' | 'onClose'> & {
  acceptButtonProps?: Omit<ButtonProps, 'onClick'>
  isCenterTextAlign?: boolean
  title: string
  onAccept: () => void
  onClose: () => void
}
type TProps = TOuterProps

const Modal: FC<TProps> = ({
  className,
  children,
  acceptButtonProps,
  isCenterTextAlign,
  title,
  onAccept,
  onClose,
  ...props
}) => {
  const onAcceptClick = () => {
    onAccept()
    onClose()
  }

  return (
    <MUIModal className={cn(styles.modal, className)} disableBackdropClick {...props}>
      <section className={cn(styles.container, isCenterTextAlign && styles.containerCenterAlign)}>
        <h2 className={styles.title}>{title}</h2>
        <Button className={styles.closeButton} aria-label="close modal" onlyIcon onClick={onClose}>
          <CrossIcon />
        </Button>
        <div className={styles.content}>{children}</div>
        <Button className={styles.acceptButton} onClick={onAcceptClick} {...acceptButtonProps} />
      </section>
    </MUIModal>
  )
}

export default Modal
