const correctAnswers =['8', '15', '5', '36'];
const form = document.querySelector('.question-form');
const result = document.querySelector('.result');
const successMessage = document.querySelector('#successMessage');
const button = document.querySelector('.btn');

form.addEventListener('submit', e=>{
    e.preventDefault();

    let score = 0;
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value]

    userAnswers.forEach((answer,index) =>{
        if(answer === correctAnswers[index])
        {
            score+=25;
        }
    });
    result.classList.remove('d-none');
    let puan = 0 ;
    const bastır = setInterval(() => {
        result.querySelector('#percentage').textContent = `${puan}%`;
        if (puan == score) {
            clearInterval(bastır);
        }
        else{
            puan++;
        }
    },10);

    if (score == 100) {
        successMessage.classList.remove('d-none');
        button.setAttribute('disabled', '')
    };
})