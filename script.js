/*********************
 * RESPONSIVE WARNING *
 *********************/
const responsiveWarning = document.getElementById("responsive-warning");
const responsiveDesign = false;
if (!responsiveDesign && window.innerWidth <= 768) {
    responsiveWarning.classList.add("show");
}

/***********************
 * MODE TOGGLE BEHAVIOR *
 ***********************/
const toggleModeBtn = document.getElementById("toggle-mode-btn");
const portfolioLink = document.getElementById("portfolio-link");
const body = document.body;

function applyMode(mode) {
    body.classList.remove("light-mode", "dark-mode");
    body.classList.add(mode);
    if (mode === "dark-mode") {
        toggleModeBtn.style.color = "rgb(245, 245, 245)";
        toggleModeBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
        portfolioLink.style.color = "rgb(245, 245, 245)";
        responsiveWarning.style.backgroundColor = "rgb(2, 4, 8)";
    } else {
        toggleModeBtn.style.color = "rgb(2, 4, 8)";
        toggleModeBtn.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
        portfolioLink.style.color = "rgb(2, 4, 8)";
        responsiveWarning.style.backgroundColor = "rgb(245, 245, 245)";
    }
}

let savedMode = localStorage.getItem("mode");
if (savedMode === null) {
    savedMode = "light-mode";
}
applyMode(savedMode);

toggleModeBtn.addEventListener("click", function () {
    let newMode = body.classList.contains("light-mode") ? "dark-mode" : "light-mode";
    applyMode(newMode);
    localStorage.setItem("mode", newMode);
});