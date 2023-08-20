let search_place = document.getElementById("search_place");
let searchBtn = document.getElementById("search");

searchBtn.addEventListener("click", function () {
  // Fetch place
  fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${search_place.value}`
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (place_data) {
      console.log(place_data.results[0].latitude);
      console.log(place_data.results[0].longitude);

      let latitude = place_data.results[0].latitude;
      let longitude = place_data.results[0].longitude;

      //   sau khi có được longitude và latitude của input từ người dùng thì fetch cái sau
      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      )
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          console.log(data.current_weather);
          console.log("Nhiệt độ: " + data.current_weather.temperature);
          console.log("Weather code: " + data.current_weather.weathercode);
        });
    });
});

// fetch("https://jsonplaceholder.typicode.com/comments")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });
