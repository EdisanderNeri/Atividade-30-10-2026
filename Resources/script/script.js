let form = document.querySelector("form");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#password");
let mensagem = document.querySelector("span")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = inputEmail.value;
    let password = inputPassword.value;
    if(validarUsuario(email,password)) {
        console.log ("usuario logado com sucesso")
        console.log (email,password)
    }
    else {
        console.log ("erro!!")
        console.log (email,password)
    }

    console.log (email, password);
});


let emailFicticio = "edisander@gmail.com"
let senhaFicticia = "edisander0301"

function validarUsuario(email, senha) {
  if (email === emailFicticio && senha === senhaFicticia) {
    return true;
  } else if (email === "" || senha === "") {
    mensagem.innerHTML = "Não deixe campos vazios!";
    mensagem.style.color = "red";
    return false;
  } else if (senha.length < 8) {
    mensagem.innerHTML = "Senha menor que 8 dígitos";
    mensagem.style.color = "red";
    return false;
  } else {
    // 💡 Esta é a parte que faltava:
    mensagem.innerHTML = "E-mail ou senha incorretos!";
    mensagem.style.color = "red";
    return false;
  }
}
