import mjml from 'mjml'
import { loader } from 'webpack'

export default function(this: loader.LoaderContext, source: string) {
  const { html, errors } = mjml(source)

  if (errors.length) {
    const messages = errors.map(error => `- ${error.formattedMessage}`)
    const message = `[mjml-loader] ERROR in ${this.resourcePath}:${messages}`
    throw new Error(message)
  }

  return `export default ${JSON.stringify(html)}`
}
