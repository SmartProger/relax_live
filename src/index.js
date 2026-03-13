import { addPhone } from "./modules/addPhone";
import { toggleMenu } from "./modules/toggleMenu";
import { popupRepairTypes } from "./modules/popupRepairTypes";
import { phoneMask } from "./modules/phoneMask";

const popupRepairTypesBtns = document.querySelectorAll(".open-repair-types");
popupRepairTypesBtns.forEach((btn) => {
  btn.addEventListener("click", popupRepairTypes);
});

const phoneMaskFields = document.querySelectorAll("[name='phone']");

phoneMask(phoneMaskFields);

addPhone();
toggleMenu();
