function showSuccessPopup(btnContent) {
  const message = `${btnContent} is successful!`;
  const popup = document.getElementById("success-popup");
  popup.querySelector(".success-popup-message").textContent = message;
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
}

document.querySelectorAll(".btn").forEach((btn) => {
  const btnContent = btn.textContent;
  btn.addEventListener("click", function () {
    showSuccessPopup(btnContent);
  });
});
