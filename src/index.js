import { addPhone } from "./modules/addPhone";
import { toggleMenu } from "./modules/toggleMenu";
import { popupRepairTypes } from "./modules/popupRepairTypes";

const popupRepairTypesBtns = document.querySelectorAll(".open-repair-types");
popupRepairTypesBtns.forEach((btn) => {
  btn.addEventListener("click", popupRepairTypes);
});

addPhone();
toggleMenu();
