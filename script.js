const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{

    if(window.scrollY > 30){
        navbar.style.background = 'rgba(7,7,11,0.9)';
    }
    else{
        navbar.style.background = 'rgba(7,7,11,0.55)';
    }

});

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card)=>{

    card.addEventListener('mousemove',(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(200,169,107,0.15),
                rgba(255,255,255,0.03)
            )`;
    });

    card.addEventListener('mouseleave',()=>{

        card.style.background = 'rgba(255,255,255,0.03)';

    });

});