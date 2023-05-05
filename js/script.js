
const urlIlsa = "https://forms.gle/NC7HxjiFKeNRfVdE7";
const urlAlexandro = "https://forms.gle/46Vs5KMHPBuRiVFB9";
const urlFran = "https://forms.gle/NC7HxjiFKeNRfVdE7";
const urlJefferson = "https://forms.gle/NC7HxjiFKeNRfVdE7";
const urlcurriculo = "https://wa.me/5551992684379";


const btnComprovante = document.getElementById('comprovante');
const inputNome = document.getElementById('comprovantenomemotorista');
const spanErro = document.getElementById('comprovantenomemotorista-erro');

btnComprovante.addEventListener('click', () => {
  if (!inputNome.value) {
    spanErro.textContent = 'Por favor, preencha seu nome completo.';
  } else {
    // Faça aqui o que você quer que aconteça quando o formulário é enviado com sucesso
    const urlpt1 = "https://wa.me/555199258?text="
    const urlpt2 = "Meu nome é: " + document.getElementById('comprovantenomemotorista').value;
    const urlpt3 = "%0ASegue abaixo comprovante de pagamento do PIX";
    const urlMulta = urlpt1+urlpt2+urlpt3;
    console.log(urlMulta)
    window.open(urlMulta);
  
  }
});


const multaButton = document.getElementById("multa");
const curriculoButton = document.getElementById("curriculo");
const multaButton2 = document.getElementById("multa2");


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
