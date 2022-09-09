module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin', '@extend']
    }]
  },
  ignoreFiles: [
    '**/material-kit/**/*.scss'
  ]
}
