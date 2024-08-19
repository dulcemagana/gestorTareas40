const path = require('path');

module.exports = {
    mode:'development', // Para Saber si esta en desarrollo o producción
    entry: './src/index.js', // Punto de entrada de tu aplicación
    output: {
        filename: 'bundle.js', // Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/,  // Regex para identificar archivos CSS
                use: ['style-loader', 'css-loader'], // Loaders para procesar archivos
            },
           
        ],
    },
    devtool: 'source-map', // Genera source maps para facilitar la depuración
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'), // Carpeta del que correra el servidor
        },
        compress: true, // Habilitar compresión gzip
        port: 9000, // Puerto del servidor del desarrollo
    },
};