const navSlide=()=>{
  const burger=document.querySelector('.burger');
  const nav=document.querySelector('.nav-links');
  const navLinks=document.querySelectorAll('.nav-links li');
  console.log(navLinks);
  // toggle nave
/* on clicking burger nav class list will run a function for nav links */
    burger.addEventListener('click',()=>{
      nav.classList.toggle('nav-active');
// animate links
      navLinks.forEach((link,index)=>{
          if(link.style.animation){
            link.style.animation='';
          }
          else{
            link.style.animation=`navlinkfade 0.5s ease forwards ${index/7}s`;
          }
        console.log(index / 7);
      });
   // burger animation

   burger.classList.toggle('toggle');

    });

}
navSlide();
