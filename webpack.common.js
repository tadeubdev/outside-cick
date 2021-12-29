const path = require('path');

module.exports = {
    entry: {
        app: './src/index.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'outside-click.js',
        library: 'OutsideClick',
        libraryTarget: 'window',
        libraryExport: 'default',
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
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
            },
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    }
};

