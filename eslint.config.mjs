import antfu from '@antfu/eslint-config'

export default antfu(
  {
    typescript: true,
    react: true,

    formatters: {
      css: true,
      html: true,
      markdown: 'prettier',
    },

    stylistic: {
      indent: 2,
      quotes: 'single',
    },
  },

)
