document.getElementById("greetButton").addEventListener("click", function () {
    const greeting = document.getElementById("greeting");
    greeting.textContent = "Hello! Thanks for visiting my website.";
    greeting.classList.remove("hidden");
});
