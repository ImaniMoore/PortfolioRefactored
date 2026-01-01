//Form Validation
function validateForm(event) {
  event.preventDefault();

  const form = document.forms["myForm"];
  const name = form["name"].value;
  const email = form["email"].value;
  const message = form["message"].value;
  const phone = form["phone"].value;

  const errorBox = document.getElementById("formError");

  function showError(message) {
    errorBox.textContent = message;
    errorBox.classList.remove("hidden");
  }
  if (!name) {
    showError("Name must be filled out");
  }

  if (!phone) {
    showError("Phone Number must be filled out");
  }

  if (!email) {
    showError("Email must be filled out");
  }

  if (!message) {
    showError("Message must be entered");
  }
  form.innerHTML = `<div class="text-center space-y-2">
<h3 class="text-x1 font-bold text-pink-600"> Thank you for reaching out, ${name}!</h3>
<p class="text-pink-200"> I will get back to you as soon as possible.</p>
</div>`;
}

document.getElementById("contactForm").addEventListener("submit", validateForm);
