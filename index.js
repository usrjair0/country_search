var card = document.getElementById("card");
if (pais == "") {
  card.style.display = "none";
}
function procurar() {
  card.style.display = "block";
  let pais = document.getElementById("pais").value;
  let finalURL = `https://restcountries.com/v3.1/name/${pais}?fullText=true`;
  fetch(finalURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let bandeira = document.getElementById("bandeira");
      let nome = document.getElementById("nome");
      let capital = document.getElementById("capital");
      let cont = document.getElementById("cont");
      let pop = document.getElementById("pop");

      nome.innerHTML = pais;
      capital.innerHTML = data[0].capital[0];
      cont.innerHTML = data[0].continents[0];
      pop.innerHTML = data[0].population;
      bandeira.src = data[0].flags.svg;
    });
}
