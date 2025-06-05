
document.addEventListener("DOMContentLoaded", async () => {
    const stripe = Stripe("pk_test_XXXXXXXXXXXXXXXXXXXX");

    // Crée un PaymentIntent sur ton backend — ici on simule la réponse
    const clientSecret = await fetch("navy-keen-art.glitch.me/create-subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 100 }), // en cents = $1
    })
        .then(res => res.json())
        .then(data => data.clientSecret);

    const appearance = { theme: 'stripe' }; // tu peux customiser ici
    const elements = stripe.elements({ clientSecret, appearance });

    // Email field (Link Authentication)
    const linkAuthenticationElement = elements.create("linkAuthentication");
    linkAuthenticationElement.mount("#link-authentication-element");

    // Full payment form
    const paymentElement = elements.create("payment");
    paymentElement.mount("#payment-element");

    const form = document.getElementById("payment-form");
    const errorDisplay = document.getElementById("card-error");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "https://your-site.com/confirmation",
            },
        });

        if (error) {
            errorDisplay.textContent = error.message;
        } else {
            errorDisplay.textContent = "";
        }
    });
});

