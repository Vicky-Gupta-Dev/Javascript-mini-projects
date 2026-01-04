document.getElementById("contactForm");
addEventListener("submit", function (event) {
  event.preventDefault();
  const message = document.getElementById("message").value;

  if (message) {
    document.getElementById("formResponse").textContent =
      "Thank you for your message!";
    document.getElementById("message").value = "";
  } else {
    document.getElementById("formResponse").textContent =
      "Please enter a message!";
    document.getElementById("formResponse").style.color = "red";
  }
});
