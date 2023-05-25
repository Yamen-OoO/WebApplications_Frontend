console.log("hello")
let weather 
let key = '8c2113edbe8170ff41f7cdaa80b8f060'


let getWeather = async ()=>{
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=c1e07c1dbb94fe61001d938dd84a3bd2`)
    let respon = await data.json()
    weather = respon
    console.log(weather)
}
getWeather()

