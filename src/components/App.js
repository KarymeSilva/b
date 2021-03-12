import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // utilizando destruturing ordenado alfabeticamente
    const { addElem, btns, clear, equal, value } = this.props;
    return (
      // contenedor general
      <div className="App">
        <h1 className="title">Calculator AJV</h1>
        <div className="value-container">
          { /* ingresa el valor de las operaciones a realizar */ }
          <input type="text" value={value} />
        </div>
        <div className="buttons-container">
          {/* El método map() creara un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos. Se evaluara en el array btns y como parametros el item(valor) y  key(indice) */}
          {btns.map((item, key) => {
            if (item === "C") {
              // Para limpiar los datos y empezar de nuevo desde cero(click en C)
              return (
                // bind -> vincula uno o más controladores de eventos para los elementos seleccionados y especifica una función para ejecutar cuando ocurre el evento.
                <button onClick={clear.bind(this)} key={key}>{item}</button>
              )
            } else if (item === "=") {
              // Para obtener el resultado final de la operacion a realizar(click en =)
              return (
                // key={key}>{item} -> Solo haga esto si los items no tienen ID estables
                <button onClick={equal.bind(this, value)} key={key}>{item}</button>
              )
            } else {
              // Agrega numeros y simbolos de las operaciones (click en numeros y simbolos operacionales)
              return (
                <button onClick={addElem.bind(this, item)} key={key}>{item}</button>
              )
            }
          })}
        </div>
        <div className="result-container">
        </div>
      </div>
    );
  }
}

export default App
