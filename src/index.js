import "./styles.css";

const button = document.createElement("button");
button.innerText = "Change color";
document.body.appendChild(button);

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const changeBg = () => {
  document.body.style.background = getRandomColor();
  console.log(`The color is: ${getRandomColor()}`);
};

button.addEventListener("click", changeBg);
