const KEY = `4BB6QU42D9UV9TLBB3UGZFXVT`;
const API = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline"



const form = document.querySelector("form");
const input = document.querySelector("input");
const weather = document.querySelector(".weather");
const loadSpinner = document.querySelector(".loading-spinner")


form.addEventListener("submit", (e)=>{
    const inputValue = input.value.trim()
    e.preventDefault();
    
    if(inputValue) {
        fetchData(inputValue);
       
    }
})
// currentConditionsweather-snowy
function currentWeatherCondition (icon) {
  switch (icon) {
    case "snow":
        return `<span class="iconify" data-icon="mdi-weather-snowy"></span>`
        
    case "rain":
       return  `<span class="iconify" data-icon="mdi-weather-pouring"></span>`
        
    case "fog":
       return `<span class="iconify" data-icon="mdi-weather-fog"></span>`
        
    case "wind":
       return `<span class="iconify" data-icon="mdi-weather-windy"></span>`
        
    case "cloudy":
       return `<span class="iconify" data-icon="mdi-weather-cloudy"></span>`
     default: 
     return ``
  }
}

const showWeatherInfo = (data) =>{
let iconDataHtml = currentWeatherCondition(data.currentConditions.icon);
//clear 
weather.innerHTML = "";

const html = `
    <div>
     ${iconDataHtml}
      <h4 class="weather__location">${data.address}</h4>
    </div>
       
        <div>
            <span class="lat">Latitude: ${data.latitude}</span>
            <span class="lon">Longitude: ${data.longitude}</span>
        </div>
        <p class="timezone">${data.timezone}</p>
    `
    weather.insertAdjacentHTML("afterbegin", html)
}


async function fetchData (location){

    loadSpinner.style.display = "block";
    try {
        const response = await fetch(`${API}/${location}?key=${KEY}`);
       
    if(!response.ok) {
        
        console.log(`Error ${response.status} - ${response.statusText}`)
        const errEl = document.createElement("h4");
        weather.innerHTML = ""
        errEl.textContent = `Search not found. Error ${response.status}`;
        weather.appendChild(errEl);
    } else {
        const data = await response.json();
        console.log(data)
        showWeatherInfo(data)
    }
      
    } catch (error) {
        console.log("Get an error", error)
    } finally {
        loadSpinner.style.display = "none";
    }
}


// fetchData("lagos")