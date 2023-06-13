const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e74b52b02bmsh85dc3564a727471p1f059cjsn3174ebe5b7d2",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
var getWeather = (city)=>{
  cityName.innerHTML=city;

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
  
      // cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise; 
      sunInfo.innerHTML = response.sunrise; 
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      wind2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
}


submit.addEventListener("click", (e)=>{
  e.preventDefault();
  getWeather(city.value)
})


var mumbaiWeather=()=>{
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai",
    options
  )
    .then((response) => response.json())
    .then((response) =>{
      console.log(response)
    })

}

