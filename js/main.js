const translations = {
    en: {
        // Header
        headline: "Speak French in 3 Months with Our Natural Learning Method – Start Today for Just $1!",
        intro: "Experience our exclusive Baby Learning Method, trusted by over 500 learners across Canada.",
        "join-btn": "Join Now for Just $1",

        // Included Section
        "included-title": "What's Included",
        "trial-title": "What You Get for Just $1",
        "trial-1": "✅ 1 full month of French classes – online or in-person",
        "trial-2": "✅ 24/7 access to our learning platform",
        "trial-3": "✅ Step-by-step video, audio, and interactive lessons",
        "trial-4": "✅ Personalized coaching from certified instructors",
        "trial-5": "✅ Official certificate after completing the 3-month program",

        // Why This Works Section
        "why-title": "Why This Method Works",
        "why-1": "✔️ You listen before you learn grammar",
        "why-2": "✔️ You repeat daily in real-life situations",
        "why-3": "✔️ You progress at your own pace",
        "why-4": "✔️ You start speaking from the first weeks",

        // Testimonial Section
        "testimonial-title": "What Our Students Say",
        "testimonial-1": "“I had never succeeded in learning a language… until now. After one month, I could understand my coworkers!”",
        "testimonial-2": "“The $1 offer convinced me to try. Now, I’m chatting in French with my neighbors after just 6 weeks!”",

        // Why Choose Us Cards
        "why-us-title": "Why Choose Us?",
        "card-1-title": "Flexible & Online",
        "card-1-text": "Learn anytime, anywhere with both mobile and desktop access.",
        "card-2-title": "Real Support",
        "card-2-text": "Weekly sessions with expert instructors and personalized coaching.",
        "card-3-title": "Simple Approach",
        "card-3-text": "Our Baby Learning Method focuses on natural acquisition, not grammar.",
        "card-4-title": "No Risk",
        "card-4-text": "Try it for $1 — no obligation, no hidden fees.",

        // Start Section
        "start-title": "Start Today for Only $1",
        "start-text": "Try it risk-free. We believe in the power of our program. If you’re not satisfied, you’ll receive a full refund within 7 days – no questions asked.",
        "start-btn": "Start Now – $1 Trial",

        // Time translations
        time_days: "d",
        time_hours: "h",
        time_minutes: "m",
        time_seconds: "s",
        "contact-title": "Contact Us",
        "contact-name-label": "Name",
        "contact-name-placeholder": "Enter your full name",
        "contact-email-label": "Email",
        "contact-email-placeholder": "Enter your email address",
        "contact-message-label": "Message",
        "contact-message-placeholder": "Write your message here",
        "contact-submit-btn": "Send",
        "contact-error-required": "Please fill out all fields.",
        "contact-error-email": "Please enter a valid email address.",
        "contact-success": "Thank you! Your message has been sent."
    },
    fr: {
        // Header
        headline: "Parlez français en 3 mois grâce à notre méthode naturelle – Commencez aujourd'hui pour seulement 1 $ !",
        intro: "Découvrez notre méthode exclusive d'apprentissage comme un bébé, approuvée par plus de 500 apprenants à travers le Canada.",
        "join-btn": "Commencez maintenant pour seulement 1 $",

        // Included Section
        "included-title": "Ce qui est inclus",
        "trial-title": "Ce que vous obtenez pour seulement 1 $",
        "trial-1": "✅ 1 mois complet de cours de français – en ligne ou en personne",
        "trial-2": "✅ Accès 24/7 à notre plateforme d’apprentissage",
        "trial-3": "✅ Leçons vidéo, audio et interactives étape par étape",
        "trial-4": "✅ Coaching personnalisé par des instructeurs certifiés",
        "trial-5": "✅ Certificat officiel après avoir complété les 3 mois",

        // Why This Works Section
        "why-title": "Pourquoi cette méthode fonctionne",
        "why-1": "✔️ Vous écoutez avant d’apprendre la grammaire",
        "why-2": "✔️ Vous répétez quotidiennement dans des situations réelles",
        "why-3": "✔️ Vous progressez à votre propre rythme",
        "why-4": "✔️ Vous commencez à parler dès les premières semaines",

        // Testimonial Section
        "testimonial-title": "Ce que disent nos étudiants",
        "testimonial-1": "« Je n'avais jamais réussi à apprendre une langue… jusqu'à maintenant. Après un mois, je comprenais mes collègues ! »",
        "testimonial-2": "« L'offre à 1 $ m’a convaincu d’essayer. Maintenant, je parle avec mes voisins en français après seulement 6 semaines ! »",

        // Why Choose Us Cards
        "why-us-title": "Pourquoi nous choisir ?",
        "card-1-title": "Flexible et en ligne",
        "card-1-text": "Apprenez quand vous voulez, où que vous soyez, sur mobile ou ordinateur.",
        "card-2-title": "Un vrai soutien",
        "card-2-text": "Séances hebdomadaires avec des instructeurs experts et coaching personnalisé.",
        "card-3-title": "Approche simple",
        "card-3-text": "Notre méthode d’apprentissage comme un bébé repose sur l’acquisition naturelle.",
        "card-4-title": "Sans risque",
        "card-4-text": "Essayez pour 1 $ — sans engagement, sans frais cachés.",

        // Start Section
        "start-title": "Commencez aujourd'hui pour seulement 1 $",
        "start-text": "Essayez sans risque. Nous croyons en l'efficacité de notre programme. Si vous n’êtes pas satisfait, vous serez remboursé dans les 7 jours – sans questions.",
        "start-btn": "Commencer maintenant – Essai à 1 $",

        // Time translations
        time_days: "j",
        time_hours: "h",
        time_minutes: "m",
        time_seconds: "s",
        "contact-title": "Contactez-nous",
        "contact-name-label": "Nom",
        "contact-name-placeholder": "Entrez votre nom complet",
        "contact-email-label": "Email",
        "contact-email-placeholder": "Entrez votre adresse email",
        "contact-message-label": "Message",
        "contact-message-placeholder": "Écrivez votre message ici",
        "contact-submit-btn": "Envoyer",
        "contact-error-required": "Veuillez remplir tous les champs.",
        "contact-error-email": "Veuillez entrer une adresse email valide.",
        "contact-success": "Merci ! Votre message a été envoyé."
    }
};

let currentLang = "en";

// Formulaire
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

// Bouton de changement de langue
const toggleButton = document.getElementById("lang-toggle");

// ------------------ MISE À JOUR DES TEXTES ------------------
function updateLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    toggleButton.textContent = lang === "en" ? "FR" : "EN";
    currentLang = lang;
}

function updatePlaceholders(lang) {
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

function updateFormLanguage(lang) {
    updateLanguage(lang);
    updatePlaceholders(lang);
    if (formMessage) formMessage.textContent = "";
}

// ------------------ FORMULAIRE ------------------
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const lang = currentLang;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            formMessage.textContent = translations[lang]["contact-error-required"];
            formMessage.className = "";
            return;
        }

        if (!validateEmail(email)) {
            formMessage.textContent = translations[lang]["contact-error-email"];
            formMessage.className = "";
            return;
        }

        formMessage.textContent = translations[lang]["contact-success"];
        formMessage.className = "success";
        form.reset();
    });
}

// ------------------ COMPTE À REBOURS ------------------
const countdownDuration = 2 * 24 * 60 * 60; // 2 jours
const STORAGE_KEY = "countdownEndTime";
let countdownIntervalId = null;

function startCountdown(lang = "en") {
    let endTime = localStorage.getItem(STORAGE_KEY);
    const now = Date.now();

    if (!endTime || now > endTime) {
        endTime = now + countdownDuration * 1000;
        localStorage.setItem(STORAGE_KEY, endTime);
    } else {
        endTime = parseInt(endTime, 10);
    }

    const timerElement = document.getElementById("timer");
    if (!timerElement) return;

    if (countdownIntervalId) {
        clearInterval(countdownIntervalId);
    }

    function updateTimer() {
        const currentTime = Date.now();
        let diff = Math.floor((endTime - currentTime) / 1000);

        if (diff <= 0) {
            endTime = Date.now() + countdownDuration * 1000;
            localStorage.setItem(STORAGE_KEY, endTime);
            diff = countdownDuration;
        }

        const days = Math.floor(diff / (24 * 60 * 60));
        const hours = Math.floor((diff % (24 * 60 * 60)) / 3600);
        const minutes = Math.floor((diff % 3600) / 60);
        const seconds = diff % 60;

        timerElement.textContent = `${days}${translations[lang].time_days} ${hours}${translations[lang].time_hours} ${minutes}${translations[lang].time_minutes} ${seconds}${translations[lang].time_seconds}`;
    }

    updateTimer();
    countdownIntervalId = setInterval(updateTimer, 1000);
}

// ------------------ INITIALISATION ------------------
document.addEventListener("DOMContentLoaded", () => {
    updateFormLanguage(currentLang);
    startCountdown(currentLang);
});

// ------------------ BOUTON DE LANGUE ------------------
if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        const newLang = currentLang === "en" ? "fr" : "en";
        updateFormLanguage(newLang);
        startCountdown(newLang);
    });
}
