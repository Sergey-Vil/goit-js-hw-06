// Cтвори змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const subBatton = document.querySelector('button[data-action = "decrement"]');
const addBatton = document.querySelector("button[data-action='increment']");
const counterValue = document.querySelector("#value");

subBatton.addEventListener("click", onSubBattonClick);
addBatton.addEventListener("click", onAddBattonClick);

let counter = 0;

function onSubBattonClick() {
  if (counter <= 0) {
    return;
  }
  counter -= 1;
  counterValue.textContent = counter;
}
function onAddBattonClick() {
  counter += 1;
  counterValue.textContent = counter;
}
