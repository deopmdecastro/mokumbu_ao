function toggleAnswer(questionNumber) {
    var answer = document.getElementById("faq-answer-" + questionNumber);


    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";


    } else {
        answer.style.display = "none";

    }
}

function verificar() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome === "" || nome === null) {
        let p = document.getElementById("p-nome");
        p.innerHTML = "O campo não pode estar vazio";
        p.style.color = "red";
        p.style.fontSize = "14px";

    } else {
        let p = document.getElementById("p-nome");
        p.innerHTML = "";
    }

    if (email === "" || email === null) {
        let p = document.getElementById("p-email");
        p.innerHTML = "O campo não pode estar vazio";
        p.style.color = "red";
        p.style.fontSize = "14px";

    } else {
        let p = document.getElementById("p-email");
        p.innerHTML = "";
    }

    if (mensagem === "" || mensagem === null) {
        let p = document.getElementById("p-mensagem");
        p.innerHTML = "O campo não pode estar vazio";
        p.style.color = "red";
        p.style.fontSize = "14px";

    } else {
        let p = document.getElementById("p-mensagem");
        p.innerHTML = "";
    }
}

function verificarCriarConta() {
    let senha1 = document.getElementById("senha-criar-conta").value;
    let senha2 = document.getElementById("confirmar-senha").value;
    let nomeCriarConta = document.getElementById("nome-criar-conta").value;
    let emailCriarConta = document.getElementById("email-criar-conta").value;
    let telefoneCriarConta = document.getElementById("telefone-criar-conta").value;


    if (nomeCriarConta === "" || nomeCriarConta === null) {
        let p = document.getElementById("p-nome-criar-conta");
        p.innerHTML = "O campo não pode estar vazio";
        p.style.color = "red";
        p.style.fontSize = "14px";

    } else {
        let p = document.getElementById("p-nome-criar-conta");
        p.innerHTML = "";
    }

    if (emailCriarConta === "" || emailCriarConta === null) {
        let p = document.getElementById("p-email-criar-conta");
        p.innerHTML = "O campo não pode estar vazio";
        p.style.color = "red";
        p.style.fontSize = "14px";

    } else {
        let p = document.getElementById("p-email-criar-conta");
        p.innerHTML = "";
    }

    if (telefoneCriarConta === "" || telefoneCriarConta === null) {
        let p = document.getElementById("p-telefone-criar-conta");
        p.innerHTML = "O campo não pode estar vazio";
        p.style.color = "red";
        p.style.fontSize = "14px";

    } else {
        let p = document.getElementById("p-telefone-criar-conta");
        p.innerHTML = "";
    }

    if (senha1 !== senha2 || senha1 === "" || senha1 === null) {
        let p = document.getElementById("p-senha-criar-conta");
        p.innerHTML = "A senha não corresponde";
        p.style.color = "red";
        p.style.fontSize = "14px";

    } else {
        let p = document.getElementById("p-senha-criar-conta");
        p.innerHTML = "";
    }

}


function showPassword() {
    let inputPass = document.getElementById("senha-criar-conta");
    let btnShowPass = document.getElementById("btn-senha");

    if (inputPass.type === "password") {
        inputPass.setAttribute("type", "text")
        btnShowPass.classList.replace("bi-eye-fill", "bi-eye-slash-fill")
        inputPass.style.paddingRight = "38px";

    } else {
        inputPass.setAttribute("type", "password")
        btnShowPass.classList.replace("bi-eye-slash-fill", "bi-eye-fill")
        inputPass.style.paddingRight = "38px";
    }
}

function showPassword1() {
    let inputPass = document.getElementById("confirmar-senha");
    let btnShowPass = document.getElementById("btn-senha1");

    if (inputPass.type === "password") {
        inputPass.setAttribute("type", "text")
        btnShowPass.classList.replace("bi-eye-fill", "bi-eye-slash-fill")
        inputPass.style.paddingRight = "38px";
    } else {
        inputPass.setAttribute("type", "password")
        btnShowPass.classList.replace("bi-eye-slash-fill", "bi-eye-fill")
        inputPass.style.paddingRight = "38px";
    }
}

// Redirecinar para a página HTML desejada

function paginaCriarConta() {

    window.location.href = "criar_conta.html";
}

// Redirecinar para a página HTML desejada

function detectarSistemaOperacional() {
    const userAgent = window.navigator.userAgent;

    if (/Android/i.test(userAgent)) {
    
        window.location.href = "https://www.youtube.com/watch?v=tRpHfjKml6k";

    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
    
        window.location.href = "https://www.youtube.com/watch?v=5gO0xpY_Y3E";

    } else {
    
        window.location.href = "upsss.html";

    }
}

