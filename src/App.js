import React, {Component} from 'react';
import './App.css';
import WeatherContainer from './components/WeatherContainer'

class App extends Component{
  render(){
    return (
      <div className="App">
        <WeatherContainer />
      </div>
    );
  }

}

export default App;
