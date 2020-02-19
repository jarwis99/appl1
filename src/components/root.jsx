import React from 'react';
import axios from'axios';
import WeatherCompo from './weather-container.js';
import Form from './form.jsx';
import './css/main.css';

class Root extends React.Component {
  constructor(props){
    super(props)
    this.api_key = 'eae98c38e4410579b0fc2724981c881f'
    this.dataList=[]
    this.state={
      place:''
    }
  }
  updateLocation=(event)=>{
    this.setState({
      place:event.target.value
    })
  }
  // submit=(event)=>{
  //   event.preventDefault();
  //   axios.get(`http://api.weatherstack.com/current?access_key=${this.api_key}&query=${this.state.place}`)
  //   .then((res)=>{
  //         this.dataList = ["temperature","humidity"];
  //         this.props.post(res.data.current)
  //         console.log(res)
  //   })
  //   .catch(err=>{
  //       console.log("error caught")
  //       console.log(err)
  //   });
  // }


  submit=(event)=>{
    event.preventDefault();
    this.dataList = ["temperature","humidity"];
    this.props.call(this.state.place);
  }

  clear=(event)=>{
    event.preventDefault();
    this.setState({place:''})
    this.props.post(undefined)
  }
  render(){
    return (
      <div>
        <div className="container">
          <Form submit={this.submit} place={this.state.place} updateLocation={this.updateLocation} clear={this.clear}/><br/>
        </div>
        {<WeatherCompo dataList={this.dataList} />} 
      </div>
    );
  }
}

export default Root;
