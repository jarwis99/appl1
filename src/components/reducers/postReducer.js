
const initialState={}

const postReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'WEATHER':
            return {
                ...state,
                weather:action.payload
            }
        default:
            return{
                ...state
            }
    }

}
export default postReducer;