//Toggle used to expand sections on click
//---- activate/remove transitions on the h3
//---- show/hide section



const activateClass = clicked => {
  const panels = document.querySelectorAll('.panel');
  const h3 = document.getElementsByTagName('h3');
  const section = document.querySelectorAll('.sections');
  panels.forEach(panel => {
    if (panel === clicked) {
      panel.classList.add('active');
      h3.classList.add('rotateActive');
      section.style.display = 'block';
    } else {
      panel.classList.remove('active');
      h3.classList.remove('rotateActive');
      section.style.display = 'none';

    }
  });
};

const panel_1 = document.querySelector('.panel_1');
panel_1.addEventListener('click', e => {
  activateClass(e.target);
});