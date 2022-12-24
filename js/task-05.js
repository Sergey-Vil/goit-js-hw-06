const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", onNameInputInput);

function onNameInputInput(e) {
  nameOutput.textContent = e.target.value || "Anonymous";
}
