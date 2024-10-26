import globals from 'globals';

export default [
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
      'max-len': ['warn', { code: 80 }],
      camelcase: ['error', { properties: 'never' }],
      'no-magic-numbers': ['warn', { ignore: [0, 1] }],
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
];
