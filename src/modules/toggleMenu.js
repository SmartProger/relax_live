export const toggleMenu = () => {
  const menu = document.querySelector(".popup-dialog-menu");
  const menuBtn = document.querySelector(".menu__icon");
  const menuCloseBtn = document.querySelector(".close-menu");

  menuBtn.addEventListener("click", () => {
    if (document.documentElement.clientWidth > 575) {
      menu.style.right = "645px";
    } else {
      menu.style.top = "714px";
    }
    menu.style.zIndex = "999999999";
  });

  menuCloseBtn.addEventListener("click", () => {
    if (document.documentElement.clientWidth > 575) {
      menu.style.right = "0";
    } else {
      menu.style.top = "0";
    }
    menu.style.zIndex = "-999999999";
  });
};
