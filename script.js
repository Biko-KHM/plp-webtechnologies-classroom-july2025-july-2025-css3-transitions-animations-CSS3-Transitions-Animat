// ---------------- Part 2 ----------------
// simple example with my name
let author = "Bikila"; // global variable

// function with parameter and return value
function multiply(a, b) {
  let result = a * b; // local variable
  return result;
}

// function to show calculation
function showMultiply() {
  let answer = multiply(7, 2);
  document.getElementById("math-output").textContent =
    author + " says: 7 × 2 = " + answer;
}

// ---------------- Part 3 ----------------
// trigger CSS animation using JS
function animateBox() {
  let box = document.getElementById("js-box");
  box.classList.toggle("animate");

  // reset after 1 second
  setTimeout(() => {
    box.classList.remove("animate");
  }, 1000);
}
