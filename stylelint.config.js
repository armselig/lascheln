module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  ignoreFiles: ['dist/**/*'],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['inside-block', 'blockless-after-same-name-blockless'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          // allow Tailwind CSS @-rules
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'extend',
          'include',
        ],
      },
    ],
    indentation: [2],
    'max-nesting-depth': 3,
    'number-leading-zero': null,
    'selector-class-pattern': null,
    'selector-list-comma-newline-after': 'always-multi-line',
    'selector-max-id': 1,
  },
};
