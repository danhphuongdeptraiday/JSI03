fetch("https://jsonplaceholder.typicode.com/photos")
  .then(function (response) {
    if (response.ok) {
      console.log(response);
      return response.json();
    }
  })
  .then(function (data) {
    for (let i = 0; i < 10; i++) {
      console.log(data[i]);
    }
  })
  .catch(function (err) {
    console.log(err);
  });
