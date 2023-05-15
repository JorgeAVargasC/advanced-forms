module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard',
    'prettier',
  ],
  plugins: ['react', 'simple-import-sort'],
  rules: {
    'no-unused-vars': 'warn',
    indent: [
      'error',
      2,
      {
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'TemplateLiteral > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        flatTernaryExpressions: false,
      },
    ],
    'react/self-closing-comp': 'error',
    'react/prop-types': 'off',
    'react/jsx-key': 'off',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'jsx-quotes': ['error', 'prefer-single'],
  },
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
  },
}
