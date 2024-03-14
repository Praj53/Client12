// navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


  let slideIndex = 1;
  showSlide(slideIndex);

  // Auto slide every 4 seconds
  setInterval(() => {
    moveSlide(1);
  }, 4000);

  function moveSlide(n) {
    showSlide(slideIndex += n);
  }

  function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    const offset = -100 * (slideIndex - 1);
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
  }

  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("inquiry-form").style.display = "block";
    }, 5000); // 5000 milliseconds = 5 seconds
});
 // Function to close the form
 function closeForm() {
  document.getElementById("inquiry-form").style.display = "none";
}