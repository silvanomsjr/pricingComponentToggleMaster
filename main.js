const switcherDiv = document.querySelector('.switcher-btn');
const ball = document.querySelector('.ball');
const monthly = document.querySelectorAll('.monthly');
const anually = document.querySelectorAll('.anually');


switcherDiv.addEventListener('click', () =>{
    switcherDiv.classList.toggle('active');
    ball.classList.toggle('active');
    for(let i = 0; i < monthly.length; i++){
        anually[i].classList.toggle('hidden');
        monthly[i].classList.toggle('hidden');
    }
    
});

