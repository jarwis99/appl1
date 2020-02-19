import React from 'react';
export default class Result extends React.Component{
    render(){
        console.log("result props",this.props)
        const {value}=this.props;
        return(
        <div className="result-value">{value.toUpperCase()+" : "+JSON.stringify(this.props.data)}</div>   
        )
    }
}
