module.exports = {
    devtool: '#source-map',
    entry: {
        'dom-core':'./lib/dom-core.js',
        'index':'./lib/index.js'
    },
    output: {
        path: __dirname,
        filename: './release/[name].js',
        library: '$',
        libraryExport: "default",
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }]
    }
}
