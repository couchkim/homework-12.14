let question = {
    category: null,
    value: null,
    text: null,
    answer: null,
}


function init() {


    function getQuestion() {

        let request = new XMLHttpRequest();
        request.open('GET', "http://jservice.io/api/random");
        request.addEventListener('load', function () {
            let response = JSON.parse(request.responseText);
            let item = response[0];
            newQuestion(item);
            question.text = item.question;
            question.category = item.category.title;
            question.value = item.value;
            question.answer = item.answer;
            console.log(question.answer);

        })

        request.send();
    }
    getQuestion();

    let button = document.querySelector('#submit');
    button.addEventListener('click', checkAnswer);
    button.addEventListener('click', getQuestion);

}



function newQuestion(quiz) {

    let section = document.querySelector('ul');
    let category = document.querySelector('#category');
    category.textContent = "Category:  " + quiz.category.title;
    // section.appendChild(category);
    let value = document.querySelector('#value');
    value.textContent = "Point Value:  " + quiz.value;
    // section.appendChild(value); 
    let question = document.querySelector('#question');
    question.textContent = "Question:  " + quiz.question;
    // section.appendChild(question);


}


function checkAnswer() {
    let score = document.querySelector('p');
    let input = document.querySelector('input');

    if (input.value === question.answer) {
        score.textContent = parseInt(score.textContent) + question.value;
        
    }
    input.value="";

}



window.addEventListener('load', init);