module.exports = {
    entry: {
        index: './src/index.js',
        app: './src/app.js', 
    },
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist',
        clean: true,
    }
}

// __dirname: Es una variable que resuelve la ruta absoluta donde estemos en este momento
// clean: Limpiara el directorio antes de manipularlo