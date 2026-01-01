function validateForm(event) {
  event.preventDefault();

  const form = document.forms["myForm"];
  const name = form["name"].value.trim();
  const email = form["email"].value.trim();
  const message = form["message"].value.trim();
  const phone = form["phone"].value.trim();

  const errorBox = document.getElementById("formError");
  let errors = [];

  if (!name) errors.push("Name must be filled out");
  if (!phone) errors.push("Phone Number must be filled out");
  if (!email) errors.push("Email must be filled out");
  if (!message) errors.push("Message must be entered");

  if (errors.length > 0) {
    errorBox.innerHTML = errors.join("<br>");
    errorBox.classList.remove("hidden");
    return; // Stop execution if there are errors
  }

  // Clear any previous errors
  errorBox.classList.add("hidden");

  // Show thank-you message
  form.innerHTML = `
    <div class="text-center space-y-2">
      <h3 class="text-xl font-bold text-pink-600">
        Thank you for reaching out, ${name}!
      </h3>
      <p class="text-pink-200">I will get back to you as soon as possible.</p>
    </div>
  `;
}

document.getElementById("contactForm").addEventListener("submit", validateForm);
