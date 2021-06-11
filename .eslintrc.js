module.exports = {
  'extends': ['taro/react'],
  'rules': {
    'no-unused-vars': ['error', { 'varsIgnorePattern': 'Taro' }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.tsx'] }],
    '@typescript-eslint/member-delimiter-style': ['error', {
      'multiline': {
        'delimiter': 'none'
      },
      'singleline': {
        'delimiter': 'comma'
      }
    }],
    'no-shadow': 'off',
    'max-len': [2, 100],
    'no-multiple-empty-lines': ['error', { max: 1 }]
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'useJSXTextNode': true,
    'project': './tsconfig.json'
  }
}
