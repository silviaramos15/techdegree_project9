
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
  // building the overlay modal for the inner HTML 
const overlay = document.querySelector('.overlay');
const modalContainer = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close')

  // Close the modal
    modalClose.addEventListener('click', () => {
      overlay.classList.add('hidden');
    });

    // FUNCTION TO DISPLAY INFO 

    function displaySkills (id, title, description) {
      const skills =`
      <div class="text-container">
              <h2 class="skill_title">${title}</h2>
              <p class="Description">${description}</p>
              <hr/>
              
      </div>
      `;
      
            // making the overlay visible
      const element = document.getElementById(id);
      element.addEventListener('click', () => { 
      overlay.classList.remove('hidden');
      modalContainer.innerHTML = skills;
      });
      return skills;
    }

    displaySkills ('designer', 'Designer', 'It is all about the user experience with a generous splash of creative juices');
    displaySkills ('optimize', 'Optimize', 'Did you know you could risk losing traffic when a site takes over 2.5-3 seconds to load? Nobody likes to wait, but we can make it less of a pain. I look at the technical performance as the driver of your website.');
    displaySkills ('developer', 'Developer', 'Your dream ideas can become true. I work with my heart to make them real. And if you need some sort of inspiration, let me get to know you to build something beautiful together.');
    displaySkills ('bugs', 'Bugs Fix', 'Jumped into a 404, 500 error or any other sort of bug? Working and learning from my colleagues has tough me to read and understand code to identify current problems or potential issues.');
    displaySkills ('responsive', 'Responsive', '52% of global traffic is generated by mobiles. I build all my pages so that the content displayed adapts to the size of the display window the visitor uses.');
    displaySkills ('tech', 'Technologies', 'HTML5, CSS, SASS, BootStrap, JavaScript, JQuery, JSON, Fetch, Node.js, SQL, Postgress, GIT, APIs, GraphQL...and the list will continue...');

// -------------------------------------------------->



// Display modal for the form

const modalForm = document.querySelector('.modal-content_form');

const displayForm =`
<div class="form-container">
<h2 class="h2Form">Do not be shy and say hi!<h2>
<form method="post" action="send_mail.php">
<div class="flex-form">
<label for="name">Name:</label>
 <input type="text" id="name" name="user_name" placeholder="Required" required>
 </div>
 <div class="flex-form">
 <label for="email">Email Address:</label>
 <input type="email" id="email" name="user_email" placeholder="Required" required>
 </div>
 <div class="flex-form">
<label for="message" class="form-description">Message:</label>
<textarea id="message" name="user_message"></textarea>
</div>
<p><button>Send</button></p>
</form>
</div>
`;

      // making the overlay visible
      const overlayForm = document.querySelector('.overlay_form');
      const formElement = document.getElementById('form');
      formElement.addEventListener('click', () => { 
      overlayForm.classList.remove('hidden_form');
      modalForm.innerHTML = displayForm;
      });
    
       // Close the modal
       const formClose = document.querySelector('.form-close');
       formClose.addEventListener('click', () => {
         overlayForm.classList.add('hidden_form');
       });

    // ------------------------------------------->

    