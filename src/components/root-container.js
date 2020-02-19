import Root from './root.jsx'
import {connect} from 'react-redux'
import {postWeather,apiCall} from './actions/postAction.js';
const mapDispatchToProps=(dispatch)=>{
    return{
        post:(data)=>dispatch(postWeather(data)),
        call:(data)=>dispatch(apiCall(data))
    }
}

const mapStateToProps=(state)=>{
    return {
        weather:state.posts.weather    
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Root)