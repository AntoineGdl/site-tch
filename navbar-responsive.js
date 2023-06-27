const menuSlide = () => {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".navbar ul");
    const navLinksInner = document.querySelectorAll(".navbar ul li");
  
    //menu-icon click event
    menuIcon.addEventListener("click", () => {
      //toggle active class
      navLinks.classList.toggle("menu-active");
  
      //animate navLinks
      navLinksInner.forEach((li, index) => {
        if (li.style.animation) {
          li.style.animation = "";
        } else {
          li.style.animation = `navLinkAnime 0.5s ease forwards ${
            index / 7 + 0.3
          }s`;
        }
      });
  
      //toggle for menu-icon animation
      menuIcon.classList.toggle("span-anime");
    });
  };
  
  menuSlide();