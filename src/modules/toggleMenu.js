export const toggleMenu = () => {
  const menu = document.querySelector(".popup-dialog-menu");
  const menuBtn = document.querySelector(".menu__icon");

  menuBtn.addEventListener("click", () => {
    if (document.documentElement.clientWidth > 575) {
      menu.style.right = getComputedStyle(menu).width;
    } else {
      menu.style.transform = "translate3d(0, 0, 0)";
      menu.style.top = 0;
    }
    menu.style.zIndex = "9999999";
  });

  menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("close-menu") || e.target.closest("a")) {
      if (document.documentElement.clientWidth > 575) {
        menu.style.right = "0";
      } else {
        menu.style.transform = "translate3d(0, -100vh, 0)";
      }
      menu.style.zIndex = "-9999999";
    }
  });
};
