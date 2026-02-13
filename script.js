/*********************
 * RESPONSIVE WARNING *
 *********************/
const responsiveWarning = document.getElementById("responsive-warning");
const responsiveDesign = false;
if (!responsiveDesign && window.innerWidth <= 768) {
    responsiveWarning.classList.add("show");
}


/*********************
 * FLIP SOUND LOGIC  *
 *********************/
const flipSound = document.getElementById("flip-sound");

// Play flip sound for all pages
const pageCheckboxes = document.querySelectorAll('input[type="checkbox"][id^="page"]');
pageCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            flipSound.currentTime = 0;
            flipSound.play().catch(e => console.log("Sound blocked:", e));
        }
    });
});

// Cover flip
const coverCheckbox = document.getElementById("cover_checkbox");
coverCheckbox.addEventListener("change", () => {
    if (coverCheckbox.checked) {
        flipSound.currentTime = 0;
        flipSound.play().catch(e => console.log("Sound blocked:", e));
    }
});
