let counterValue = 0;
const newValue = document.querySelector("#value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  newValue.textContent = counterValue;
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  newValue.textContent = counterValue;
});
