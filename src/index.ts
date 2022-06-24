import mjml from 'mjml'
import { LoaderDefinitionFunction } from 'webpack'

const loader: LoaderDefinitionFunction = function (source) {
  const options = this.getOptions();
  const { html, errors } = mjml(source, options)

  if (errors.length) {
    const messages = errors.map(error => `- ${error.formattedMessage}`)
    const message = `[mjml-loader] ERROR in ${this.resourcePath}:${messages}`
    throw new Error(message)
  }

  return `export default ${JSON.stringify(html)}`
}

export default loader
