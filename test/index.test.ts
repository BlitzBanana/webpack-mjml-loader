import loader from '../src'
import * as webpack from 'webpack'

describe('loader', () => {
  it('is a function', () => {
    expect(typeof loader).toEqual('function')
  })

  it('throws error on incorrect markup', () => {
    const context = {
      resourcePath: '/foo/bar.mjml',
      getOptions() { return {} }
    } as webpack.LoaderContext<{}>
    expect(() => loader.apply(context, ['incorrect markup'])).toThrow(Error)
  })

  it('does not throw on correct markup', () => {
    const context = {
      resourcePath: '/foo/bar.mjml',
      getOptions() { return {} }
    } as webpack.LoaderContext<{}>
    const source = `
    <mjml>
      <mj-body>
        <mj-section>
          <mj-column>
            <mj-text>Hello World</mj-text>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
    `
    expect(() => loader.apply(context, [source])).not.toThrow(Error)
  })

  it('accepts any mjml options', () => {
    const context = {
      resourcePath: '/foo/bar.mjml',
      getOptions() { return { minify: true } },
    } as webpack.LoaderContext<{ minify: boolean }>
    const source = `
    <mjml>
      <mj-body>
        <mj-section>
          <mj-column>
            <mj-text>Hello World</mj-text>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
    `
    expect(() => loader.apply(context, [source])).not.toThrow(Error)
  })
})
