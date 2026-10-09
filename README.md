document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-scroll-target]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector(button.dataset.scrollTarget);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const button = form.querySelector("button[type='submit']");
      if (button) {
        button.textContent = "Message Sent";
        button.disabled = true;
      }
      alert("Thank you! Your message has been sent to the dealership.");
      form.reset();
    });
  }
});

