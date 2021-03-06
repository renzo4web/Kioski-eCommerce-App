module.exports = {
  root: true,
  extends: ['plugin:react/recommended', 'plugin:react/jsx-runtime'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': 0,
    'react/jsx-uses-react': 0,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
};
