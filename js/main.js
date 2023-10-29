const navIcons = document.querySelector(".icons");
const menu = document.getElementById("bars");
const close = document.getElementById("xmark");
const linkList = document.querySelector(".link-list");
const links = document.querySelectorAll(".link");
const sections = document.querySelectorAll("section");

console.log(window.location.href.indexOf("index") > -1);
menu.classList.add("active");

navIcons.addEventListener("click", () => {
  navToggle();
});

function navToggle() {
  if (menu.classList[3]) {
    menu.classList.remove("active");
    close.classList.add("active");
    linkList.classList.add("show-list");
  } else {
    menu.classList.add("active");
    close.classList.remove("active");
    linkList.classList.remove("show-list");
  }
}

window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      links.forEach((link) => {
        link.classList.remove("active-page");
        document
          .querySelector(".link-list li a[href*=" + id + "]")
          .classList.add("active-page");
      });
    }
  });
};
