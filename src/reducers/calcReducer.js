// state(number, operaciones, boton para borrar y boton igual)
const calcState = {
  value: 0,
  btns: ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "C", "0", ".", "/", "="],
}
// utilizamos la funcion pura(reducers) que recibe dos parametros el state y la action para retornar el nuevo state
const calcReducer = (state = calcState, action) => {
  // se utilizo la instrucción switch para seleccionar uno de los muchos bloques de código que se ejecutarán.
  switch (action.type) {
    // si action.type = 'ADD_ELEM'
    case 'ADD_ELEM':
      return {
        // retorna el objeto state(usando sprint operator) y el key -> value con el valor segun se cumpla en la condicion ternaria
        ...state,
        // usando operador ternario se evalua si el valor es igual a 0 retorna el mismo valor caso contrario retornara el state.value diferente de 0 concatenado con la nueva cadena ingresada
        value: state.value === 0 ? action.text : state.value + action.text,
      }
      // si action.type = 'CLEAR'
    case 'CLEAR':
      return {
        ...state,
        value: 0,
      }
      // si action.type = 'EQUAL'
    case 'EQUAL':
      return {
        ...state,
        //eval -> evalua la expresion(string) que se le esta pasando si es una suma en string no lo concatenara sino que realizara la operacion correcta de la suma
        value: eval(action.value)
      }
    default:
      return state;
  }
}

export default calcReducer
