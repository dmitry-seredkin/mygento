module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'project': './tsconfig.json',
    'sourceType': 'module'
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'prettier'
  ],
  rules: {
    'arrow-parens': [0, 'as-needed'],
    'react/display-name': 0,
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'sort-imports': [
      1,
      {
        ignoreDeclarationSort: true,
      },
    ],
  },
  settings: {
    'react': {
      'version': 'detect'
    }
  }
}
