// WhatsApp link configuration
const waBase = "https://wa.me/971544322462?text=";
document.querySelectorAll(".wa-link").forEach(link => {
  const msg = link.dataset.message || "Hello FM Electronics, I want to order a repair service.";
  link.href = waBase + encodeURIComponent(msg);
});

// Mobile menu functionality
const header = document.getElementById("header");
const nav = document.getElementById("nav");
const menuBtn = document.getElementById("menuBtn");
const menuIcon = document.getElementById("menuIcon");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuIcon.innerHTML = nav.classList.contains("open")
    ? '<use href="#i-close"></use>'
    : '<use href="#i-menu"></use>';
});

// Close menu when links are clicked
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuIcon.innerHTML = '<use href="#i-menu"></use>';
  });
});

// Header scroll effect
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
});

// Intersection observer for reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// FAQ accordion functionality with improved mobile support
document.querySelectorAll(".faq-item").forEach(item => {
  const btn = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    const active = item.classList.contains("active");
    
    // Close all other items
    document.querySelectorAll(".faq-item").forEach(i => {
      i.classList.remove("active");
      i.querySelector(".faq-answer").style.maxHeight = null;
    });
    
    // Open clicked item if not already open
    if (!active) {
      item.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
      
      // Scroll to item on mobile if needed
      if (window.innerWidth <= 768) {
        setTimeout(() => {
          btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      }
    }
  });

  // Ensure keyboard accessibility
  btn.setAttribute('role', 'button');
  btn.setAttribute('tabindex', '0');
  btn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      btn.click();
    }
  });
});

// Prevent layout shift on scroll by adjusting viewport height for mobile keyboards
const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', vh + 'px');

window.addEventListener('resize', () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
});

// Improve touch interactions
document.querySelectorAll('.btn, .card, .chip').forEach(el => {
  el.addEventListener('touchstart', function() {
    this.style.opacity = '0.8';
  });
  el.addEventListener('touchend', function() {
    this.style.opacity = '1';
  });
});
