module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'plugin:react/recommended',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    indent: ['error', 2],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': ['error', 'always'],
    'max-len': ['error', {
      code: 110,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'no-unused-vars': 'error',
    'no-empty': 'error',
    'no-extra-semi': 'error',
    'no-unreachable': 'error',
    'no-redeclare': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    'no-trailing-spaces': 'error',
    'semi-style': ['error', 'last'],
    'no-var': 'error',
    'no-unexpected-multiline': 'error',
  },
};
