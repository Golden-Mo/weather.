"use strict"
let place = document.querySelector("#place");
let degree = document.querySelector("#degree");
let chooseLocation = document.querySelector("#chooseLocation");
let find = document.querySelector("#find");

async function findWeather() {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=c987af9471e244a78f6171127250107&q=${chooseLocation.value}&days=3`);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        
        console.log(data.location.name);

        let currentweather = data.current.dewpoint_c;
        place.innerHTML = data.location.name;
        degree.innerHTML = currentweather;

    } catch (error) {
        window.alert("wrong country")
    }
}

find.addEventListener("click", function () {
    findWeather();
});
