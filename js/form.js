const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

// Met à jour les placeholders dynamiquement (après updateLanguage)
function updatePlaceholders(lang) {
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", async (e) => {
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

    formMessage.textContent = translations[lang]["contact-sending"];
    formMessage.className = "";

    const formData = new FormData(form);

    try {
        const response = await fetch("https://messagesender.taskflowgen.com/kibtech/messages.php", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            formMessage.textContent = translations[lang]["contact-success"];
            formMessage.className = "success";
            form.reset();
        } else {
            formMessage.textContent = result.message || translations[lang]["contact-error-generic"];
            formMessage.className = "error";
        }
    } catch (error) {
        formMessage.textContent = translations[lang]["contact-error-network"] || "Erreur de connexion.";
        formMessage.className = "error";
    }
});

// Met à jour aussi les placeholders au changement de langue
function updateFormLanguage(lang) {
    updateLanguage(lang);
    updatePlaceholders(lang);
    formMessage.textContent = "";
}

toggleButton.addEventListener("click", () => {
    const newLang = currentLang === "en" ? "fr" : "en";
    updateFormLanguage(newLang);
    startCountdown(newLang);
});

document.addEventListener("DOMContentLoaded", () => {
    updateFormLanguage(currentLang);
    startCountdown(currentLang);
});
