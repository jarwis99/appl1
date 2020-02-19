export const postWeather=(data)=>{
    return {
        type:"WEATHER",
        payload:data
    }
}

export const apiCall=(data)=>{
    return {
        type:"CALL",
        payload:data
    }
}
