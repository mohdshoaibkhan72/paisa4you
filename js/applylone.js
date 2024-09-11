let currentStep = 1;
const totalSteps = 2;

document.getElementById("nextBtn").addEventListener("click", function () {
  const currentForm = document.getElementById(`step${currentStep}`);
  if (!validateForm(currentForm)) return;

  if (currentStep < totalSteps) {
    document.getElementById(`step${currentStep}`).classList.remove("active");
    currentStep++;
    document.getElementById(`step${currentStep}`).classList.add("active");
  }
  updateButtons();
});

document.getElementById("prevBtn").addEventListener("click", function () {
  if (currentStep > 1) {
    document.getElementById(`step${currentStep}`).classList.remove("active");
    currentStep--;
    document.getElementById(`step${currentStep}`).classList.add("active");
  }
  updateButtons();
});

function updateButtons() {
  document.getElementById("prevBtn").disabled = currentStep === 1;
  document.getElementById("nextBtn").innerText =
    currentStep === totalSteps ? "Submit" : "Next";
}

function validateForm(section) {
  const inputs = section.querySelectorAll("input");
  let valid = true;

  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      input.classList.add("is-invalid");
      valid = false;
    } else {
      input.classList.remove("is-invalid");
    }
  });

  return valid;
}

function updateButtons() {
  document.getElementById("prevBtn").disabled = currentStep === 1;
  document.getElementById("nextBtn").innerText =
    currentStep === totalSteps ? "Submit" : "Next";
  // Show submit button on the final step
  document
    .getElementById("submitBtn")
    .classList.toggle("d-none", currentStep < totalSteps);
}
