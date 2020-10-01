
// Active classes to achieve: 
// --- opening/closing panels
// --- rotate headers
// --- show/hide content per section

const panels = document.querySelectorAll(".panel");
panels.forEach(panel => {
  panel.addEventListener("click", e => {
    let activePanel = document.querySelector(".active");
    activePanel.classList.remove("active");
    e.target.closest(".panel").classList.toggle("active");
   
  });
});

