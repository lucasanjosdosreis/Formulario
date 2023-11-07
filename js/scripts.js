const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(nameInput.value === "") {
        alert("Por favor, preencha seu nome.");
        return;
    }
    if(emailInput.value ==="" || isEmailValid(emailInput.value)){
        alert("Por favor, preencha se email.");
        return;
    }
    if(!ValidatePassword(passwordInput.value, 8)){
        alert("A senha precisa ser no minimo 8 digitos.");
        return;
    }
    if(jobSelect.value === ""){
      alert("Por favor, seleciona a sua situação.");  
      return;
    }
    if(messageTextarea.value === ""){
        alert("Por favor, digite sua mensagem,");
        return;
    }
    form.submit();

}); 
function isEmailValid(email){

    const emailRegex = new RegExp(
       /^[a-zA-Z0-9,_-]+@[a-zA-z0-9,_-]+\.[a-zA-z]{2,}$/
    );
    if(emailRegex.test(email)) {
        return true;
    }  
};
