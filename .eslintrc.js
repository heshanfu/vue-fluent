module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    sourceType: 'module',
  },
  plugins: ['vue'],
  extends: ['airbnb', 'plugin:vue/essential', 'plugin:prettier/recommended'],
  rules: {
    semi: 'off',
    'vue/max-attributes-per-line': 'off',
    'linebreak-style': 'off',
    'no-console': 'off',
  },
  globals: {
    document: true,
    window: true,
    chrome: true,
    Vue: true,
  },
}
