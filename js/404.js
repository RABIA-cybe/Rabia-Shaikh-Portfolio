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