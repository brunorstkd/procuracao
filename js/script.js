
const urlIlsa = "https://forms.gle/NC7HxjiFKeNRfVdE7";
const urlAlexandro = "https://forms.gle/46Vs5KMHPBuRiVFB9";
const urlFran = "https://forms.gle/4VqxhH6YDGNCmUsW9";
const urlJefferson = "https://forms.gle/Tz51S2eHb5jaRkNR8";
const urlcurriculo = "https://wa.me/5551992684379";
const urlPaula = "https://forms.gle/6RuZgxkZX47La1su5";
const urlPaulaWhatsapp = "https://wa.me/5519991184772";

const multaButton = document.getElementById("multa");
const paulaButton = document.getElementById("paula");
const curriculoButton = document.getElementById("curriculo");
const multaButton2 = document.getElementById("multa2");

function paulawhatsapp(){
  window.open(urlPaulaWhatsapp);
};


function recrutamentowhatsapp(){
  window.open(urlcurriculo);
};

paulaButton.addEventListener("click",function() {
  window.open(urlPaula);});

multaButton.addEventListener("click", function() {
  document.getElementById('multabox').style.display = 'flex';
  document.getElementById('outrosbox').style.display = 'none';
});


multaButton2.addEventListener("click", function() {
  const urlpt1 = "https://wa.me/5551992362534?text="
  const urlpt2 = "Meu nome é: " + document.getElementById('nomemotorista').value;
  const urlpt3 = "%0AMinha placa é: " + document.getElementById('placa').value;
  const urlpt4 = "%0APeriodo da multa: " + document.getElementById('periodo').value;
  const urlMulta = urlpt1+urlpt2+urlpt3+urlpt4;
  console.log(urlMulta)
  window.open(urlMulta);
});



function cloneButtons() {
  // Clone Ilsa button
  const gestores_ilsa = ["Marcelo","Ismael", "Juliano"];
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
  const gestores_alexandro = ["Alan","Rodolfo","Eduardo","Anderson"];
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
  const gestores_fran = ["Wellington","Rafael"];
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

  const franButton2 = document.getElementById("fran2");

  franButton2.addEventListener("click", function() {
    window.open(urlFran);
  });

  

  // Clone Jefferson button

  const jeffersonButton = document.getElementById("jefferson");
  const gestores_jefferson = ["Francisco","Gelison"];

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

const jeffersonButton2 = document.getElementById("jefferson2");
const gestores_jefferson = ["Francisco","Gelison"];

  jeffersonButton2.addEventListener("click", function() {
    window.open(urlJefferson);
  });
  


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




curriculoButton.addEventListener("click", function() {
  document.getElementById('curriculobox').style.display = 'block';
  document.getElementById('outrosbox').style.display = 'none';
});

