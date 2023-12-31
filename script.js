const yearContainer = document.querySelector('.year-container');
const digit3 = document.querySelector('.digit-3');
const digit4 = document.querySelector('.digit-4');

setTimeout(() => {
  digit3.style.opacity = 1; // Make 3 visible for a brief moment
  setTimeout(() => {
    digit3.style.display = 'none';
    digit4.style.display = 'block';
  }, 500); // Delay replacing 3 with 4
}, 1000); // Adjust delay as needed
