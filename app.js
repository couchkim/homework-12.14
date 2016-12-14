function init(){
   

        

        let request = new XMLHttpRequest();
        request.open('GET', "http://jservice.io/api/random");
        request.addEventListener('load', function(){
        let response = JSON.parse(request.responseText);
        let item = response[0];
        newQuestion(item);
        
})
       
        request.send();

        let button = document.querySelector('#submit');
        button.addEventListener('click', checkAnswer());
        button.addEventListener('click', newQuestion());
        
}


        
function newQuestion(quiz){
       
        let section = document.querySelector('ul');
        let category = document.querySelector('#category');
        category.textContent = "Category:  " + quiz.category.title;
        section.appendChild(category);
        let value = document.querySelector('#value');
        value.textContent = "Point Value:  " + quiz.value;
        section.appendChild(value);let question = document.querySelector('#question');
        question.textContent = "Question:  " + quiz.question;
        section.appendChild(question);
        
        
}


function checkAnswer(guess){
    let score = document.querySelector('h1');
    score = 0;
    let input = document.querySelector('input');

    if(input.value === guess.answer){
        score.textContent = score + guess.value;
        section.appendChild(score);
}

}
    
        

window.addEventListener('load', init);