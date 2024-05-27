
const urlIlsa = "https://forms.gle/NC7HxjiFKeNRfVdE7";
const urlYasmim = "https://forms.gle/46Vs5KMHPBuRiVFB9";
const urlFran = "https://forms.gle/4VqxhH6YDGNCmUsW9";
const urlJefferson = "https://forms.gle/Tz51S2eHb5jaRkNR8";
const urlPaula = "https://forms.gle/6RuZgxkZX47La1su5";
const urlsp = "https://forms.gle/Vv6usvd26pv9egcK9";
const urlpf = "https://forms.gle/BrULDNNXKGk7iFF56"
const urlit = "https://forms.gle/kZ5RpbZgKVptodo69"

const urlcurriculo = "https://wa.me/5551992684379";
const urlPaulaWhatsapp = "https://wa.me/5551993611444";
const urlPaulaWhatsapp2 = "https://wa.me/5511989301543";


const multaButton = document.getElementById("multa");
const paulaButton = document.getElementById("paula");
const curriculoButton = document.getElementById("curriculo");
const multaButton2 = document.getElementById("multa2");
const spButton = document.getElementById("sp");
const marioButton = document.getElementById("mario");
const urlMario = 'https://forms.gle/ixG1srBmK1ZibMur7';
const Fran2Button = document.getElementById("fran2");
const pfButton = document.getElementById("pf");
const itButton = document.getElementById("it");

function paulawhatsapp(){
  window.open(urlPaulaWhatsapp2);
};

function recrutamentowhatsapp(){
  window.open(urlcurriculo);
};


const jeffersonButton2 = document.getElementById("jefferson2");

  jeffersonButton2.addEventListener("click", function() {
    window.open(urlFran);
  });


  Fran2Button.addEventListener("click", function() {
    window.open(urlFran);
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


paulaButton.addEventListener("click",function() {
  window.open(urlPaula);});

spButton.addEventListener("click",function() {
  window.open(urlsp);});

itButton.addEventListener("click",function() {
  window.open(urlit);});

marioButton.addEventListener("click",function() {
  window.open(urlIlsa);});

pfButton.addEventListener("click",function() {
  window.open(urlpf);});

// Abrir multa, ocultar resto
multaButton.addEventListener("click", function() {
  document.getElementById('multabox').style.display = 'flex';
  document.getElementById('outrosbox').style.display = 'none';
});


// Envio multa Samanta
multaButton2.addEventListener("click", function() {
  const urlpt1 = "https://wa.me/5551992362534?text="
  const urlpt2 = "Meu nome é: " + document.getElementById('nomemotorista').value;
  const urlpt3 = "%0AMinha placa é: " + document.getElementById('placa').value;
  const urlpt4 = "%0APeriodo da multa: " + document.getElementById('periodo').value;
  const urlMulta = urlpt1+urlpt2+urlpt3+urlpt4;
  console.log(urlMulta)
  window.open(urlMulta);
});


function criarNovosBotoes(botaoModelo, gestores, atendente) {
  const divBotao = document.getElementById("div_botao");
  
  for (let i = 0; i < gestores.length; i++) {
    const newButton = botaoModelo.cloneNode(true);
    newButton.id = gestores[i].toLowerCase();
    newButton.textContent = gestores[i];
    divBotao.appendChild(newButton);

    newButton.addEventListener("click", function() {
      // Lógica a ser executada quando um botão é clicado
      window.open(atendente);
    });
  }
}

//BOTÃO ALESSANDRO TRANSFERIDO PARA YASMIM
const alessandro = {atendente: urlYasmim, gestores: ["Gelisson", "Cristian", "Rafael", "Roger", "Anderson", "Eduardo", "Gustavo", "Marcelo Ulrich"]};
const fran = {atendente: urlFran, gestores: ["Cirilo","Tomas"]}; //MAIS ARMAZEN SECO E CONGELADO
const ilsa = {atendente: urlIlsa, gestores: ["Ismael", "Macelo Torres (German-NSR)", "Rodolfo"]}; //MAIS ADMINISTRATIVO
const mario = {atendente: urlMario, gestores: []};


const ilsaButton = document.getElementById("ilsa");
criarNovosBotoes(ilsaButton, mario.gestores, urlMario);
criarNovosBotoes(ilsaButton, alessandro.gestores, urlYasmim);
//criarNovosBotoes(ilsaButton, jeferson.gestores, urlJefferson);
criarNovosBotoes(ilsaButton, fran.gestores, urlFran);
criarNovosBotoes(ilsaButton, ilsa.gestores, urlIlsa);


ilsaButton.setAttribute('hidden', 'true');