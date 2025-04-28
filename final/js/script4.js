const scene = document.getElementsByClassName("scene")[0];

const makeBubble = ()=>{
    const bubble = document.createElement('div')
    bubble.id = "bubble";

    const size = Math.random() * 30 + 40;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    bubble.style.bottom = `${Math.random() * 20}%`
    bubble.style.left = `${Math.random() * 100}%`
    scene.appendChild(bubble)
    setTimeout(()=>{
        scene.removeChild(bubble)
    }, 6000)
}

setInterval(makeBubble, 200);
