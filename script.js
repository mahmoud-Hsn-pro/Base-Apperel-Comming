let input = document.querySelector("input");
let form = document.querySelector("form");

input.addEventListener("focus", function () {
  form.classList.remove("active");
})

form.addEventListener("submit", function (e) {
  let regex = /\w+@\w+\.\w+/gi;

  e.preventDefault();

  if (input.value == "") {
    input.focus();
  } else {
    if (!regex.test(input.value)) {
      form.classList.add("active");
    } else {
      form.classList.remove("active");
    }
  }

  input.value = "";
});
