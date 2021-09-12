import './App.css';
import React from 'react';
import axios from 'axios';
import Weather from './Weather';

class App extends React.Component{
  constructor(){
    super()
    this.state ={
      info: [],
      location: [],
      condition: [],
      display: false
    }
  }

  handleClick(event){
    const APP_KEY = "2c725bd0a7b547a6a35100729211209"
    const city=this._name.value
    axios.get(`http://api.weatherapi.com/v1/current.json?key=${APP_KEY}&q=${city}&aqi=no`)
    .then(response => {
      console.log(response.data.location)
      this.setState({
        info: response.data.current,
        location: response.data.location,
        condition: response.data.current.condition,
        display: true
      })
    })
  }

  handleClear(event){
    this._name.value=""
    this.setState({
      info: [],
      location: [],
      condition: [],
      display: false
    })
  }

  render(){
    return (
      <div>
        <div className="main-title">
        <h1>Weather Information</h1>
        <div className="search-box">
        <input type="text" ref={value => this._name=value} placeholder="Search..."/>
        <button onClick={this.handleClick.bind(this)}>Search</button>
        <button onClick={this.handleClear.bind(this)}>Clear</button>
        </div>
        </div>
        <div className="column display">
        {this.state.display?<Weather info={this.state.info} location={this.state.location} condition={this.state.condition}/>:<h1> </h1>}
        </div>
      </div>
    )
  }
}

export default App;
