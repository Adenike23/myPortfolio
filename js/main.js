AOS.init();

// typed effect
let typed = new Typed(".typing-effect", {
    strings: ["a Front-end Developer", "an Avid Writer", " a Cue Adventurer"],
    backSpeed: "9",
    typeSpeed: "9",
    loop: true,
  });

  const year = new Date().getFullYear();
  document.querySelector('.date').textContent = year
  const nav = document.querySelector('nav')

const openNav = document.querySelector(".open-menu");
const closeNav = document.querySelector(".close-menu");
const navList = document.querySelector("nav ul");
openNav.addEventListener("click", function() {
  navList.style.right = "0%"
  openNav.style.display = "none"
  closeNav.style.display = "block"
})
closeNav.addEventListener("click", function() {
  navList.style.right = "-400%"
  openNav.style.display = "block"
  closeNav.style.display = "none"
})
document.querySelectorAll("nav ul a").forEach(navLink => {
  navLink.addEventListener("click", function() {
      navList.style.right = "-400%"
      openNav.style.display = "block"
      closeNav.style.display = "none"
  })
})
// let prevScroll = document.documentElement.scrollTop || document.body.scrollTop || 0;
// window.onscroll = function(){
//   let currentScroll = document.documentElement.scrollTop || document.body.scrollTop || 0;;
//   if(prevScroll > currentScroll){
//     nav.style.transform = 'translateY(0)'
//   } else{
//     nav.style.transform = 'translateY(-100%)';
//   }
//   prevScroll = currentScroll
// }