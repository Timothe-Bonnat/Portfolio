'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger-button');
  const overlay = document.getElementById('overlay-menu');
  const closeButton = document.getElementById('overlay-close');
  const cols = document.querySelectorAll('.overlay-menu__col');

  if (!burger || !overlay || !closeButton || cols.length === 0) return;

  const openMenu = () => {
    burger.classList.add('open');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');

    if (typeof gsap !== 'undefined') {
      gsap.set(cols, { y: 120, opacity: 0 });
      gsap.to(cols, {
        y: 0,
        opacity: 1,
        duration: 0.75,
        ease: 'power4.out',
        stagger: 0.08
      });
    }
  };

  const closeMenu = () => {
    burger.classList.remove('open');
    if (typeof gsap !== 'undefined') {
      gsap.to(cols, {
        y: 120,
        opacity: 0,
        duration: 0.45,
        ease: 'power3.in',
        stagger: {
          each: 0.06,
          from: 'end'
        },
        onComplete: () => {
          overlay.classList.remove('open');
          overlay.setAttribute('aria-hidden', 'true');
        }
      });
    } else {
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
    }
  };

  burger.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closeMenu();
  });

  cols.forEach((col) => {
    col.addEventListener('mouseenter', () => {
      const link = col.querySelector('.overlay-menu__link');
      if (link) link.style.transform = 'translateY(-10px) rotate(180deg)';
    });
    col.addEventListener('mouseleave', () => {
      const link = col.querySelector('.overlay-menu__link');
      if (link) link.style.transform = 'translateY(0) rotate(180deg)';
    });
  });

  // Language switcher
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      localStorage.setItem('selectedLang', lang);
      langButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Here you can add code to change content based on lang
      // For now, just toggle active
    });
  });

  // Set initial active based on localStorage
  const savedLang = localStorage.getItem('selectedLang') || 'fr';
  langButtons.forEach(btn => {
    if (btn.getAttribute('data-lang') === savedLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
});
