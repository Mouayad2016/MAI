module.exports = {
  env: {
    node: true,
    es6: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'next/core-web-vitals',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Target only TypeScript files
      parser: '@typescript-eslint/parser', // Use the TypeScript parser for TypeScript files
      extends: [
        'plugin:@typescript-eslint/recommended', // Use TypeScript recommended rules
      ],
      rules: {
        // TypeScript-specific rules here
      },
    },
  ],
};
