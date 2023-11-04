console.log("Hola Mundo");

interface Values {
    name: string;
    age: number;
}

let renderTemplate =  (values: Values) => {
    return `Hola me llamo ${values.name} y tengo ${values.age} años`
}