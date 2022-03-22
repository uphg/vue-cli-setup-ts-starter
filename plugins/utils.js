module.exports = {
  kebabCase() {
    const result = key.replace(/([A-Z])/g, ' $1').trim()
    return result.split(' ').join('-').toLowerCase()
  },
  getSideEffects() {
    const { importStyle = 'css' } = options || {}

    if (!importStyle)
      return

    if (importStyle === 'sass') {
      return [
        'element-ui/packages/theme-chalk/src/base.scss',
        `element-ui/packages/theme-chalk/src/${partialName}.scss`,
      ]
    }
    else {
      return [
        'element-ui/lib/theme-chalk/base.css',
        `element-ui/lib/theme-chalk/${partialName}.css`,
      ]
    }
  }
}