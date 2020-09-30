
//  ------------------OPTION ONE------------------

// // Function to rotate the header
// function rotateHeader (index) {
//     let h3 = document.querySelectorAll('h3')[index];
//     h3.classList.toggle('rotateActive');
// }

// //Function to display content
// function content (index) {
//     let sections = document.querySelectorAll('.sections')[index];
//     sections.classList.toggle('hidden');
//     sections.classList.toggle('show');
// };

// //Function to expand div element
// function expand (index) {
//     let panel = document.querySelectorAll('.panel')[index];
//     panel.classList.toggle('active');
// }



// // Event listeners
// const panel_1 = document.querySelector('.panel_1');
// panel_1.addEventListener('click', e => {
//   rotateHeader(0);
//   content(0);
//   expand(0);
// });

// const panel_2 = document.querySelector('.panel_2');
// panel_2.addEventListener('click', e => {
//   rotateHeader(1);
//   content(1);
//   expand(1);
// });

// const panel_3 = document.querySelector('.panel_3');
// panel_3.addEventListener('click', e => {
//   rotateHeader(2);
//   content(2);
//   expand(2);
// });





//  ------------------OPTION TWO------------------


// function rotateHeader(e) {
//     let h3 = document.querySelectorAll('h3');
//     h3.forEach(h3 => h3.classList.remove('rotateActive'));
//     e.target.classList.toggle('rotateActive');
//     console.log(e.target);
// }

// const panels = document.querySelectorAll('.panel');
// panels.forEach(panel => panel.addEventListener('click', rotateHeader));



//  ------------------OPTION THREE------------------

// let h3 = document.querySelectorAll('h3');
// for (let i = 0; i < h3.length; i++) {
//     h3[i].addEventListener('click', function() {
//         let current = document.getElementsByClassName('rotateActive');
//         current[0].className = current[0].className.replace('rotateActive', '');
//         this.className += 'rotateActive';
//     });
// }




//  ------------------OPTION FOUR------------------



// const rotateHeader = clicked => {
//     const h3 = document.querySelectorAll('.panel h3');
//     h3.forEach(header => {
//         if (header === clicked) {
//             header.classList.toggle('rotateActive');
//         } else {
//             header.classList.remove('rotateActive')
//         }
//     });
// }

// const panel_1 = document.querySelector('.panel_1');
// panel_1.addEventListener('click', e => {
//     rotateHeader(e.target);
// })