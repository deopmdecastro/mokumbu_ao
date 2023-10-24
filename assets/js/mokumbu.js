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


