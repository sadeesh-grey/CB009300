const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav li');


    burger.addEventListener('click',() => {
        //toggle nav
        nav.classList.toggle('nav-active');


         //Animation
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        }
        else{
         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
     });
      //burger animation 
      burger.classList.toggle('toggle');



    });
   


}

navSlide();

