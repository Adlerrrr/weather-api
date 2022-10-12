/*  a4071264473d304d44ab9e925330f008 */
/* https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={a4071264473d304d44ab9e925330f008} */
const apiKey = "a4071264473d304d44ab9e925330f008";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#city");


//functions
const showWheaterData = (city) => {
    console.log(city);
}


//eventos

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const city = cityInput.value;
    console.log(city)
    showWheaterData(city)
    
})