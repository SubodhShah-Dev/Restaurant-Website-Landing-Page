import globals from 'globals';
import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        myCustomGlobal: 'readonly',
      },
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars': ['warn'],
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      indent: ['error', 2],
      'no-console': 'warn',
      'prefer-const': 'error',
      'max-len': ['warn', { code: 100 }],
      camelcase: ['error', { properties: 'never' }],
      'no-magic-numbers': ['warn', { ignore: [0, 1] }],
      'prettier/prettier': 'error', // Show Prettier errors as ESLint errors
    },
    plugins: {
      prettier: prettier,
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
];
