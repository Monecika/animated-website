document.addEventListener("mousemove", (event) => {
    const eyes = document.querySelectorAll(".eye");
  
    eyes.forEach((eye, index) => {
      const rect = eye.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;
  
      let angle, x, y;
      const distance = Math.min(10, rect.width / 4);
  
      if (index === 0) {
        angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);
        x = Math.cos(angle) * distance;
        y = Math.sin(angle) * distance;
      } else if (index === 1) {
        angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX) + Math.PI;
        x = Math.cos(angle) * distance;
        y = Math.sin(angle) * distance;
      } else if (index === 2) {
        angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX) + Math.PI / 4;
        x = Math.cos(angle) * distance;
        y = Math.sin(angle) * distance;
      } else {
        angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX) - Math.PI / 4;
        x = Math.cos(angle) * distance;
        y = Math.sin(angle) * distance;
      }
  
      const pupil = eye.querySelector(".pupil");
      pupil.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
  