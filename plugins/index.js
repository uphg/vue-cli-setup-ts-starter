const { kebabCase, getSideEffects } = require('./utils')

module.exports = {
  ElementUiOndemand(options) {
    return {
      type: 'component',
      resolve: (name) => {
        if (/^El[A-Z]/.test(name)) {
          const compName = name.slice(2)
          const partialName = kebabCase(compName)

          if (partialName === 'collapse-transition') {
            return {
              path: `element-ui/lib/transitions/${partialName}`,
            }
          }
          return {
            path: `element-ui/lib/${partialName}`,
            sideEffects: getSideEffects(partialName, options),
          }
        }
      },
    }
  }
}