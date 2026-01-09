onload = function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");



  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
  }, 10000);
}
  
const display = document.getElementById("display");

 function append(value) {
  display.value += value;
};

function clearDisplay() {
  display.value = "";
};

function calculate() {
  display.value = eval(display.value);
};

function toggleMode () {
  document.body.classList.toggle("dark");
};


