

function createBubble() {
    const bubblesContainer = document.getElementsByClassName('bubbles')[0];

    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const size = Math.random() * 30 + 40;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    bubble.style.right = `${Math.random() * 100}%`;

    

    bubblesContainer.appendChild(bubble);
    setTimeout(() => {
        bubble.remove();
    }, 5000);
}
setInterval(createBubble, 1000);
