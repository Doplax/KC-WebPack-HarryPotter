const checkValidations = [
    'patternMismatch',
    'stepMismatch',
    'tooLong',
    'tooShort',
    'typeMismatch',
    'valueMissing',
  ];
  
  const errorMessages: { [key: string]: string} = {
    patternMismatch: 'Error en el patón definido',
    stepMismatch: 'Valor númerico en un intervalo incorrecto',
    tooLong: 'Valor demasiado largo',
    tooShort: 'Valor demasiado corto',
    typeMismatch: 'El tipo no es el correcto',
    valueMissing: 'Campo requirido',
  };
  
  export const getErrorMessages = (validateState: { [key: string]: string}) => { // Espera una key de tipo string con un valor de tipo string
    if (validateState.valid) return '';
    return checkValidations.reduce((acum, validateStateKeys) => {
      if (validateState[validateStateKeys]) {
        return `${acum} ${errorMessages[validateStateKeys]}`;
      }
      return acum;
    }, '').trim();
  };
  