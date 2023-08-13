const form = document.getElementById("form");
const username = document.getElementById("username")
const tel = document.getElementById("tel")
const Avaliacao_atendimento = document.getElementById("Avaliacao_atendimento")
const Avaliacao_produto = document.getElementById("Avaliacao_produto")
const solucao = document.getElementById("solucao")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})

username.addEventListener("blur", () => {
  checkInputUsername();
})

tel.addEventListener("blur", () =>{
  checkInputTel();
})

Avaliacao_atendimento.addEventListener("blur", () => {
  checkInputAvaliacao_atendimento();
})

Avaliacao_atendimento.addEventListener("blur", () => {
  checkInputAvaliacao_produto();
})

solucao.addEventListener("blur", () => {
  checkInputsolucao();
})

function checkInputUsername(){
  const usernameValue = username.value;

  if(usernameValue === ""){
    errorInput(username, "Insira seu nome...")
  }else{
    const formItem = username.parentElement;
    formItem.className = "form-content"
  }

}

function checkInputTel(){
  const telValue = tel.value;

  if(telValue === ""){
    errorInput(tel, "Insira seu contato...")
  } else {
    const formItem = tel.parentElement;
    formItem.className  = "form-content"
  }
}

function checkInputAvaliacao_atendimento(){
  const Avaliacao_atendimentoValue = Avaliacao_atendimento.value;

  if(Avaliacao_atendimentoValue === ""){
    errorInput(Avaliacao_atendimento, "por favor, digite um número!")
  }else{
    const formItem = Avaliacao_atendimento.parentElement;
    formItem.className = "form-content"
  }

}

function checkInputAvaliacao_produto(){
  const Avaliacao_produtoValue = Avaliacao_produto.value;

  if(Avaliacao_produtoValue === ""){
    errorInput(Avaliacao_produto, "por favor digite um número!")
  } else {
    const formItem = Avaliacao_produto.parentElement;
    formItem.className = "form-content"
  }
}

function checkInputsolucao(){
  const solucaoValue = solucao.value;

  if(solucaoValue === ""){
    errorInput(solucao, "descreva sua experiência...")
  } else {
    const formItem = solucao.parentElement;
    formItem.className = "form-content"
  }
}

function checkForm(){
  checkInputUsername();
  checkInputTel();
  checkInputAvaliacao_atendimento();
  checkInputAvaliacao_produto();
  checkInputsolucao();

  const formItems = form.querySelectorAll(".form-content")
  
  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
  });

  if(isValid){
    alert("RESPOSTAS ENVIADAS, OBRIGADO POR RESPONDER")
  }

}

function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"

}
