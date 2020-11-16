import React, { FC, SVGAttributes, memo } from 'react'

export type TOuterProps = SVGAttributes<SVGSVGElement>
type TProps = TOuterProps

const IconBase = (icon: { id: string }): FC<TProps> =>
  memo(({ ...props }) => (
    <svg {...props}>
      <use xlinkHref={`#${icon.id}`} />
    </svg>
  ))

export default IconBase
