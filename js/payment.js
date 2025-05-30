document.addEventListener("DOMContentLoaded", async () => {
    const stripe = Stripe("pk_test_XXXXXXXXXXXXXXXXXXXX"); // Ton Stripe public key
    const elements = stripe.elements();
    const card = elements.create("card");
    card.mount("#card-element");

    const form = document.getElementById("payment-form");
    const errorDisplay = document.getElementById("card-error");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const { token, error } = await stripe.createToken(card, {
            name: form.email.value,
            address_zip: form.postal.value,
        });

        if (error) {
            errorDisplay.textContent = error.message;
        } else {
            errorDisplay.textContent = "";
            // Envoie le token au backend ici
            console.log("Received Stripe Token:", token);
        }
    });
});
