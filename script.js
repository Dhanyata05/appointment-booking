const buttons = document.querySelectorAll("#time-slots button");
const bookBtn = document.getElementById("book-btn");
const confirm = document.getElementById("confirmation");
let selectedSlot = null;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
    selectedSlot = btn.innerText;
  });
});

bookBtn.addEventListener("click", () => {
  const date = document.getElementById("date").value;
  if (date && selectedSlot) {
    confirm.innerText = `✅ Appointment booked for ${date} at ${selectedSlot}`;
  } else {
    confirm.innerText = "❌ Please select both a date and time slot.";
    confirm.style.color = "red";
  }
});

// Dark mode toggle
const toggleBtn = document.getElementById("toggle-dark");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
