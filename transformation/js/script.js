$(document).ready(function () {
    $("body").on("click", function (e) {
        const clickSound = $("<audio src = 'water-drip-45622.mp3' autoplay></audio>")
        $("body").append(clickSound);
    
        const size = 360
        for (let i = 0; i <3; i++) {
            const ripple = $("<div class='ripple'></div>");
            const delay = i * 200;
      
         
            ripple.css({
                left: e.pageX + "px",
                top: e.pageY + "px",
                width: `${size - (i*60)}px`,
                height: `${size - (i*60)}px`,
                animationDelay: `${delay}ms`,
            });
      
            $("body").append(ripple);
      
            setTimeout(() => {
                ripple.remove();
                clickSound.remove()
            }, 1700 + delay);
          }
        });
    
  });
  