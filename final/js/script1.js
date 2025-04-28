const blackout = document.getElementById('blackout');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const radius = 300;

  blackout.style.maskImage = `radial-gradient(circle ${radius}px at ${x}px ${y}px, transparent 0%, black 100%)`;
});
