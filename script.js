const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

async function checkWeather(city) {
    const api_key = "c7e7caa91097e0c159d28e280857edfc";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}&appid=${api_key} `).then(response => response.json());
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML=`${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    wind_speed.innerHTML=`${weather_data.wind.speed}Km/h`;
    switch(weather_data.weather[0].main){
        case'Clouds':weather_img.src="IMG/cloud.png";break;
        case'Clear':weather_img.src="IMG/clear.png";break;
        case'Rain':weather_img.src="IMG/rain.png";break;
        case'Mist':weather_img.src="IMG/mist.png";break;
        case'Snow':weather_img.src="IMG/snow.png";break;
        
    }
}
searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value)
});

