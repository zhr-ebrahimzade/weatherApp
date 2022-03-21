/* Time and Date */
let time=new Date();
function current_time(date){
    
    let days=["Sunday","Monday","Tuesday","Wednseday","Thursday","Friday","Saturday"];
    /* let day=days[date.getDay] */
    let formattedDate="";
    if (date.getMinutes()<10){
        formattedDate=`${days[date.getDay()]} ${date.getHours()}:0${date.getMinutes()}`;
    }
    else{
        formattedDate=`${days[date.getDay()]} ${date.getHours()}:${date.getMinutes()}`;
    }
    
    return formattedDate;
}
let h2=document.querySelector("h2");
h2.innerHTML=current_time(time);

/* City Name */

function  searchCity(event){
    event.preventDefault();
    let city_input=document.querySelector("#city");
    let heading1=document.querySelector("h1");
    heading1.innerHTML=city_input.value;
    getApi(city_input.value);
    
}

function showTemp(response){
    console.log(response);
    let temp=document.querySelector("#currentCityTemp");
    let temperature = Math.round(response.data.main.temp);
    temp.innerHTML=temperature;
    
}

function getApi(name){
let apiKey="3cb5b269098cfaa317d36e0cb0aee8c1";
let url=`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${apiKey}`;
axios.get(url).then(showTemp);

}


let cityName=document.querySelector("#city_form");
cityName.addEventListener("submit", searchCity);









