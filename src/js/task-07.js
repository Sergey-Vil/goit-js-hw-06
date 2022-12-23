// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і
//  змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи
//  повзунок, буде змінюватися розмір тексту.
const fontSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text", onFontSizeControlInput);

fontSizeControlEl.addEventListener("input", onFontSizeControlInput);

function onFontSizeControlInput() {
  textEl.style.fontSize = `${fontSizeControlEl.value}px`;
}
