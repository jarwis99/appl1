 import React,{Component} from 'react'

 
class weather extends Component{
        constructor(props){
            super(props)
            this.state={}
        }
        render(){ console.log(this.props)
            return (
                <div className="result">
                    {this.props.dataList.map((value, index) => { 
                        return (
                        <div className="result-value" key={index}>{value.toUpperCase()+" : "+this.props.weather[value]}</div>
                        )
                    })}
                </div>
            )
        }
 }
 
 export default weather;