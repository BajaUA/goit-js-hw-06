const fontSize = document.getElementById("font-size-control");
const text = document.getElementById("text");

fontSize.addEventListener("input", () => {
  const fontSizeValue = fontSize.value + "px";
  text.style.fontSize = fontSizeValue;
});