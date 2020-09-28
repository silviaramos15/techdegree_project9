//Toggle used to expand sections on click
const panels = document.querySelectorAll('.panel');
const div = document.querySelectorAll('.div');

function toggleOpen() {
  this.classList.toggle('open');
  // div.style.display= 'block';
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));

//-------------------------------------
//Create event listener to hide/show info inside the panels on click
// panels.addEventListener('click', () => {
//   div.style.display = 'block';
// });