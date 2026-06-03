/* =====================================================
   📄 FICHIER : Timo portfolio/js/i18n.js
   📁 À placer dans : Timo portfolio/js/
   Système d'internationalisation (FR/EN)
   ===================================================== */

const translations = {
  fr: {
    // Header & Navigation
    brand: 'Timothé',
    nav_home: 'Accueil',
    nav_projets: 'Projets',
    nav_apropos: 'À propos',
    nav_competences: 'Compétences',
    nav_contact: 'Contact',

    // Hero Section (index.html)
    hero_title_1: 'TIMOTHÉ',
    hero_title_2: 'BONNAT',
    hero_year: 'Portfolio · 2025',
    hero_subtitle_line1: 'Étudiant en Communication',
    hero_subtitle_line2: '& Marketing Digital — Ynov',
    hero_subtitle_line3: 'En recherche d\'alternance',
    hero_btn: 'Voir les projets',
    hero_scroll: 'Scroll',

    // Projects Section (index.html)
    projects_label: 'Sélection de travaux',
    projects_title: 'MES<br>PROJETS',
    projects_intro: 'Du branding à l\'UX/UI, du motion à l\'affiche —<br>faites défiler pour découvrir.',
    
    project_01_num: '01 — Maquette Web',
    project_01_title: 'ETHIK<br>WEAR',
    project_01_category: 'Web · Maquette',
    
    project_02_num: '02 — Adobe Photoshop',
    project_02_title: 'AFFICHE<br>SUPER HÉROS',
    project_02_category: 'Adobe Photoshop',
    
    project_03_num: '03 — UX/UI Design',
    project_03_title: 'UNIK',
    project_03_category: 'Design · Prototype',
    
    project_04_num: '04 — Print',
    project_04_title: 'AFFICHE<br>ÉVÉNEMENT',
    project_04_category: 'Print · Affichage',
    
    project_05_num: '05 — Motion',
    project_05_title: 'MOTION<br>DESIGN',
    project_05_category: 'Animation · Vidéo',

    project_link: 'Voir le projet',

    // Pages - A Propos
    apropos_label: 'À propos',
    apropos_title: 'TIMOTHÉ<br>BONNAT',
    apropos_subtitle: 'Étudiant Ynov · Communication & Marketing Digital',
    apropos_bio: 'Passionné par le design graphique, la communication visuelle et le marketing digital, je suis actuellement en 1ère année à Ynov. Je suis activement en recherche d\'une alternance en communication et marketing digital pour mettre en pratique mes compétences et continuer à progresser au sein d\'une équipe créative.',
    apropos_cta_btn: 'Me contacter',

    // Skills Section (a-propos.html)
    skills_label: 'Outils & Savoir-faire',
    skills_title: 'COMPÉTENCES',
    
    skill_1_name: 'Adobe Illustrator',
    skill_1_desc: 'Création vectorielle, logotypes, affiches, chartes graphiques.',
    
    skill_2_name: 'Adobe Photoshop',
    skill_2_desc: 'Retouche photo, montage, création de visuels pour le digital.',
    
    skill_3_name: 'Figma',
    skill_3_desc: 'UX/UI design, wireframes, prototypes interactifs, design graphique.',
    
    skill_4_name: 'Notion',
    skill_4_desc: 'Organisation de projets, bases de données, documentation.',
    
    skill_5_name: 'Diagramme de Gantt',
    skill_5_desc: 'Planification de projets, suivi des étapes et des délais.',
    
    skill_6_name: 'Communication',
    skill_6_desc: 'Stratégie éditoriale, gestion de réseaux sociaux, copywriting.',

    // Education Section (a-propos.html)
    education_label: 'Parcours',
    education_badge: 'En cours',
    education_year: '2024 — ···',
    education_school: 'Ynov Campus',
    education_program: 'Bachelor 1 — Communication & Marketing Digital',

    // CTA Section (a-propos.html)
    apropos_cta_text: 'ENVIE DE COLLABORER ?',
    apropos_cta_button: 'Discutons-en',

    // Pages - Projets
    projets_label: 'Portfolio',
    projets_title: 'Projets',

    projets_p1_num: '01',
    projets_p1_category: 'Maquette Web',
    projets_p1_title: 'ETHIKWEAR',
    projets_p1_desc: 'Maquette e-commerce pour Ethikwear, une marque de vêtements éco-responsables. Premier projet réalisé en 1ère année à Ynov.',

    projets_p2_num: '02',
    projets_p2_category: 'Adobe Photoshop',
    projets_p2_title: 'AFFICHE SUPER HÉROS',
    projets_p2_desc: 'Création d\'une affiche super héros avec Adobe Photoshop.',

    projets_p3_num: '03',
    projets_p3_category: 'UX/UI Design',
    projets_p3_title: 'UNIK',
    projets_p3_desc: 'Conception d\'un prototype interactif et wireframes sur Figma.',

    projets_p4_num: '04',
    projets_p4_category: 'Print & Affichage',
    projets_p4_title: 'AFFICHE ÉVÉNEMENT',
    projets_p4_desc: 'Design d\'affiches print pour un événement culturel étudiant.',

    projets_p5_num: '05',
    projets_p5_category: 'Motion',
    projets_p5_title: 'MOTION DESIGN',
    projets_p5_desc: 'Animation graphique pour une présentation de marque en mouvement.',

    projets_p6_num: '06',
    projets_p6_category: 'Branding',
    projets_p6_title: 'IDENTITÉ VISUELLE',
    projets_p6_desc: 'Charte graphique et système d\'identité pour une marque fictive.',

    // Pages - Contact
    contact_label: 'Contact',
    contact_title: 'PARLONS-<br>EN',
    contact_available: 'Disponible pour une alternance',
    contact_email: 'bonnattimothe@gmail.com',
    
    contact_linkedin: 'LinkedIn',
    contact_behance: 'Behance',

    contact_form_title: 'Envoyer un message',
    contact_form_name_label: 'Nom',
    contact_form_name_placeholder: 'Votre nom',
    contact_form_email_label: 'Email',
    contact_form_email_placeholder: 'votre@email.com',
    contact_form_message_label: 'Message',
    contact_form_message_placeholder: 'Votre message…',
    contact_form_submit: 'Envoyer',
    contact_form_success: 'Message envoyé ! Je vous répondrai rapidement.',

    // Pages
    page_title_home: 'Portfolio',
    page_title_projets: 'Projets',
    page_title_apropos: 'À propos',
    page_title_contact: 'Contact',

    // Page détail — Ethikwear
    ethikwear_num: '01 — Maquette Web',
    ethikwear_titre: 'ETHIKWEAR',
    ethikwear_categorie: 'Web · Maquette',
    ethikwear_desc_1: 'Dans le cadre de notre première année à <strong>Ynov Campus</strong>, nous avons conçu de A à Z la maquette d\'un site e-commerce pour <strong>Ethikwear</strong>, une marque fictive de vêtements éco-responsables. Ce projet de groupe entièrement autonome a démarré par le développement de l\'idée et la définition du positionnement de la marque, avant de passer par toutes les étapes d\'un processus de design complet.',
    ethikwear_desc_2: 'Nous avons commencé par une phase de recherche et de cadrage : analyse de la cible, étude des tendances du secteur éco-responsable et définition des besoins utilisateurs. On a ensuite travaillé sur la direction artistique du projet, choix de la palette de couleurs, de la typographie et de l\'identité visuelle, pour construire une interface cohérente avec les valeurs de la marque.',
    ethikwear_desc_3: 'La conception UX a suivi, avec la réalisation de wireframes, l\'architecture de navigation, les fiches produits et le parcours d\'achat complet. Des tests utilisateurs ont été menés pour valider les choix effectués et affiner l\'expérience avant d\'aboutir aux maquettes UI finales, réalisées sur <strong>Figma</strong>.',
    ethikwear_desc_4: 'Ce projet nous a permis de maîtriser l\'ensemble du processus de conception d\'une interface digitale, de l\'idée initiale jusqu\'au rendu visuel final, en passant par chaque étape clé du design thinking.',

    // Page détail — Affiche Super Héros
    affiche_num: '02 — Adobe Photoshop',
    affiche_titre: 'AFFICHE SUPER HÉROS',
    affiche_categorie: 'Illustration · Print',
    affiche_desc: 'Création d\'une affiche super héros réalisée avec <strong>Adobe Photoshop</strong>. Travail sur la composition, le traitement d\'image, les effets lumineux et la typographie pour donner vie à un univers graphique fort et percutant.',

    // Commun aux pages projet
    projet_retour: '← Retour aux projets',
  },

  en: {
    // Header & Navigation
    brand: 'Timothé',
    nav_home: 'Home',
    nav_projets: 'Projects',
    nav_apropos: 'About',
    nav_competences: 'Skills',
    nav_contact: 'Contact',

    // Hero Section (index.html)
    hero_title_1: 'TIMOTHÉ',
    hero_title_2: 'BONNAT',
    hero_year: 'Portfolio · 2025',
    hero_subtitle_line1: 'Communication',
    hero_subtitle_line2: '& Digital Marketing Student — Ynov',
    hero_subtitle_line3: 'Looking for an internship',
    hero_btn: 'View projects',
    hero_scroll: 'Scroll',

    // Projects Section (index.html)
    projects_label: 'Selection of works',
    projects_title: 'MY<br>PROJECTS',
    projects_intro: 'From branding to UX/UI, from motion to posters —<br>scroll to discover.',
    
    project_01_num: '01 — Web Mockup',
    project_01_title: 'ETHIK<br>WEAR',
    project_01_category: 'Web · Mockup',
    
    project_02_num: '02 — Adobe Photoshop',
    project_02_title: 'AFFICHE<br>SUPER HÉROS',
    project_02_category: 'Adobe Photoshop',
    
    project_03_num: '03 — UX/UI Design',
    project_03_title: 'UNIK',
    project_03_category: 'Design · Prototype',
    
    project_04_num: '04 — Print',
    project_04_title: 'EVENT<br>POSTER',
    project_04_category: 'Print · Display',
    
    project_05_num: '05 — Motion',
    project_05_title: 'MOTION<br>DESIGN',
    project_05_category: 'Animation · Video',

    project_link: 'View project',

    // Pages - A Propos
    apropos_label: 'About',
    apropos_title: 'TIMOTHÉ<br>BONNAT',
    apropos_subtitle: 'Ynov Student · Communication & Digital Marketing',
    apropos_bio: 'Passionate about graphic design, visual communication and digital marketing, I am currently in my 1st year at Ynov. I am actively seeking an internship in communication and digital marketing to apply my skills and continue to grow within a creative team.',
    apropos_cta_btn: 'Contact me',

    // Skills Section (a-propos.html)
    skills_label: 'Tools & Know-how',
    skills_title: 'SKILLS',
    
    skill_1_name: 'Adobe Illustrator',
    skill_1_desc: 'Vector creation, logos, posters, brand guidelines.',
    
    skill_2_name: 'Adobe Photoshop',
    skill_2_desc: 'Photo retouching, compositing, digital visuals creation.',
    
    skill_3_name: 'Figma',
    skill_3_desc: 'UX/UI design, wireframes, interactive prototypes, graphic design.',
    
    skill_4_name: 'Notion',
    skill_4_desc: 'Project organization, databases, documentation.',
    
    skill_5_name: 'Gantt Chart',
    skill_5_desc: 'Project planning, milestone tracking, deadline management.',
    
    skill_6_name: 'Communication',
    skill_6_desc: 'Editorial strategy, social media management, copywriting.',

    // Education Section (a-propos.html)
    education_label: 'Journey',
    education_badge: 'In progress',
    education_year: '2024 — ···',
    education_school: 'Ynov Campus',
    education_program: 'Bachelor 1 — Communication & Digital Marketing',

    // CTA Section (a-propos.html)
    apropos_cta_text: 'WANT TO COLLABORATE?',
    apropos_cta_button: 'Let\'s talk about it',

    // Pages - Projets
    projets_label: 'Portfolio',
    projets_title: 'Projects',

    projets_p1_num: '01',
    projets_p1_category: 'Web Mockup',
    projets_p1_title: 'ETHIKWEAR',
    projets_p1_desc: 'E-commerce mockup for Ethikwear, an eco-responsible clothing brand. First project completed in 1st year at Ynov.',

    projets_p2_num: '02',
    projets_p2_category: 'Adobe Photoshop',
    projets_p2_title: 'SUPER HERO POSTER',
    projets_p2_desc: 'Super hero poster creation with Adobe Photoshop.',

    projets_p3_num: '03',
    projets_p3_category: 'UX/UI Design',
    projets_p3_title: 'UNIK',
    projets_p3_desc: 'Interactive prototype and wireframes design on Figma.',

    projets_p4_num: '04',
    projets_p4_category: 'Print & Display',
    projets_p4_title: 'EVENT POSTER',
    projets_p4_desc: 'Print poster design for a student cultural event.',

    projets_p5_num: '05',
    projets_p5_category: 'Motion',
    projets_p5_title: 'MOTION DESIGN',
    projets_p5_desc: 'Graphic animation for a brand presentation in motion.',

    projets_p6_num: '06',
    projets_p6_category: 'Branding',
    projets_p6_title: 'VISUAL IDENTITY',
    projets_p6_desc: 'Brand guidelines and identity system for a fictional brand.',

    // Pages - Contact
    contact_label: 'Contact',
    contact_title: "LET'S<br>TALK",
    contact_available: 'Available for an internship',
    contact_email: 'bonnattimothe@gmail.com',
    
    contact_linkedin: 'LinkedIn',
    contact_behance: 'Behance',

    contact_form_title: 'Send a message',
    contact_form_name_label: 'Name',
    contact_form_name_placeholder: 'Your name',
    contact_form_email_label: 'Email',
    contact_form_email_placeholder: 'your@email.com',
    contact_form_message_label: 'Message',
    contact_form_message_placeholder: 'Your message…',
    contact_form_submit: 'Send',
    contact_form_success: 'Message sent! I will reply quickly.',

    // Pages
    page_title_home: 'Portfolio',
    page_title_projets: 'Projects',
    page_title_apropos: 'About',
    page_title_contact: 'Contact',

    // Page détail — Ethikwear
    ethikwear_num: '01 — Web Mockup',
    ethikwear_titre: 'ETHIKWEAR',
    ethikwear_categorie: 'Web · Mockup',
    ethikwear_desc_1: 'As part of our first year at <strong>Ynov Campus</strong>, we designed from scratch the mockup of an e-commerce website for <strong>Ethikwear</strong>, a fictional eco-responsible clothing brand. This fully autonomous group project started with developing the idea and defining the brand\'s positioning, before going through all the stages of a complete design process.',
    ethikwear_desc_2: 'We started with a research and scoping phase: target analysis, study of trends in the eco-responsible sector and definition of user needs. We then worked on the artistic direction of the project, choosing the colour palette, typography and visual identity, to build an interface consistent with the brand\'s values.',
    ethikwear_desc_3: 'The UX design phase followed, with wireframes, navigation architecture, product pages and the complete purchase journey. User tests were conducted to validate the choices made and refine the experience before arriving at the final UI mockups, created in <strong>Figma</strong>.',
    ethikwear_desc_4: 'This project allowed us to master the entire process of designing a digital interface, from the initial idea to the final visual output, covering every key stage of design thinking.',

    // Page détail — Affiche Super Héros
    affiche_num: '02 — Adobe Photoshop',
    affiche_titre: 'SUPER HERO POSTER',
    affiche_categorie: 'Illustration · Print',
    affiche_desc: 'Creation of a super hero poster made with <strong>Adobe Photoshop</strong>. Work on composition, image processing, lighting effects and typography to bring a strong and impactful graphic universe to life.',

    // Commun aux pages projet
    projet_retour: '← Back to projects',
  }
};

// Fonction pour obtenir une traduction
function t(key, lang = getCurrentLanguage()) {
  const keys = key.split('.');
  let value = translations[lang];
  
  for (let k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
  }
  
  return value || key;
}

// Obtenir la langue actuelle
function getCurrentLanguage() {
  return localStorage.getItem('lang') || 'fr';
}

// Définir la langue
function setLanguage(lang) {
  if (translations[lang]) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    applyTranslations(lang);
    updateLanguageButtons(lang);
  }
}

// Appliquer les traductions à la page
function applyTranslations(lang) {
  // Traduire tous les éléments avec l'attribut data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = t(key, lang);
    
    // Vérifier si c'est un attribut ou du contenu
    if (el.getAttribute('data-i18n-attr')) {
      const attr = el.getAttribute('data-i18n-attr');
      el.setAttribute(attr, translation);
    } else {
      // Pour les éléments avec des balises BR, utiliser innerHTML
      if (translation.includes('<')) {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    }
  });

  // Mettre à jour le titre de la page si présent
  const titleKey = document.body.getAttribute('data-page-title');
  if (titleKey) {
    const pageTitle = t(`page_title_${titleKey}`, lang);
    document.title = `7B — ${pageTitle}`;
  }
}

// Mettre à jour le style des boutons de langue
function updateLanguageButtons(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });
}

// Initialiser les event listeners des boutons de langue
function initLanguageButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
}

// Initialiser à l'ouverture de la page
document.addEventListener('DOMContentLoaded', () => {
  const currentLang = getCurrentLanguage();
  initLanguageButtons();
  updateLanguageButtons(currentLang);
  applyTranslations(currentLang);
});
