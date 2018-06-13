module.exports = {
    entry: {
        'dom-core':'./lib/dom-core.js',
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
