import path from 'path'
import webpack from 'webpack'
import { createFsFromVolume, Volume } from 'memfs'

export default (fixture: string, options = {}): Promise<webpack.Stats> => {
  const compiler = webpack({
    context: __dirname,
    entry: `./${fixture}`,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.mjml$/,
          use: {
            loader: path.resolve(__dirname, '../src/index.ts'),
            options,
          },
        },
      ],
    },
  })

  compiler.outputFileSystem = createFsFromVolume(new Volume())
  compiler.outputFileSystem.join = path.join.bind(path)

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err)
      if (stats == undefined) return reject(null)
      if (stats.hasErrors()) return reject(stats.toJson().errors)

      return resolve(stats)
    })
  })
}
