import weather from './weather.jsx'
import {connect} from 'react-redux'
const mapStateToProps=(state)=>{
    console.log(state)
    return{
        weather:state.posts.weather
    }
}

export default connect(mapStateToProps,null)(weather)