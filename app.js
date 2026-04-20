import { getRandomColor } from './utils.js';

const btn = document.getElementById("discoBtn");

btn.addEventListener("click", () => {
    // A LOOP that changes colors 50 times
    for (let i = 0; i < 50; i++) {
        // We use a Timeout so it doesn't happen all at once!
        setTimeout(() => {
            const newColor = getRandomColor(); // Calling our Function
            document.body.style.backgroundColor = newColor;
        }, i * 100); // This makes the "animation" timing
    }
});
