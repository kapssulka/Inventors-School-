import IMask from "imask";

const phoneInput = document.querySelector(".form-trial__input");
const formTrial = document.querySelector(".form-trial");
const errorMessage = document.querySelector(".form-trial__error");
const alert = document.querySelector(".alert");

let phoneMask;

if (phoneInput) {
  phoneMask = IMask(phoneInput, {
    mask: "0 (000) 00-00-00",
    lazy: true,
  });
}

if (formTrial && phoneMask && errorMessage && alert) {
  formTrial.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!phoneMask.masked.isComplete) {
      errorMessage.classList.add("form-trial__error--visible");
      return;
    }

    errorMessage.classList.remove("form-trial__error--visible");

    // ! Код при успехе

    // Очищаем поле
    phoneMask.value = "";

    // Показываем уведомление
    alert.classList.add("alert--visible");

    // Скрываем уведомление через 3 секунды
    setTimeout(() => {
      alert.classList.remove("alert--visible");
    }, 3000);

    console.log("Номер успешно отправлен");

    // Здесь будет выполняться код при успешной отправке
  });

  phoneInput.addEventListener("input", () => {
    errorMessage.classList.remove("form-trial__error--visible");
  });
}
