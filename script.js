/* ============================================
   CHEZ ANTHONY — script.js
   Comportements interactifs du site
   ============================================ */


/* ---- 1. MENU MOBILE ---- */
const burgerBtn  = document.getElementById('burger-btn');
const mobileNav  = document.getElementById('mobile-nav');

burgerBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

// Fermer le menu mobile en cliquant sur un lien
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
  });
});


/* ---- 2. HEADER — ombre au scroll ---- */
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.style.boxShadow = '0 4px 24px rgba(0,0,0,0.15)';
  } else {
    header.style.boxShadow = '0 2px 16px rgba(0,0,0,0.10)';
  }
});


/* ---- 3. BOUTON RETOUR EN HAUT ---- */
const backTop = document.getElementById('back-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backTop.classList.add('visible');
  } else {
    backTop.classList.remove('visible');
  }
});

backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* ---- 4. FILTRES DU MENU ---- */
const filterBtns = document.querySelectorAll('.filter-btn');
const menuCards  = document.querySelectorAll('.menu-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    // Mettre à jour le bouton actif
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cat = btn.getAttribute('data-cat');

    // Afficher / masquer les cartes selon la catégorie
    menuCards.forEach(card => {
      if (cat === 'tous' || card.getAttribute('data-cat') === cat) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});


/* ---- 5. FORMULAIRE CONTACT → WhatsApp ---- */
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', () => {
  const nom = document.getElementById('nom').value.trim();
  const tel = document.getElementById('tel').value.trim();
  const msg = document.getElementById('msg').value.trim();

  if (!nom || !msg) {
    alert('Veuillez remplir votre nom et votre message.');
    return;
  }

  // Construire le message WhatsApp
  let texte = `Bonjour Chez Anthony ! 👋\n\n`;
  texte += `Je m'appelle *${nom}*.\n`;
  if (tel) texte += `Mon numéro : ${tel}\n`;
  texte += `\nMessage :\n${msg}`;

  const url = `https://wa.me/237654795898?text=${encodeURIComponent(texte)}`;
  window.open(url, '_blank');
});


/* ---- 6. ANIMATION D'APPARITION AU SCROLL ---- */
// Ajoute la classe "visible" aux éléments quand ils entrent dans le viewport
const observerOptions = {
  threshold: 0.12
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // on n'anime qu'une fois
    }
  });
}, observerOptions);

// Éléments à animer
document.querySelectorAll(
  '.menu-card, .avis-card, .grillade-category, .stat-item, .contact-item'
).forEach(el => {
  el.classList.add('animate-on-scroll');
  observer.observe(el);
});
