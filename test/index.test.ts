import loader from '../src'
import compiler from './compiler'


describe('loader', () => {
  it('is a function', () => {
    expect(typeof loader).toEqual('function')
  })

  it('process mjml correctly', async () => {
    const stats = await compiler('pass.mjml', { minify: true })
    const output = stats.toJson({ source: true }).modules?.[0].source

    expect(output).toMatch(/export default "/)
    expect(output).toMatch(/<!doctype html>/)
    expect(output).toMatch(/Hello World/)
  })

  it('throws error on incorrect markup', async () => {
    await expect(compiler('fail.mjml')).rejects.toMatchObject([{
      message: /Error: \[mjml-loader\]/
    }])
  })
})
