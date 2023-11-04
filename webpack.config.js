module.exports = {
    entry: {
        home: './src/homePage.js',
        teams: './src/teamsPage.js', 
        contact: './src/contactPage.js'
    },
    mode: 'development',
    devtool: 'inline-source-map', // Nos dice en que archivo y en que linea
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist', // __dirname: Es una variable que resuelve la ruta absoluta donde estemos en este momento
        clean: true,// clean: Limpiara el directorio antes de manipularlo
    },
    module: {
        rules: [{
            test: /\.css$/i,// 
            use: ['style-loader','css-loader'],// <- style los intrpreta y loader los carga
        }]
    }
}

