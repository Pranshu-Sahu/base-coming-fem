const form = document.getElementById("form");
const email = document.getElementById("email-input");
const ctaMsg = document.querySelector(".cta-msg");
let y = 0;
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
email.addEventListener("input", checkEmail);
function checkEmail(e) {
  if (validateEmail(email.value)) {
    form.classList.add("success");
    form.classList.remove("error");
    y = 1;
  } else {
    y = 0;
    form.classList.add("error");
    form.classList.remove("success");
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  y === 1 && validateForm();
});
function validateForm(e) {
  ctaMsg.innerHTML = ` <div class="text-desaturatedRed">
  <p>Thank you for signing up!</p>
  <p>We hope to share our latest updates with you soon.</p>
</div>`;
}
