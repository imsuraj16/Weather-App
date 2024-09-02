let cityInput = document.querySelector('.city-input')
let search = document.querySelector('.search-btn')


async function fetchWeather(city_info) {
    let API_ID = `042a517def7b09de6a5bac4f31c99136`
    let API = `https://api.openweathermap.org/data/2.5/weather?q=${city_info}&appid=${API_ID}&units=metric`
    
    let result = (await(await fetch(API)).json())
    // console.log(result);
    fetchWeatherData(result)
}


function fetchWeatherData({name,main}){
    document.querySelector('.secound_div').innerHTML = 
    `<div><h1>${name}</h1></div>
    <div class="weather-info">
            <div class="info-item">
                <h3>Temperature</h3>
                <p class="temp">${main.temp}</p>
            </div>
            <div class="info-item">
                <h3>Pressure</h3>
                <p class="pressure">${main.pressure}</p>
            </div>
            <div class="info-item">
                <h3>Humidity</h3>
                <p class="humidity">${main.humidity}</p>
            </div>
        </div>`
}


search.addEventListener('click',()=>{
    let citysearch = cityInput.value
    // console.log(citysearch);
    fetchWeather(citysearch)
    cityInput.value = ''
    
})