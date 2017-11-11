module.exports = {
    entry: './src/entry.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                include: __dirname + '/src',
                query: {
                    presets: ['es2015']
                }
            }
        ],
    },
    cache: false
};