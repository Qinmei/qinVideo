module.exports = {
  extends: ['react-app', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'warn',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'react/self-closing-comp': 'warn',
    'react-hooks/rules-of-hooks': 'warn',
  },
};
