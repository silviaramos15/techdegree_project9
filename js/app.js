
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
// --------------------
// Arrows on orange panel

const arrowRight = document.querySelector('.right');
const arrowleft = document.querySelector('.left');
const intro = document.querySelector('.intro');
const skills = document.querySelector('.skills');

arrowRight.addEventListener('click', () => {
intro.style.display = 'none';
skills.style.display = 'block';
arrowRight.style.display = 'none';
arrowleft.style.display = 'inline-block';
})

arrowleft.addEventListener('click', () => {
intro.style.display = 'block';
skills.style.display = 'none';
arrowRight.style.display = 'inline-block';
arrowleft.style.display = 'none';
})
// --------------------
