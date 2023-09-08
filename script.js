
const navbar = document.getElementById('navbar');
const center = document.getElementById('center');
const navElements = document.getElementById('nav-elements');
const contactNav = document.getElementById('contact');
const testimonialNav = document.getElementById('testimonials');
const servicesNav = document.getElementById('services');
const productNav = document.getElementById('products');


let showNavbar = false;

function handleShowNavbar() {
  showNavbar = !showNavbar;
  if (showNavbar) {
    navbar.classList.add('navbar-mobile');
    center.classList.add('clicked');
    navElements.classList.add('active');
  } else {
    navbar.classList.remove('navbar-mobile');
    center.classList.remove('clicked');
    navElements.classList.remove('active');
  }
}

// Add click event listener to the center div
center.addEventListener('click', handleShowNavbar);
//scroll into view
contactNav.addEventListener('click', function (e) {
  e.preventDefault(); 
  const contactSection = document.querySelector('.container_contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
  handleShowNavbar();
});
testimonialNav.addEventListener('click', function (e) {
  e.preventDefault();
  const section3 = document.getElementById('section--3');
  section3.scrollIntoView({ behavior: 'smooth' });
    handleShowNavbar();
});
productNav.addEventListener('click', function (e) {
  e.preventDefault();
  const cardsSection = document.querySelector('.container_cards');
  cardsSection.scrollIntoView({ behavior: 'smooth' });
    handleShowNavbar();
});
servicesNav.addEventListener('click', function (e) {
    e.preventDefault(); 
    const infoSection = document.querySelector('.container_info');
  infoSection.scrollIntoView({ behavior: 'smooth' });
    handleShowNavbar();
});

//slider
const slider = function () {
  // Select all elements with the class 'slide'
  const slides = document.querySelectorAll(".slide");

  // Select navigation buttons and dot container
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  // Initialize variables to keep track of the current slide and the total number of slides
  let curSlide = 0;
  const maxSlide = slides.length;

  // Create dots for each slide
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot dots__dot--active" data-slide="${i}"></button>`
      );
    });
  };
  createDots();

  // Activate the dot corresponding to the current slide
  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };
  activateDot(0);

  // Position all slides side by side using the 'transform' property
  slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
  // This positions slides at 0%, 100%, 200%, 300%, etc.

  // Function to go to a specific slide
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
  goToSlide(0);

  // Function to navigate to the next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = -1;
    }
    curSlide++;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // Function to navigate to the previous slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide;
    }
    curSlide--;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // Event listeners for button clicks
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  // Event listener for keyboard arrow keys
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  });

  // Event listener for dot clicks
  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();

