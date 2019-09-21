var http = new XMLHttpRequest();
http.open('GET','http://5d76bf96515d1a0014085cf9.mockapi.io/quiz',true);
http.onload = function(){
    var data = JSON.parse(this.response);
    var answers = [];
    for(var i=0;i<5;i++){
        answers.push(data[i].options[data[i].answer - 1]);
    }
    var marks = 0,count=0;
    var selectedAns = document.querySelectorAll('.option-wrapper label p');
    var selectedAnswer = [];
    for(var i=0;i<20;i++){
        selectedAnswer.push(selectedAns[i]);
    }
    selectedAnswer.map((item) => {
        item.addEventListener('click', function(){
            count++;
            var finalAns = item.innerHTML;
            for(var j=0;j<5;j++){
                if(finalAns==answers[j]){
                    marks += 1;
                }
            }
        });
    }); 
    var modalWrapper = document.getElementById('modal-wrapper');
    var quizWrapper = document.getElementById('quiz-wrapper');
    var submitBtn = document.getElementById('btn-submit');
    var result = document.getElementById('result');
    submitBtn.addEventListener('click',function(){
        quizWrapper.style.display = 'none';
        modalWrapper.style.display = 'block';
        result.innerHTML = marks+"/5";
    });
}
http.send();