module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-sass-guidelines'],
  plugins: ['stylelint-order'],
  rules: {
    'block-no-empty': null,
    'no-descending-specificity': null,
    'order/properties-order': [
      'content',
      'position',
      'display',
      'grid',
      'grid-column',
      'grid-row',
      'grid-template',
      'grid-template-areas',
      'grid-template-columns',
      'grid-template-rows',
      'grid-auto-flow',
      'grid-auto-columns',
      'grid-auto-rows',
      'grid-column-start',
      'grid-column-end',
      'grid-row-start',
      'grid-row-end',
      'grid-area',
      'gap',
      'grid-gap',
      'grid-column-gap',
      'grid-row-gap',
      'flex',
      'flex-flow',
      'flex-order',
      'order',
      'flex-direction',
      'flex-wrap',
      'flex-align',
      'flex-pack',
      'justify-content',
      'align-items',
      'align-self',
      'flex-basis',
      'flex-grow',
      'flex-shrink',
      'table-layout',
      'empty-cells',
      'caption-side',
      'border-spacing',
      'border-collapse',
      'visibility',
      'float',
      'clear',
      'top',
      'right',
      'bottom',
      'left',
      'min-width',
      'max-width',
      'width',
      'min-height',
      'max-height',
      'height',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'font',
      'font-family',
      'font-size',
      'font-weight',
      'font-style',
      'font-variant',
      'font-size-adjust',
      'font-stretch',
      'font-effect',
      'font-emphasize',
      'font-emphasize-position',
      'font-emphasize-style',
      'font-smooth',
      'line-height',
      'letter-spacing',
      'color',
      'text-shadow',
      'text-outline',
      'text-transform',
      'text-wrap',
      'text-overflow',
      'text-decoration',
      'text-emphasis',
      'text-emphasis-color',
      'text-emphasis-style',
      'text-emphasis-position',
      'text-indent',
      'text-justify',
      'text-align',
      'vertical-align',
      'white-space',
      'word-wrap',
      'word-break',
      'tab-size',
      'hyphens',
      'background',
      'background-color',
      'background-image',
      'background-repeat',
      'background-attachment',
      'background-position',
      'background-position-x',
      'background-position-y',
      'background-clip',
      'background-origin',
      'background-size',
      'object-fit',
      'object-position',
      'border',
      'border-width',
      'border-style',
      'border-color',
      'border-top',
      'border-top-width',
      'border-top-style',
      'border-top-color',
      'border-right',
      'border-right-width',
      'border-right-style',
      'border-right-color',
      'border-bottom',
      'border-bottom-width',
      'border-bottom-style',
      'border-bottom-color',
      'border-left',
      'border-left-width',
      'border-left-style',
      'border-left-color',
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      'border-image',
      'border-image-source',
      'border-image-slice',
      'border-image-width',
      'border-image-outset',
      'border-image-repeat',
      'outline',
      'outline-width',
      'outline-style',
      'outline-color',
      'outline-offset',
      'box-shadow',
      'list-style',
      'list-style-position',
      'list-style-type',
      'list-style-image',
      'z-index',
      'zoom',
      'overflow',
      'overflow-x',
      'overflow-y',
      'clip',
      '-webkit-overflow-scrolling',
      'box-sizing',
      'quotes',
      'counter-reset',
      'counter-increment',
      'resize',
      'cursor',
      'pointer-events',
      'user-select',
      'opacity',
      'transform',
      'transform-origin',
      'transition',
      'transition-selay',
      'transition-timing-function',
      'transition-duration',
      'transition-property',
      'animation',
      'animationName',
      'animation-duration',
      'animation-play-state',
      'animation-timing-function',
      'animation-delay',
      'animation-iteration-count',
      'animation-direction',
      'use',
      'fill',
      'stroke',
      'stroke-width'
    ],
    'order/properties-alphabetical-order': null,
    'selector-class-pattern': '[a-z]+([A-Z]{1}[a-z]+)*',
    'unit-allowed-list': ['rem', 'vh', '%']
  }
}
