
const urlIlsa = "https://forms.gle/XGBCdWYfLQgpYfxk7";
const urlAlexandro = "https://forms.gle/XGBCdWYfLQgpYfxk7";
const urlFran = "https://forms.gle/XGBCdWYfLQgpYfxk7";
const urlJefferson = "https://forms.gle/XGBCdWYfLQgpYfxk7";
const urlMulta = "https://wa.me/5551992362534";
const urlcurriculo = "https://wa.me/5551992684379";

const multaButton = document.getElementById("multa");
const curriculoButton = document.getElementById("curriculo");

multaButton.addEventListener("click", function() {
  window.open(urlMulta);
});

curriculoButton.addEventListener("click", function() {
  window.open(urlcurriculo);
});


function cloneButtons() {
  // Clone Ilsa button
  const gestores_ilsa = ["Thaynara","Marcio","Ismael/Juliano"];
  const ilsaButton = document.getElementById("ilsa");
  const divBotao = document.getElementById("div_botao");

  ilsaButton.addEventListener("click", function() {
    window.open(urlIlsa);
  });

  for (let i = 0; i < gestores_ilsa.length; i++) {
    const newButton = ilsaButton.cloneNode(true);
    newButton.id = gestores_ilsa[i].toLowerCase();
    newButton.textContent = gestores_ilsa[i];
    divBotao.appendChild(newButton);


    newButton.addEventListener("click", function() {
      window.open(urlIlsa);
    });
  }

  // Clone Alexandro button
  const gestores_alexandro = ["Rodolfo","Eduardo","Anderson"];
  const alexandroButton = document.getElementById("alexandro");

  alexandroButton.addEventListener("click", function() {
    window.open(urlAlexandro);
  });
  for (let i = 0; i < gestores_alexandro.length; i++) {
    const newButton = alexandroButton.cloneNode(true);
    newButton.id = gestores_alexandro[i].toLowerCase();
    newButton.textContent = gestores_alexandro[i];
    divBotao.appendChild(newButton);


    newButton.addEventListener("click", function() {
      window.open(urlAlexandro);
    });
  }

  // Clone Fran button
  const gestores_fran = ["Wellington","Gelisson","Rafael"];
  const franButton = document.getElementById("fran");

  franButton.addEventListener("click", function() {
    window.open(urlFran);
  });
  for (let i = 0; i < gestores_fran.length; i++) {
    const newButton = franButton.cloneNode(true);
    newButton.id = gestores_fran[i].toLowerCase();
    newButton.textContent = gestores_fran[i];
    divBotao.appendChild(newButton);

  
    newButton.addEventListener("click", function() {
      window.open(urlFran);
    });
  }

  // Clone Jefferson button

  const jeffersonButton = document.getElementById("jefferson");
  const gestores_jefferson = ["Francisco","Angela"];

  jeffersonButton.addEventListener("click", function() {
    window.open(urlJefferson);
  });
  
  for (let i = 0; i < gestores_jefferson.length; i++) {
    const newButton = jeffersonButton.cloneNode(true);
    newButton.id = gestores_jefferson[i].toLowerCase();
    newButton.textContent = gestores_jefferson[i];
    divBotao.appendChild(newButton);

 
    newButton.addEventListener("click", function() {
      window.open(urlJefferson);
    });
  }
}
cloneButtons();

const rhButton = document.getElementById('rh');

rhButton.addEventListener("click", function() {
  document.getElementById('rhbox').style.display = 'block';
  document.getElementById('outrosbox').style.display = 'none';
});

const voltarButton = document.getElementById('voltar');

voltarButton.addEventListener("click", function() {
  document.getElementById('rhbox').style.display = 'none';
  document.getElementById('outrosbox').style.display = 'block';
});