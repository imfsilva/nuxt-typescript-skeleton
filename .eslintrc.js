module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-undef': ['error', { typeof: false }],
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'no-shadow': [
      'error',
      {
        allow: ['state']
      }
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state']
      }
    ]
  }
}
