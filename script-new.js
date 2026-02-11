// Book navigation with flip animation
let currentSpread = 0;
const spreads = document.querySelectorAll('.spread');
const totalSpreads = spreads.length;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentSpreadSpan = document.getElementById('currentSpread');
const totalSpreadsSpan = document.getElementById('totalSpreads');

// Initialize - set z-index for proper stacking
spreads.forEach((spread, index) => {
    spread.style.zIndex = totalSpreads - index;
});

totalSpreadsSpan.textContent = totalSpreads;
showSpread(0);

function showSpread(index) {
    // Update flipped states
    spreads.forEach((spread, i) => {
        if (i < index) {
            // Spreads before current are flipped
            spread.classList.add('flipped');
            spread.classList.remove('active');
        } else if (i === index) {
            // Current spread is active
            spread.classList.remove('flipped');
            spread.classList.add('active');
        } else {
            // Spreads after current are not flipped
            spread.classList.remove('flipped');
            spread.classList.remove('active');
        }
    });
    
    currentSpread = index;
    updateNavigation();
}

function updateNavigation() {
    currentSpreadSpan.textContent = currentSpread + 1;
    prevBtn.disabled = currentSpread === 0;
    nextBtn.disabled = currentSpread === totalSpreads - 1;
}

// Navigation buttons
nextBtn.addEventListener('click', () => {
    if (currentSpread < totalSpreads - 1) {
        showSpread(currentSpread + 1);
    }
});

prevBtn.addEventListener('click', () => {
    if (currentSpread > 0) {
        showSpread(currentSpread - 1);
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        if (currentSpread < totalSpreads - 1) {
            showSpread(currentSpread + 1);
        }
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentSpread > 0) {
            showSpread(currentSpread - 1);
        }
    }
});

// Click on book to flip
const book = document.getElementById('book');
book.addEventListener('click', (e) => {
    const rect = book.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    
    // Click right half = next, click left half = previous
    if (clickX > rect.width / 2) {
        if (currentSpread < totalSpreads - 1) {
            showSpread(currentSpread + 1);
        }
    } else {
        if (currentSpread > 0) {
            showSpread(currentSpread - 1);
        }
    }
});