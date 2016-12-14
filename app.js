function init(){
   

        let request = new XMLHttpRequest();
        request.open('GET', "http://jservice.io/api/random");
        request.addEventListener('load', function(){
        let response = JSON.parse(request.responseText);
        let item = response[0];
        newQuestion(item);
        
})
        console.log(request.responseText);
    
        request.send();

        // let button = document.querySelector('#submit');
        // button.addEventListener('click', checkAnswer);
        // button.addEventListener('click', newQuestion);
}


        
function newQuestion(quiz){
       
        let section = document.querySelector('ul');
        let category = document.querySelector('#category');
        category.textContent = quiz.category.title;
        section.appendChild(category);
        let value = document.querySelector('#value');
        value.textContent = quiz.value;
        section.appendChild(value);let question = document.querySelector('#question');
        question.textContent = quiz.question;
        section.appendChild(question);
        
        
       
        
}



// function checkAnswer(){
//     if();
// }









// }



window.addEventListener('load', init);