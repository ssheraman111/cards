let container = document.querySelector(".container");
let body = document.querySelector(".body1");

let api = "https://www.omdbapi.com/?apikey=b6003d8a&s=All";
fetch(api)
  .then((haro) => haro.json())
  .then((haro2) => {
    haro2.Search.forEach((element) => {
      body.innerHTML += `<div class="hey">
      <img class="img" src=${element.Poster}/>
      <h4 class="title">${element.Title};</h4>.
       <h4 class="year">${element.Year}</h4>.
      </div>`;
    });
  });
