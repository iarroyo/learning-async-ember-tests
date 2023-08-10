'use strict';

module.exports = {
  overrides: [
    {
      //plugins: ['prettier-plugin-ember-template-tag'],
      //files: '*.{js,ts,gjs,gts}',
      files: '*.{js,ts}',
      options: {
        singleQuote: true,
      },
    },
  ],
};
