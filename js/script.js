/* =====================================================
   📄 FICHIER : Timo portfolio/js/script.js
   📁 À placer dans : Timo portfolio/js/
   Script global — curseur, header scroll, transitions
   ===================================================== */

/* ── ATTENTE DU DOM ── */
document.addEventListener('DOMContentLoaded', () => {

  /* ══════════════════════════════════════════════
     1. CURSEUR PERSONNALISÉ
     ══════════════════════════════════════════════ */
  const curseur = document.querySelector('.curseur-custom');

  if (curseur && window.innerWidth > 768) {
    /* Suivre la position de la souris */
    document.addEventListener('mousemove', (e) => {
      curseur.style.left = e.clientX + 'px';
      curseur.style.top  = e.clientY + 'px';
    });

    /* Agrandir au survol des éléments interactifs */
    const elementsInteractifs = document.querySelectorAll('a, button, .projet__item, .competence__card');
    elementsInteractifs.forEach(el => {
      el.addEventListener('mouseenter', () => curseur.classList.add('agrandi'));
      el.addEventListener('mouseleave', () => curseur.classList.remove('agrandi'));
    });

    /* Masquer si la souris quitte la fenêtre */
    document.addEventListener('mouseleave', () => { curseur.style.opacity = '0'; });
    document.addEventListener('mouseenter', () => { curseur.style.opacity = '1'; });
  }

  /* ══════════════════════════════════════════════
     2. HEADER — TRANSPARENT → SOMBRE AU SCROLL
     ══════════════════════════════════════════════ */
  const header = document.querySelector('.header');

  if (header) {
    const gererScrollHeader = () => {
      if (window.scrollY > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', gererScrollHeader, { passive: true });
    gererScrollHeader(); /* Vérification initiale */
  }

  /* ══════════════════════════════════════════════
     3. MARQUER LE LIEN ACTIF DANS LA NAV
     ══════════════════════════════════════════════ */
  const liensNav = document.querySelectorAll('.nav__lien');
  const cheminActuel = window.location.pathname;

  liensNav.forEach(lien => {
    const href = lien.getAttribute('href');
    if (href && cheminActuel.includes(href.replace('../', '').replace('.html', ''))) {
      lien.classList.add('actif');
    }
    /* Cas spécial : page d'accueil */
    if ((cheminActuel.endsWith('/') || cheminActuel.endsWith('index.html')) && href && href.includes('index')) {
      lien.classList.add('actif');
    }
  });

  /* ══════════════════════════════════════════════
     4. RIDEAU DE TRANSITION ENTRE PAGES (GSAP)
     ══════════════════════════════════════════════ */
  const rideau = document.querySelector('.rideau-transition');

  if (typeof gsap !== 'undefined' && rideau) {

    /* Animation d'ENTRÉE : le rideau monte vers le haut au chargement */
    gsap.set(rideau, { opacity: 1, y: 0 });
    gsap.to(rideau, {
      y: '-100%',
      duration: 0.9,
      ease: 'power3.inOut',
      delay: 0.1,
      onComplete: () => {
        gsap.set(rideau, { opacity: 0, y: 0 });
      }
    });

    /* Intercepter les clics sur les liens de navigation */
    document.querySelectorAll('.nav__lien, .lien-transition').forEach(lien => {
      lien.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        /* Ignorer les ancres et liens vides */
        if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

        e.preventDefault();

        /* Animation de SORTIE : rideau descend et couvre la page */
        gsap.set(rideau, { opacity: 1, y: '100%' });
        gsap.to(rideau, {
          y: '0%',
          duration: 0.7,
          ease: 'power3.inOut',
          onComplete: () => {
            window.location.href = href;
          }
        });
      });
    });
  }

  /* ══════════════════════════════════════════════
     5. INITIALISATION GSAP SCROLLTRIGGER
     ══════════════════════════════════════════════ */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    /* Animation générique fade-in au scroll pour tous les .fade-in */
    const elementsFadeIn = document.querySelectorAll('.fade-in');
    if (elementsFadeIn.length > 0) {
      elementsFadeIn.forEach(el => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        });
      });
    }
  }

});
