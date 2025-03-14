module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "@typescript-eslint/ban-ts-comment": 0,
    "@ts-expect-error": 0,
    "react-hooks/exhaustive-deps": 0,
    'react-refresh/only-export-components': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
}
