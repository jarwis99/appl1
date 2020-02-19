import React from 'react';
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
//import axios from'axios';
import Weather from './components/weather.jsx';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      place:'',
      temperature:''
    }
    this.submit=this.submit.bind(this);
  }
  updateLocation=(event)=>{
    this.setState({
      place:event.target.value
    })
  }
  submit(event){    
    ReactDOM.render(<Weather location={this.state.place}/>,document.getElementById("temp"));
    event.preventDefault();
  }
  resetBuilder=(event)=> {
    this.setState({ place:'',temperature:'' });
    ReactDOM.render(this.state.temperature,document.getElementById("temp"));
    event.preventDefault();
}
  render(){
  return (
    <div>
      <form  onSubmit={this.submit}>
        <label>Location</label><br/>
        <input type="text" className="place" value={this.state.place} onChange={this.updateLocation}></input> 
        <button type="submit" value="submit">Submit</button>
        <button onClick={this.resetBuilder}>Clear</button>
      </form>
      {this.state.place}
      <div id="temp"></div>
    </div>
  );
  }
}

export default App;
