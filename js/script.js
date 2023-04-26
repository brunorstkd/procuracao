
const urlIlsa = "https://google.com";
const urlAlexandro = "https://example.com";
const urlFran = "https://stackoverflow.com";
const urlJefferson = "https://github.com";

const gestores_jefferson = ["GESTOR DO JEFFERSON1", "GESTOR DO JEFFERSON2"];
function cloneButtons() {
  // Clone Ilsa button
  const gestores_ilsa = ["GESTOR DA ILSA1", "GESTOR DA ILSA2"];
  const ilsaButton = document.getElementById("ilsa");
  const divBotao = document.getElementById("div_botao");

  for (let i = 0; i < gestores_ilsa.length; i++) {
    const newButton = ilsaButton.cloneNode(true);
    newButton.id = gestores_ilsa[i].toLowerCase();
    newButton.textContent = gestores_ilsa[i];
    divBotao.appendChild(newButton);

    ilsaButton.addEventListener("click", function() {
      window.open(urlIlsa);
    });
    newButton.addEventListener("click", function() {
      window.open(urlIlsa);
    });
  }

  // Clone Alexandro button
  const gestores_alexandro = ["GESTOR DO ALEXANDRO1", "GESTOR DO ALEXANDRO2"];
  const alexandroButton = document.getElementById("alexandro");

  for (let i = 0; i < gestores_alexandro.length; i++) {
    const newButton = alexandroButton.cloneNode(true);
    newButton.id = gestores_alexandro[i].toLowerCase();
    newButton.textContent = gestores_alexandro[i];
    divBotao.appendChild(newButton);

    alexandroButton.addEventListener("click", function() {
      window.open(urlAlexandro);
    });
    newButton.addEventListener("click", function() {
      window.open(urlAlexandro);
    });
  }

  // Clone Fran button
  const gestores_fran = ["GESTOR DA FRAN1", "GESTOR DA FRAN2"];
  const franButton = document.getElementById("fran");

  for (let i = 0; i < gestores_fran.length; i++) {
    const newButton = franButton.cloneNode(true);
    newButton.id = gestores_fran[i].toLowerCase();
    newButton.textContent = gestores_fran[i];
    divBotao.appendChild(newButton);

    franButton.addEventListener("click", function() {
      window.open(urlFran);
    });
    newButton.addEventListener("click", function() {
      window.open(urlFran);
    });
  }

  // Clone Jefferson button

  const jeffersonButton = document.getElementById("jefferson");

  for (let i = 0; i < gestores_jefferson.length; i++) {
    const newButton = jeffersonButton.cloneNode(true);
    newButton.id = gestores_jefferson[i].toLowerCase();
    newButton.textContent = gestores_jefferson[i];
    divBotao.appendChild(newButton);

    jeffersonButton.addEventListener("click", function() {
      window.open(urlJefferson);
    });
    newButton.addEventListener("click", function() {
      window.open(urlJefferson);
    });
  }
}
cloneButtons();