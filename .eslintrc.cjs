module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    // Desactiva la regla que prohíbe el uso de "target=_blank" en JSX
    'react/jsx-no-target-blank': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    // Configuración específica para react-refresh
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}