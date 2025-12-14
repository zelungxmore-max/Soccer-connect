// mobile menu placeholder
document.getElementById('mobMenuToggle')?.addEventListener('click',()=>{
  alert('Open/Close nav for mobile – build drawer here if needed');
});

// dynamic year in footer
document.getElementById('yr').textContent = new Date().getFullYear();

// contact form handler (demo only – no backend)
document.getElementById('contactForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  alert('Thank you! This is a demo. Connect your backend or Formspree etc.');
});
});

/* hero banner slideshow */
const slides = document.querySelectorAll('.slide');
let cur = 0;
setInterval(() => {
  slides[cur].classList.remove('active');
  cur = (cur + 1) % slides.length;
  slides[cur].classList.add('active');
}, 5000);
