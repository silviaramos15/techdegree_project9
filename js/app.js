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
      h3.forEach(h3 => { 
        h3.classList.add('rotateActive');
        });
      section.forEach(section => { 
        section.style.display = 'block';
        });
    } else {
      panel.classList.remove('active');
      h3.forEach(h3 => { 
        h3.classList.remove('rotateActive');
      });
      section.forEach(section => {
        section.style.display = 'none';
         });

    }
  });
};

const panel_1 = document.querySelector('.panel_1');
panel_1.addEventListener('click', e => {
  activateClass(e.target);
});
// const panel_2 = document.querySelector('.panel_2');
// panel_1.addEventListener('click', e => {
//   activateClass(e.target);
// });
// const panel_3 = document.querySelector('.panel_3');
// panel_1.addEventListener('click', e => {
//   activateClass(e.target);
// });