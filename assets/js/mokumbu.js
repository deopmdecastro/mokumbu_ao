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
    } else {
        let p = document.getElementById("p-nome");
        p.innerHTML = "";
    }

    if (email === "" || email === null) {
        let p = document.getElementById("p-email");
        p.innerHTML = "O campo não pode estar vazio";
        p.style.color = "red";
    } else {
        let p = document.getElementById("p-email");
        p.innerHTML = "";
    }

    if (mensagem === "" || mensagem === null) {
        let p = document.getElementById("p-mensagem");
        p.innerHTML = "O campo não pode estar vazio";
        p.style.color = "red";
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
    } else {
        let p = document.getElementById("p-nome-criar-conta");
        p.innerHTML = "";
    }

    if (emailCriarConta === "" || emailCriarConta === null) {
        let p = document.getElementById("p-email-criar-conta");
        p.innerHTML = "O campo não pode estar vazio";
        p.style.color = "red";
    } else {
        let p = document.getElementById("p-email-criar-conta");
        p.innerHTML = "";
    }

    if (telefoneCriarConta === "" || telefoneCriarConta === null) {
        let p = document.getElementById("p-telefone-criar-conta");
        p.innerHTML = "O campo não pode estar vazio";
        p.style.color = "red";
    } else {
        let p = document.getElementById("p-telefone-criar-conta");
        p.innerHTML = "";
    }

    if (senha1 !== senha2 || senha1 === "" || senha1 === null ) {
        let p = document.getElementById("p-senha-criar-conta");
        p.innerHTML = "A senha não corresponde";
        p.style.color = "red";
    } else {
        let p = document.getElementById("p-senha-criar-conta");
        p.innerHTML = "";
    }

}


