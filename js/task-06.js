// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
// якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid,
//  які ми вже додали у вихідні файли завдання.

const validationEl = document.querySelector("#validation-input");
console.log();

validationEl.addEventListener("blur", onValidationBlur);

function onValidationBlur(e) {
  if (validationEl.value.length != validationEl.dataset.length) {
    validationEl.classList.add("invalid");
    validationEl.classList.remove("valid");

    return;
  } else {
    validationEl.classList.add("valid");
    validationEl.classList.remove("invalid");
  }
}
