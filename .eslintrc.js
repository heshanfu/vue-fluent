module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  plugins: ['vue'],
  extends: ['standard', 'plugin:vue/essential', 'prettier'],
  rules: {
    'linebreak-style': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 'off',
    'vue/no-reserved-keys': 'off',
    semi: 'off',
    'comma-dangle': 'always',
  },
  globals: {
    document: true,
    window: true,
    chrome: true,
    Vue: true,
  },
}
