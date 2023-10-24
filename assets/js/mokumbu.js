function toggleAnswer(questionNumber) {
    var answer = document.getElementById("faq-answer-" + questionNumber);


    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
      

    } else {
        answer.style.display = "none";
      
    }
}

