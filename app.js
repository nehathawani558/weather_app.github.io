const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5b5a688dd3msh86ffaea8efe0d9cp1ee90ejsnff970e6dff6d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = () => {
    let loc =
      city.value.substring(0, 1).toUpperCase() +
      city.value.substring(1).toLowerCase();
    //   headCity.innerHTML = loc;
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + loc,
      options
    )
      .then((response) => {
        if (response.status != 200) throw new Error(response.status);
        return response.json();
      })
      .then((response) => {
        headCity.innerHTML = loc;
        temphead.innerHTML = response.temp;
        humidhead.innerHTML = response.humidity;
        windhead.innerHTML = response.wind_speed;
        cloudPct.innerHTML = response.cloud_pct;
        feelsLike.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        maxTemp.innerHTML = response.max_temp;
        minTemp.innerHTML = response.min_temp;
        sunrise.innerHTML = response.sunrise;
  
        temp.innerHTML = response.temp;
        windDegrees.innerHTML = response.wind_degrees;
        windSpeed.innerHTML = response.wind_speed;
      })
      .catch((err) => {
        alert("Invalid City\n" + err);
      });
  };
  const getWeather2 = () => {
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
      options
    )
      .then((response) => {
        if (response.status != 200) throw new Error(response.status);
        return response.json();
      })
      .then((response) => {
        humiditykol.innerHTML = response.humidity;
        Windspeedkol.innerHTML = response.wind_speed;
        CloudPctkol.innerHTML = response.cloud_pct;
        feelsLikekol.innerHTML = response.feels_like;
  
        Maxtempkol.innerHTML = response.max_temp;
        Mintempkol.innerHTML = response.min_temp;
        Sunrisekol.innerHTML = response.sunrise;
  
        Tempkol.innerHTML = response.temp;
        Winddegreeskol.innerHTML = response.wind_degrees;
      })
      .catch((err) => {
        alert("Invalid City\n" + err);
      });
  
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris",
      options
    )
      .then((response) => {
        if (response.status != 200) throw new Error(response.status);
        return response.json();
      })
      .then((response) => {
        humidityPa.innerHTML = response.humidity;
        WindspeedPa.innerHTML = response.wind_speed;
        CloudPctPa.innerHTML = response.cloud_pct;
        feelsLikePa.innerHTML = response.feels_like;
  
        MaxtempPa.innerHTML = response.max_temp;
        MintempPa.innerHTML = response.min_temp;
        SunrisePa.innerHTML = response.sunrise;
  
        TempPa.innerHTML = response.temp;
        WinddegreesPa.innerHTML = response.wind_degrees;
      })
      .catch((err) => {
        alert("Invalid City\n" + err);
      });
  
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris",
      options
    )
      .then((response) => {
        if (response.status != 200) throw new Error(response.status);
        return response.json();
      })
      .then((response) => {
        humidityPa.innerHTML = response.humidity;
        WindspeedPa.innerHTML = response.wind_speed;
        CloudPctPa.innerHTML = response.cloud_pct;
        feelsLikePa.innerHTML = response.feels_like;
  
        MaxtempPa.innerHTML = response.max_temp;
        MintempPa.innerHTML = response.min_temp;
        SunrisePa.innerHTML = response.sunrise;
  
        TempPa.innerHTML = response.temp;
        WinddegreesPa.innerHTML = response.wind_degrees;
      })
      .catch((err) => {
        alert("Invalid City\n" + err);
      });
  
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seoul",
      options
    )
      .then((response) => {
        if (response.status != 200) throw new Error(response.status);
        return response.json();
      })
      .then((response) => {
        humiditySeo.innerHTML = response.humidity;
        WindspeedSeo.innerHTML = response.wind_speed;
        CloudPctSeo.innerHTML = response.cloud_pct;
        feelsLikeSeo.innerHTML = response.feels_like;
  
        MaxtempSeo.innerHTML = response.max_temp;
        MintempSeo.innerHTML = response.min_temp;
        SunriseSeo.innerHTML = response.sunrise;
  
        TempSeo.innerHTML = response.temp;
        WinddegreesSeo.innerHTML = response.wind_degrees;
      })
      .catch((err) => {
        alert("Invalid City\n" + err);
      });
  
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo",
      options
    )
      .then((response) => {
        if (response.status != 200) throw new Error(response.status);
        return response.json();
      })
      .then((response) => {
        humidityTok.innerHTML = response.humidity;
        WindspeedTok.innerHTML = response.wind_speed;
        CloudPctTok.innerHTML = response.cloud_pct;
        feelsLikeTok.innerHTML = response.feels_like;
  
        MaxtempTok.innerHTML = response.max_temp;
        MintempTok.innerHTML = response.min_temp;
        SunriseTok.innerHTML = response.sunrise;
  
        TempTok.innerHTML = response.temp;
        WinddegreesTok.innerHTML = response.wind_degrees;
      })
      .catch((err) => {
        alert("Invalid City\n" + err);
      });
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris",
      options
    )
      .then((response) => {
        if (response.status != 200) throw new Error(response.status);
        return response.json();
      })
      .then((response) => {
        humidityNy.innerHTML = response.humidity;
        WindspeedNy.innerHTML = response.wind_speed;
        CloudPctNy.innerHTML = response.cloud_pct;
        feelsLikeNy.innerHTML = response.feels_like;
  
        MaxtempNy.innerHTML = response.max_temp;
        MintempNy.innerHTML = response.min_temp;
        SunriseNy.innerHTML = response.sunrise;
  
        TempNy.innerHTML = response.temp;
        WinddegreesNy.innerHTML = response.wind_degrees;
      })
      .catch((err) => {
        alert("Invalid City\n" + err);
      });
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris",
      options
    )
      .then((response) => {
        if (response.status != 200) throw new Error(response.status);
        return response.json();
      })
      .then((response) => {
        humidityLon.innerHTML = response.humidity;
        WindspeedLon.innerHTML = response.wind_speed;
        CloudPctLon.innerHTML = response.cloud_pct;
        feelsLikeLon.innerHTML = response.feels_like;
  
        MaxtempLon.innerHTML = response.max_temp;
        MintempLon.innerHTML = response.min_temp;
        SunriseLon.innerHTML = response.sunrise;
  
        TempLon.innerHTML = response.temp;
        WinddegreesLon.innerHTML = response.wind_degrees;
      })
      .catch((err) => {
        alert("Invalid City\n" + err);
      });
  };
  window.onload = getWeather2;

const weather = ()=>{
    let loc=city.value.substring(0,1).toUpperCase()+city.value.substring(1).toLowerCase();
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+loc, options)
	.then(response => {
        if(response.status!=200) throw new Error(response.status);
        return response.json();
    
    })
	.then(response => {
       
        cityName.innerHTML=loc;
        console.log(response)
        cloud_pct.innerHTML=response.cloud_pct;
        temp.innerHTML=response.temp;
        temp2.innerHTML=response.temp;
        min_temp.innerHTML=response.min_temp;
        max_temp.innerHTML=response.max_temp;
        feels_like.innerHTML=response.feels_like;
        humidity.innerHTML=response.humidity;
        humidity2.innerHTML=response.humidity;
        wind_degree.innerHTML=response.wind_degrees;
        wind_speed.innerHTML=response.wind_speed;
        sunrise.innerHTML=response.sunrise;
       sunset.innerHTML=response.sunset;
        
    })
	.catch(err => {console.error(err);
       alert("Invalid city :"+err)
    });
}
