document.getElementById("runBtn").addEventListener("click", runFizzBuzz);

function runFizzBuzz() {
  const limit = parseInt(document.getElementById("limit").value);
  const output = document.getElementById("output");
  output.innerHTML = ""; 
  // Clear old results

  //loops like we talked about today in class, kinda confusing but we are getting there.
  for (let i = 1; i <= limit; i++) {
    let li = document.createElement("li");

    if (i % 3 === 0 && i % 5 === 0) {
      li.textContent = "FizzBuzz";
      li.classList.add("fizzbuzz");
    } else if (i % 3 === 0) {
      li.textContent = "Fizz";
      li.classList.add("fizz");
    } else if (i % 5 === 0) {
      li.textContent = "Buzz";
      li.classList.add("buzz");
    } else {
      li.textContent = i;
    }

    output.appendChild(li);
  }
}
