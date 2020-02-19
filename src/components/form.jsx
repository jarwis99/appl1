import React from 'react'
const Form=(props)=>{
    return(
    <div className="form">
    <form >
        <label>LOCATION</label><br/>
        <input type="text" className="place" value={props.place} onChange={props.updateLocation}></input> <br/>
        <button type="submit" onClick={props.submit} value={props.place}>Get</button>
        <button onClick={props.clear}>Reset</button>
    </form>
    </div>
    
    );
} 

export default Form;