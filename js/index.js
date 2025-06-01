
// Select the header element
const header = document.getElementById('header');
const tab0 = document.getElementById('tab-0');
const tab1 = document.getElementById('tab-1');
const tab2 = document.getElementById('tab-2');
const tab3 = document.getElementById('tab-3');
const panel0 = document.getElementById('panel-0');
const panel1 = document.getElementById('panel-1');
const panel2 = document.getElementById('panel-2');
const panel3 = document.getElementById('panel-3');

// Function to add/remove 'scrolled' class based on scroll position
function handleScroll() {
    console.log('Scroll position:', window.scrollY); // Debugging: Check scroll position in console
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        console.log('Class "scrolled" added');
    } else {
        header.classList.remove('scrolled');
        console.log('Class "scrolled" removed');
    }
}

// Listen to the scroll event
window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);
window.addEventListener('DOMContentLoaded', handleScroll);



//Mobile menu
 const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-menu-overlay');


// Functions to disable/enable scroll
function disableScroll() {
  document.body.classList.add('no-scroll');

  // Prevent key scrolling
  window.addEventListener('keydown', preventKeyScroll, { passive: false });

  // Prevent touch and wheel scroll
  window.addEventListener('wheel', preventDefault, { passive: false });
  window.addEventListener('touchmove', preventDefault, { passive: false });
}

function enableScroll() {
  document.body.classList.remove('no-scroll');

  // Re-enable key, touch, and wheel scroll
  window.removeEventListener('keydown', preventKeyScroll);
  window.removeEventListener('wheel', preventDefault);
  window.removeEventListener('touchmove', preventDefault);
}

function preventDefault(e) {
  e.preventDefault();
}

function preventKeyScroll(e) {
  // Prevent arrow keys, page up/down, spacebar, etc.
  const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'PageUp', 'PageDown', 'Home', 'End'];
  if (keys.includes(e.key)) {
    e.preventDefault();
  }
}

//Toggle Mobile menu
  hamburger.addEventListener('click', () => {
    const isMenuOpen = !mobileMenu.classList.contains('translate-x-full');
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('translate-x-full');
    overlay.classList.toggle('hidden');

if (!isMenuOpen) {
    disableScroll();
  } else {
    enableScroll();
  }

  });

  overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.add('translate-x-full');
    overlay.classList.add('hidden');
    enableScroll();
  });

// Close mobile menu when any nav link is clicked
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.add('translate-x-full');
    overlay.classList.add('hidden');
    enableScroll();
  });
});








//Multi type animation

const multiText = document.getElementById('multi-text');
const texts = ["Front-End Developer", "WordPress Developer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150; // Speed in milliseconds

function type() {
    const currentText = texts[textIndex];
    const displayedText = isDeleting
        ? currentText.substring(0, charIndex - 1)
        : currentText.substring(0, charIndex + 1);

    multiText.textContent = displayedText;

    if (!isDeleting) {
        // Typing phase
        if (charIndex < currentText.length) {
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            // Wait before starting to delete
            isDeleting = true;
            setTimeout(type, 2000); // Pause for 2 seconds at full text
        }
    } else {
        // Deleting phase
        if (charIndex > 0) {
            charIndex--;
            setTimeout(type, typingSpeed / 2); // Deleting is faster
        } else {
            // Move to the next text
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 500); // Short pause before typing next text
        }
    }
}

// Start the typing effect on window load
window.addEventListener('DOMContentLoaded', () => {
    // Initiate the typing effect after a brief delay
    setTimeout(type, 500);
});



// Experience panels hide and show
const tabs = [tab0, tab1, tab2, tab3];
const panels = [panel0, panel1, panel2, panel3];

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Hide all panels and remove the active class from all tabs
        panels.forEach((panel, panelIndex) => {
            panel.style.display = panelIndex === index ? 'block' : 'none';
        });

        tabs.forEach((tabItem) => {
            tabItem.classList.remove('active-tab'); // Remove the active class from all tabs
        });

        // Add the active class to the clicked tab
        tab.classList.add('active-tab');
    });
});



// Load the Loading animation

lottie.loadAnimation({
  container: document.getElementById('loader'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './assets/Loading.json'
});

// Wait for window load and a minimum of 5 seconds
window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  const mainContent = document.getElementById('main-content');
  const header = document.getElementById('header-container');
  const siteMain = document.getElementById('hero-div');
  const socialDiv = document.getElementById('social-div');

  // Ensure elements start hidden (We must add these classes in  HTML too)
  header.classList.add('opacity-0');
  siteMain.classList.add('opacity-0');
  socialDiv.classList.add('opacity-0');


  setTimeout(() => {
    preloader.style.transition = 'opacity 0.5s ease';
    preloader.style.opacity = 0;

    setTimeout(() => {
      preloader.style.display = 'none';
      mainContent.classList.remove('hidden');
      mainContent.classList.remove('opacity-0');

      // 1s later: show header
      setTimeout(() => {
        header.classList.remove('opacity-0');
      }, 500);

      // 2s after header: show site-main
      setTimeout(() => {
        siteMain.classList.remove('opacity-0');
      }, 1000);

      // 1s after site-main: show socialDiv
      setTimeout(() => {
        socialDiv.classList.remove('opacity-0');
      }, 2000);

      AOS.init();

    }, 500); // wait for preloader fade-out
  }, 6000); // keep loader for 6 seconds minimum
});







  







// LOAD LOTTIE ANIMATION LAPTOP

  lottie.loadAnimation({
    container: document.getElementById('laptop-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/Laptop.json' 
  });

    lottie.loadAnimation({
    container: document.getElementById('laptop-containerMob'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/LaptopMob.json' 
  });

    lottie.loadAnimation({
    container: document.getElementById('heroGirl'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/4.json' 
  });



  // LOAD LOTTIE ANIMATION GIRL

  const animation = lottie.loadAnimation({
    container: document.getElementById('girl-container'),
    renderer: 'svg',
    loop: false, // Disable continuous loop
    autoplay: true,
    path: 'assets/2.json' // JSON path
  });
  
  animation.addEventListener('complete', () => {
    setTimeout(() => {
      animation.goToAndPlay(0, true); // Replay from beginning
    }, 2000); // 3000ms = 5 seconds
  });

   const animationMob = lottie.loadAnimation({
    container: document.getElementById('girl-container-mob'),
    renderer: 'svg',
    loop: false, // Disable continuous loop
    autoplay: true,
    path: 'assets/2.json' // JSON path
  });
  
  animationMob.addEventListener('complete', () => {
    setTimeout(() => {
      animationMob.goToAndPlay(0, true); // Replay from beginning
    }, 2000); // 3000ms = 5 seconds
  });




 //to send emails setting up emailJS
 (function () {
    emailjs.init("a5dEEBbo8WxabDXSJ"); // your Public Key
  })();
  


function sendEmail(e) {
    e.preventDefault();
  
    emailjs.sendForm('service_p4mhbwo', 'template_pvfw95w', e.target)
      .then(() => {
        Toastify({
          text: "Message sent! I will get back to you shortly.",
          duration: 4000,
          close: true,
          gravity: "top",
          position: "center",
          backgroundColor: "#22c55e",
        }).showToast();
        e.target.reset();
      }, () => {
        Toastify({
          text: "Failed to send message.",
          duration: 4000,
          close: true,
          gravity: "top",
          position: "center",
          backgroundColor: "#ef4444",
        }).showToast();
      });


  }
  

  //To FETCH THE CURRENT YEAR FOR FOOTER
  document.getElementById('copyright-year').textContent = new Date().getFullYear();
