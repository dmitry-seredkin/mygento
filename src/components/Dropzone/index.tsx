import React, { FC } from 'react'

import cn from 'classnames'
import { DropzoneOptions, useDropzone } from 'react-dropzone'

import Button from 'components/Button'
import { ClipIcon, CrossIcon, PlusIcon } from 'components/Icons'

import styles from './Dropzone.module.scss'

type TOuterProps = Omit<DropzoneOptions, 'disabled' | 'noDrag'> & {
  className?: string
  error: string
  value: File
  onRemove: () => void
}
type TProps = TOuterProps

const Dropzone: FC<TProps> = ({ className, error, value, onRemove, ...props }) => {
  const { getInputProps, getRootProps } = useDropzone({ ...props, disabled: !!value, noDrag: true })

  return (
    <div className={styles.wrapper}>
      <div
        className={cn(styles.container, !!value && styles.containerWithValue, className)}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {value ? (
          <Button
            className={cn(styles.removeButton, !!error && styles.removeButtonError)}
            startIcon={<ClipIcon className={styles.startIcon} />}
            endIcon={<CrossIcon className={styles.endIcon} />}
            aria-label="remove uploaded file"
            onClick={onRemove}
          >
            {value.name}
          </Button>
        ) : (
          <>
            <PlusIcon className={styles.icon} />
            <p className={styles.text}>Загрузите резюме</p>
          </>
        )}
      </div>
      <p className={styles.error}>{error}</p>
    </div>
  )
}

export default Dropzone
