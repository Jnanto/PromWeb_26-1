/* ================================================
   GIECOM – Semillero de Investigación en Sistemas
   script.js  |  Vanilla JavaScript
   ================================================ */

'use strict';

/* ─── 1. AOS – Animate on Scroll ─── */
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 80,
});

/* ─── 2. Lightbox2 Config ─── */
lightbox.option({
  resizeDuration: 600,
  wrapAround: true,
  albumLabel: 'Imagen %1 de %2',
  fadeDuration: 500,
  imageFadeDuration: 500,
  positionFromTop: 80,
  disableScrolling: true,
});

/* ─── 3. Navbar scroll effect ─── */
const mainNav = document.getElementById('mainNav');

function handleNavScroll() {
  mainNav.classList.toggle('scrolled', window.scrollY > 60);
}
window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll();

/* ─── 4. Active nav-link on scroll ─── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}
window.addEventListener('scroll', setActiveLink, { passive: true });

/* ─── 5. Close mobile nav on link click ─── */
const navCollapse = document.getElementById('navMenu');
const navbarToggler = document.querySelector('.navbar-toggler');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navCollapse.classList.contains('show') && navbarToggler) {
      navbarToggler.click();
    }
  });
});

/* ─── 6. Smooth scroll ─── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  });
});

/* ─── 7. Animated counter ─── */
function animateCounter(el) {
  const target = +el.dataset.target;
  const start = performance.now();
  const duration = 1800;
  (function update(now) {
    const ease = 1 - Math.pow(1 - Math.min((now - start) / duration, 1), 4);
    el.textContent = Math.round(ease * target);
    if (ease < 1) requestAnimationFrame(update);
  })(start);
}
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-number').forEach(el => counterObserver.observe(el));

/* ─── 8. Floating Particles with GIECOM colors ─── */
(function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const colors = [
    'rgba(26,58,143,0.7)',    /* Azul marino */
    'rgba(212,18,23,0.55)',   /* Rojo */
    'rgba(245,196,0,0.5)',    /* Dorado */
    'rgba(74,108,196,0.5)',   /* Azul claro */
  ];

  const count = window.innerWidth < 768 ? 18 : 35;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    const size = Math.random() * 7 + 2;
    p.style.cssText = `
      width:${size}px;
      height:${size}px;
      left:${Math.random() * 100}%;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      animation-delay:-${Math.random() * 12}s;
      animation-duration:${Math.random() * 15 + 10}s;
      filter:blur(${size > 5 ? 1 : 0}px);
    `;
    container.appendChild(p);
  }
})();

/* ─── 9. Product filter tabs ─── */
const filterBtns = document.querySelectorAll('.filter-btn');
const productItems = document.querySelectorAll('.product-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    productItems.forEach(item => {
      if (filter === 'all' || item.dataset.type === filter) {
        item.classList.remove('hidden');
        item.style.animation = 'none';
        void item.offsetWidth;
        item.style.animation = 'fadeInItem 0.4s ease forwards';
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

/* ─── 10. Contact form ─── */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const submitBtn = document.getElementById('submitBtn');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const msg = document.getElementById('contactMsg').value.trim();

    if (!name || !email || !msg) {
      ['contactName', 'contactEmail', 'contactMsg'].forEach(id => {
        const f = document.getElementById(id);
        if (!f.value.trim()) {
          f.style.borderColor = '#d41217';
          f.style.animation = 'shake 0.4s ease';
          setTimeout(() => { f.style.animation = ''; f.style.borderColor = ''; }, 500);
        }
      });
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';

    setTimeout(() => {
      submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Enviado!';
      submitBtn.style.background = 'linear-gradient(135deg,#10b981,#059669)';
      formSuccess.style.display = 'block';
      contactForm.reset();
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Enviar Mensaje</span> <i class="fa-solid fa-paper-plane"></i>';
        submitBtn.style.background = '';
        formSuccess.style.display = 'none';
      }, 4000);
    }, 1600);
  });
}

/* ─── 11. Back to Top ─── */
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop && backToTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });
backToTop && backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ─── 12. Keyframes injection ─── */
(function injectStyles() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInItem {
      from { opacity:0; transform:translateY(12px); }
      to   { opacity:1; transform:translateY(0); }
    }
    @keyframes shake {
      0%,100%{ transform:translateX(0); }
      20%    { transform:translateX(-8px); }
      40%    { transform:translateX(8px); }
      60%    { transform:translateX(-5px); }
      80%    { transform:translateX(5px); }
    }
    @keyframes pulseGlow {
      0%,100%{ box-shadow:0 0 0 0 rgba(212,18,23,0.45); }
      50%    { box-shadow:0 0 0 12px rgba(212,18,23,0); }
    }
  `;
  document.head.appendChild(style);
  const heroCta = document.querySelector('.btn-primary-custom');
  if (heroCta) heroCta.style.animation = 'pulseGlow 2.5s ease infinite';
})();

/* ─── 13. Event card entrance ─── */
const eventCards = document.querySelectorAll('.event-card');
const cardObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${i * 80}ms`;
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
eventCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease, border-color 0.3s, box-shadow 0.3s';
  cardObserver.observe(card);
});

/* ─── 14. Download button feedback ─── */
document.querySelectorAll('.btn-download').forEach(btn => {
  btn.title = 'Descargar PDF (simulado)';
  btn.addEventListener('click', e => {
    e.preventDefault();
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Descargado';
    setTimeout(() => { btn.innerHTML = orig; }, 1800);
  });
});
