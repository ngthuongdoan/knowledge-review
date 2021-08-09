module.exports = {
  env: {
    es6: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'standard',
    'prettier',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  plugins: ['prettier', 'jest'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    jest: {
      version: 27,
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
