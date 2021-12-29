const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: 'outside-click.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        libraryTarget: 'window',
        libraryExport: 'default',
        library: 'OutsideClick',
    },
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

