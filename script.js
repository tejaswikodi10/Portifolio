// Example: Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


(function() {
    emailjs.init("YOUR_PUBLIC_KEY_HERE"); // from EmailJS
})();

document.getElementById("contact-form")
.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        this
    )
    .then(function() {
        alert("✅ Message sent successfully!");
    }, function(error) {
        alert("❌ Failed to send message.");
        console.log(error);
    });
});
