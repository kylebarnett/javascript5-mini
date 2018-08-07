import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
    this.getCars = this.getCars.bind(this)
  }
  getCars(){
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(res => {
    console.log(res)
      this.setState({
        cars: res.data
      })
    })
  }

  render() {
    const newCars = this.state.cars.map((car, i) => {
      return (
        <div key={i}>
          <p>Make:{car.make}</p>
          <p>Model:{car.model}</p>
          <p>Year:{car.year}</p>
          <p>Color:{car.color}</p>
        </div>
      )
    })
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {newCars}
      </div>
    );
  }
}

export default App;
