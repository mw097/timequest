import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
// Plugins
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginTS from '@typescript-eslint/eslint-plugin';
import eslintParserTS from '@typescript-eslint/parser';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: eslintParserTS,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json',
      },
      globals: globals.browser,
      env: {
        browser: true,
        es2021: true,
        node: true,
      },
    },
    plugins: {
      react: eslintPluginReact,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': eslintPluginTS,
      'jsx-a11y': eslintPluginJsxA11y,
      import: eslintPluginImport,
      prettier: eslintPluginPrettier,
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:prettier/recommended',  // <- Prettier config
    ],
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Disable React in JSX scope (React 17+)
      'react/react-in-jsx-scope': 'off',

      // Prettier errors as ESLint errors
      'prettier/prettier': 'error',

      // Your custom rules, e.g.:
      '@typescript-eslint/explicit-function-return-type': 'off',
      'import/order': ['error', { 'newlines-between': 'always' }],
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {},
      },
    },
  },
);
