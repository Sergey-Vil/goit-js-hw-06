function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль
//  по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const bodyEl = document.querySelector("body");
const colorEl = document.querySelector(".color");
const changeColorEl = document.querySelector(".change-color");

changeColorEl.addEventListener("click", onChangeColorClick);

function onChangeColorClick() {
  const color = getRandomHexColor();

  bodyEl.style.backgroundColor = color;
  colorEl.textContent = color;
}
