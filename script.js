$('.owl-carousel').owlCarousel({
  loop:false,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      500:{
          items:2
      },
      700:{
        items:4
    },
      1000:{
          items:5
      }
  }
})

var loader=document.getElementById("preloader");
window.addEventListener("load",()=>{
  loader.style.display="none";
})

hamburger=document.querySelector(".hamburger");
hamburger.onclick=()=>{
  navBar=document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
}