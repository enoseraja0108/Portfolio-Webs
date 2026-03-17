const textElement = document.getElementById('changing-text');

const roles = [
    "Frontend Expert",
    "Web Application Designer",
    "UI/UX Designer",
    "Video Editor"
];

let currentIndex = 0;

function updateText() {
    textElement.classList.add('wipe-hidden');

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % roles.length;
        textElement.innerText = roles[currentIndex];
        textElement.classList.remove('wipe-hidden');
    }, 600); 
}

setInterval(updateText, 3000);