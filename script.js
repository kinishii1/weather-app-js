const key = '739abcb349b0368095e1c381cd4e7d9c';

let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityInput = document.getElementById("city");

// console.log(key);

const renderWeather = () => {
  const inputVal = cityInput.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${key}&units=metric`;
  
  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (!inputVal || !isNaN(inputVal )) {
        throw new Error('Invalid input');
      }  
      console.log(data);
      result.innerHTML = `
      <h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp} &#176;</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.main.temp_min} &#176;</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.main.temp_max} &#176;</h4>
            </div>
        </div>
      `
    })
    .catch(error => {
      result.innerHTML = `<h3 class='msg'>${error.message}</h3>`
    });
}

searchBtn.addEventListener('click', renderWeather);
window.addEventListener("load", renderWeather);