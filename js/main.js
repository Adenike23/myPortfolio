// typed effect
let typed = new Typed(".typing-effect", {
    strings: ["a Front-end Developer", "an Avid Writer", " a Cue Adventurer"],
    backSpeed: "9",
    typeSpeed: "9",
    loop: true,
  });

  const year = new Date().getFullYear();
  document.querySelector('.date').textContent = year

const openNav = document.querySelector(".open-menu");
const closeNav = document.querySelector(".close-menu");
const navList = document.querySelector("nav ul");
openNav.addEventListener("click", function() {
  navList.style.right = "0%"
  openNav.style.display = "none"
  closeNav.style.display = "block"
})
closeNav.addEventListener("click", function() {
  navList.style.right = "-200%"
  openNav.style.display = "block"
  closeNav.style.display = "none"
})
document.querySelectorAll("nav ul a").forEach(navLink => {
  navLink.addEventListener("click", function() {
      navList.style.right = "-200%"
      openNav.style.display = "block"
      closeNav.style.display = "none"
  })
})