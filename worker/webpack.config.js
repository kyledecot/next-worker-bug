module.exports = async () => {
  const path = await import("path");

  return {
    entry: './src/index.tsx',
    externals: 'react',
    output: {
      path: path.resolve(__dirname, 'lib'),
      filename: 'index.js',
      libraryTarget: 'umd',
      globalObject: 'this',
    },
    resolve: {
      extensions: ['.ts', '.tsx'],
    },
      
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader'
        }
      ],
    },
    experiments: {
      asyncWebAssembly: true
    }
  }
}
