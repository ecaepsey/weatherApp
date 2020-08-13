const axios = require('axios')
const WeatherService = require('./WeatherService')
const weather = new WeatherService.WeatherService(axios)

const cityName = process.argv[2];

weather.lookUp(cityName).then((data) => {
    
    const message = `Температура в ${data.name}: ${data.main.temp} C`
    console.log(message)
})