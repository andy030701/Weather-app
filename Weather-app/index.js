//le container du nom de la ville
const cityNameStatement = document.querySelector(".City-name-container p");

//le container de la temperature
const temperaturestatement = document.querySelector(".temperature-statement");

//le container du taux de pluies
const waterStatement = document.querySelector(".water-statement");

//le container de la vitesse du vent
const windSpeedStatement = document.querySelector(".wind-statement");

//l'input du nom de la ville
const cityInput = document.getElementById("city-input");

//le bouton voir
const seeButton = document.querySelector(".see-button");
//fonction asynchrone pour rechercher les donnees stockees dans l'API de openweathermap
let fetchCountry = async (value) => {
  if (value === null) {
    alert("Entrer le nom d'une ville");
  } else {
    //recherche des donnees de l'API
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=e62821893db75b8642d3d909d7d1b8cc`
    )
      .then((res) => res.json())
      .then((data) => {
        //nom de la ville tapee
        cityNameStatement.textContent = data.name;

        //la valeur de la temperature
        temperaturestatement.textContent =
          Math.round(data.main.temp - 273) + "deg";

        //ampleur de la pluie
        waterStatement.textContent = data.clouds.all * 100;

        //vitesse du vent
        windSpeedStatement.textContent = data.wind.speed + "km/h";
      })
      .catch((err) => {
        console.error(err);
      });
    console.log("transfert reussi");
  }
};
seeButton.addEventListener("click", () => {
  fetchCountry(cityInput.value);
});
