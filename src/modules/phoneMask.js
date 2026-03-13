export const phoneMask = (phoneInputs) => {
  phoneInputs.forEach((phoneInput) => {
    phoneInput.addEventListener("input", onPhoneInput);
    phoneInput.addEventListener("blur", onPhoneBlur);
  });

  function onPhoneInput(e) {
    let input = e.target;
    let numbers = input.value.replace(/\D/g, "");

    if (numbers.startsWith("7") || numbers.startsWith("8")) {
      numbers = numbers.slice(1);
    }

    numbers = numbers.slice(0, 10);

    let formatted = "+7";

    if (numbers.length > 0) {
      formatted += " (" + numbers.substring(0, 3);
    }
    if (numbers.length >= 4) {
      formatted += ") " + numbers.substring(3, 6);
    }
    if (numbers.length >= 7) {
      formatted += "-" + numbers.substring(6, 8);
    }
    if (numbers.length >= 9) {
      formatted += "-" + numbers.substring(8, 10);
    }

    input.value = formatted;
  }

  function onPhoneBlur(e) {
    if (e.target.value === "+7" || e.target.value === "+7 (") {
      e.target.value = "";
    }
  }
};
