const form = document.getElementById("form");
const username = document.getElementById("username")
const tel = document.getElementById("tel")
const inidicacao = document.getElementById("indicacao")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})



username.addEventListener("blur", () => {
  checkInputusername();
})

tel.addEventListener("blur", () =>{
  checkInputtel();
})

indicacao.addEventListener("blur", () => {
  checkInputindicacao();
})

function checkInputusername() {
  const usernameValue = username.value;

  if (usernameValue === "") {
    errorInput(username, "Preencha um username!")
  } else {
    const formItem = username.parentElement;
    formItem.className = "form-content"
  }

}

function checkInputtel() {
  const telValue = tel.value;

  if (telValue === "") {
    errorInput(tel, "Preencha um username!")
  } else {
    const formItem = tel.parentElement;
    formItem.className = "form-content"
  }

}

function checkInputindicacao() {
  const indicacaoValue = indicacao.value;

  if (indicacaoValue === "") {
    errorInput(indicacao, "Preencha um username!")
  } else {
    const formItem = indicacao.parentElement;
    formItem.className = "form-content"
  }

}


function checkForm() {
  checkInputusername();
  checkInputtel();
  checkInputindicacao();



  const formItems = form.querySelectorAll(".form-content")

  const isValid = [...formItems].every((item) => {
    return item.className === "form-content"
  });

  if (isValid) {
    alert("CADASTRADO COM SUCESSO!")
  }

}


function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"

}

const emojis = document.querySelectorAll('.emoji');

emojis.forEach(emoji => {
  emoji.addEventListener('click', () => {
    emojis.forEach(e => e.classList.remove('selected'));
    emoji.classList.add('selected');
  });
});

const ratingSlider = document.getElementById("ratingSlider");
const ratingValue = document.getElementById("ratingValue");

ratingSlider.addEventListener("input", () => {
  const value = ratingSlider.value;
  ratingValue.textContent = value;
});
