module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
  },
};
