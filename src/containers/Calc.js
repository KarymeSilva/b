import { connect } from 'react-redux'
import App from '../components/App'

/* utilizando funciones expressions e internamente funciones anonimas con arrow functions */
// indica cómo transformar el estado actual del store Redux en los props que desea pasar a un componente de presentación
const mapStateToProps = (state) => {
  return {
    value: state.value,
    btns: state.btns
  }
}
// Actions
// El store contiene todo el árbol de estado de la aplicación. La única forma de cambiar el estado que contiene es despachando una acción.
// recibe el método dispatch() y devuelve los callback props que deseas inyectar en el componente de presentación
const mapDispatchToProps = (dispatch) => {
  return {
    addElem: (text) => {
      dispatch({
        type: 'ADD_ELEM',
        text
      })
    },
    clear: () => {
      dispatch({
        type: 'CLEAR'
      })
    },
    equal: (value) => {
      dispatch({
        type: 'EQUAL',
        value
      })
    }
  }
}
// connect es una higher-order function que devuelve un higher-order component
const Calc = connect(mapStateToProps, mapDispatchToProps)(App);
export default Calc
