import mjml from 'mjml'
import { loader } from 'webpack'
import { getOptions } from 'loader-utils'

export default function(this: loader.LoaderContext, source: string) {
  const options = Object.assign({}, getOptions(this))
  const { html, errors } = mjml(source, options)

  if (errors.length) {
    const messages = errors.map(error => `- ${error.formattedMessage}`)
    const message = `[mjml-loader] ERROR in ${this.resourcePath}:${messages}`
    throw new Error(message)
  }

  return `export default ${JSON.stringify(html)}`
}
