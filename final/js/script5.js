const rock = document.getElementById('rock');
const monsterArea = document.getElementById('monster-area');
const scene = document.getElementById('scene');

let isDragging = false;
let over = false; 


rock.addEventListener('click', (e) => {
  isDragging = !isDragging;
  
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    rock.style.left = `${e.clientX - 30}px`;
    rock.style.top = `${e.clientY - 30}px`;
    if (!over && isOverMonster()) {
        over = true; 
        const startDiv = document.getElementsByClassName('start')[0]
        const onSuccesDiv = document.getElementsByClassName('onSuccess')[0]
        startDiv.style.display = 'none'; 
        onSuccesDiv.style.display = 'block';

        for(let i=0; i<3 ; i++){
            const ray = document.createElement('div')
            ray.className = 'overlay'
            ray.style.left = `${10*i}%`
            scene.appendChild(ray)
            
        }
    }
  }
});

function isOverMonster() {
  const rockRect = rock.getBoundingClientRect();
  const monsterRect = monsterArea.getBoundingClientRect();

  return (
    rockRect.left < monsterRect.right &&
    rockRect.right > monsterRect.left &&
    rockRect.top < monsterRect.bottom &&
    rockRect.bottom > monsterRect.top
  );
}
