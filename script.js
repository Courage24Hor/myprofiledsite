// Select the toggle button
const toggleBtn = document.querySelector(".theme-toggle");

// When clicked, toggle dark mode
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change the icon from moon to sun
    const icon = toggleBtn.querySelector("i");
    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

    // Save the user's theme preference
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Load saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        document.querySelector(".theme-toggle i").classList.replace("fa-moon", "fa-sun");
    }
});

    // === Fade-in Intersection Observer Animation ===
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = { threshold: 0.2 };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
    

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);

