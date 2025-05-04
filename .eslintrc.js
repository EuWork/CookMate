module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],

  plugins: ['react', 'react-hooks', 'import', 'prettier'],

  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    'import/order': ['error', { 'newlines-between': 'always' }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },

  overrides: [
    {
      files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    },
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  ignorePatterns: ['node_modules/', 'dist/', 'build/', '/src'],

  settings: {
    react: {
      version: 'detect',
    },
  },
};
