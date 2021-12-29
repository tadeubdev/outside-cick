module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: './outside-click.js',
        libraryTarget: 'window',
        libraryExport: 'default',
        library: 'OutsideClick',
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};
