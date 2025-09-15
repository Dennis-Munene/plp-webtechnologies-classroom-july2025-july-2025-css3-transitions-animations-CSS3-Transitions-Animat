
//    Part 2: JavaScript Functions


// Global variable example
let lastSum = 0;

// Function with parameters and return value
function addNumbers(a, b) {
  let result = a + b; // local variable
  return result;
}

// Function that interacts with DOM
function showSum() {
  let num1 = parseFloat(document.getElementById("num1").value) || 0;
  let num2 = parseFloat(document.getElementById("num2").value) || 0;

  // Call function with parameters
  lastSum = addNumbers(num1, num2);

  // Update DOM
  document.getElementById("result").innerText = "Sum: " + lastSum;
}


//    Part 3: Combining CSS & JS


// Reusable function to toggle animation
function toggleBox() {
  let box = document.getElementById("box");
  box.classList.toggle("animate");
}
