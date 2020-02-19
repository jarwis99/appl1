const api = async (location)=>{
    const api_key = 'eae98c38e4410579b0fc2724981c881f'
    try{
    let res= await fetch(`http://api.weatherstack.com/current?access_key=${api_key}&query=${location}`)
    return res.json()
    }
    catch(e){
        console.log(e)
    }
 }

 export default api;