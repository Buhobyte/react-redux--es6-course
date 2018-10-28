import React from 'react';
import './App.css';
import WeatherLocation from './Component/WeatherLocation';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <WeatherLocation/>
//       </div>
//     );
//   }
// }

const App = () => {
    return (
      <div className="App">
        <WeatherLocation/>
      </div>
    );
}
/*
Componente clase vs Componente Funcion
Usamos Componente class cuando:
Cuando necesitamos usar una de las instancias de ciclo de vida de REACT*/
export default App;
