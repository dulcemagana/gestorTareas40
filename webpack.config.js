const path = require('path');

module.exports = {
    entry: './src/index.js', // Punto de entrada de tu aplicación
    output: {
        filename: 'bundle.js', // Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/,  // Regets para identificar archivos CSS
                use: ['style-loader', 'css-loader'], // Loaders para procesar archivos
            },
            {
                test: /\.js$/, // Regex para identificar archivos JS
                exclude: /node_modules/, // Excluir la carpeta node_modules
                use:{
                    loader: 'babel-loader', // Loader para convertir JS moderno al JS mas compatible
                    options: {
                        presents: ['@babel/present-env'],
                    },
                },
    },
],
    },
    devtool: 'source-map', // Genera source maps para facilitar la depuración
    deVserver: {
        contentBase: path.resolve(__dirname, 'dist'), // Carpeta del que correrá el
        compress: true, // Habilitar compresión gzip
        port: 9000, // Puerto del servidor del desarrollo
    },
};