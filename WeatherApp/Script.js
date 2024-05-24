const apikey = "8ddbb7f82df94793e41a7f6c94fcf341";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const weather_icon = document.querySelector(".weather-icon");
  console.log(weather_icon);

async function checkWeather(city) {
  const response = await fetch(apiUrl +city+ `&appid=${apikey}`);

  if(response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  else {
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";
  
  
    if(data.weather[0].main == "Clouds") {
      weather_icon.src = "image/cloud1.png"
    } 
    else if(data.weather[0].main == "Rain") {
      weather_icon.src = "image/rain.png"
    }
    else if(data.weather[0].main == "Humidity") {
      weather_icon.src = "image/himudity.png"
    }  
    else if(data.weather[0].main == "Clear") {
      weather_icon.src = "image/sun.png"
    }
    else if(data.weather[0].main == "Rain") {
      weather_icon.src = "image/rain.png"
    }
    else if(data.weather[0].main == "Haze") {
      weather_icon.src = "image/fog.png"
    }
  
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
 


}

const searchBox = document.querySelector(".search input");
const btn = document.querySelector(".search button");
// const weather_icon = document.querySelector(".weather-icon");

btn.addEventListener("click",() => {
    checkWeather(searchBox.value);
})


