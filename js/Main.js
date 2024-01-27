// SROLL
window.addEventListener("load", () => {
  AOS.init();
});

//Header
const headerBg = () => {
  let header = document.querySelector(".js-header");
  window.addEventListener("scroll", function () {
    if (this.scrollY > 0) {
      header.classList.add("bg-reveal");
    } else {
      header.classList.add("bg-reveal");
    }
  });
};
headerBg();

// NAV

const navigation = () => {
  const navToggler = document.querySelector(".js-nav-toggler");
  const nav = document.querySelector(".js-nav");
  const navItems = nav.querySelectorAll("li");

  const navToggle = () => {
    nav.classList.toggle("open");
    navToggler.classList.toggle("active");
  };

  navToggler.addEventListener("click", navToggle);
};

navigation();
