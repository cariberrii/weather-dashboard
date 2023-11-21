$("button").on("click", function () {
var cityName = $("#city-name").val();

var apiKey = "a088722400e4fb1dfa515607f987ddce"
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&cnt=1&units=metric&appid=" + apiKey;

console.log(queryURL);

fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data.city);
        console.log(data.list[0].main);

        var currentCity = data.city.name;  
        var currentDay = dayjs().format("dddd[,] MMMM D");
        $(".card-city").text(currentCity + " (" + currentDay + ")");
        
        var currentTemp = data.list[0].main.temp;
        $(".card-temp").text("Temp: " + currentTemp + "°C");

        var currentWind = data.list[0].wind.speed;
        $(".card-wind").text("Wind: " + currentWind + "KPH");

        var currentHumidity = data.list[0].main.humidity;
        $(".card-humidity").text("Humidity: " + currentHumidity + "%");
    })
});