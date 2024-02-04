const correctAnswers =['E', 'E', 'E', 'E'];
const form = document.querySelector('.question-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e=>{
    e.preventDefault();

    let score = 0;
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value]

    userAnswers.forEach((answer,index) =>{
        if(answer === correctAnswers[index])
        {
            score+=25;
        }
    })
    //console.log(score);
    result.classList.remove('d-none');
    let puan = 0 ;
    const bastır = setInterval(() => {
        result.querySelector('span').textContent = `${puan}%`;
        if (puan == score) {
            clearInterval(bastır);
        }
        else{
            puan++;
        }
    }, 15);
    
})

// setTimeout(()=>{
//     console.log('Çağdaş');
// },2000);
// setInterval(()=>{
//     console.log('Çağdaş');
// },1000);
// let i=0;
// const bastır = setInterval(()=>{
//     console.log("Çağdaş");
//     i++;
//     if (i == 4) 
//     {
//         clearInterval(bastır);    
//     }
// },1000);      