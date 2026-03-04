export const addPhone = () => {
  const phoneWrapper = document.querySelector(".header-contacts__phone-number-wrap"); // prettier-ignore
  const addPhoneBtn = document.querySelector(".header-contacts__arrow");
  const addPhoneBtnImg = addPhoneBtn.querySelector("img");

  addPhoneBtn.addEventListener("click", () => {
    if (window.getComputedStyle(phoneWrapper).height == "30px") {
      phoneWrapper.style.height = "65px";
      addPhoneBtnImg.style.transform = "rotate(180deg)";
    } else {
      phoneWrapper.style.height = "30px";
      addPhoneBtnImg.style.transform = "rotate(0deg)";
    }
  });
};
