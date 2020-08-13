const url =  require('url')
const key = '8818dfc211d739a9e1ffb9d40230c4d0'
var WeatherService =  function(httpClient) {
    this.httpClient = httpClient    
}

 WeatherService.prototype.lookUp = async function(cityName) {        
    const myUrl = url.resolve('https://api.openweathermap.org/', `data/2.5/weather?q=${cityName}&appid=${key}&units=metric`)    
    const response = await this.httpClient.get(myUrl)    
    return response.data
}

module.exports.WeatherService = WeatherService