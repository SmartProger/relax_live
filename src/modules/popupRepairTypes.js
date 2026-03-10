export const popupRepairTypes = (e) => {
  const popup = document.querySelector(".popup-repair-types");

  e.preventDefault();
  popup.style.display = "";
  popup.style.visibility = "visible";

  popup.addEventListener("click", (e) => {
    if (e.target.classList.contains("close")) {
      popup.style.display = "none";
    }
  });
};
