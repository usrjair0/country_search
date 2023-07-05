var card = document.getElementById("card");
card.style.display = "none";
function procurar() {
  card.style.display = "block";
  let pais = document.getElementById("pais").value;
  let finalURL = `https://restcountries.com/v3.1/name/${pais}?fullText=true`;
  fetch(finalURL)
  //O comando fetch em JavaScript é uma função que permite fazer requisições de rede 
  //(como solicitações HTTP) para recuperar recursos de um servidor. Ele é usado para
  // buscar dados de APIs, carregar conteúdo dinamicamente e interagir com serviços web.
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
