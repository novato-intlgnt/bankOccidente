document.addEventListener('DOMContentLoaded', () => {
    const cards = document.getElementById('cardContainer');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let scrollPos = 0;

    const cardWidth = 300 + 24; // ancho + gap (ajusta si cambias en CSS)
    const totalCards = cards.children.length;
    const maxScroll = (totalCards - 1) * cardWidth;

    function setActive(buttonPressed) {
      // Quitar clase azul a todos
      prevBtn.classList.remove('azul');
      prevBtn.classList.add('gris');

      nextBtn.classList.remove('azul');
      nextBtn.classList.add('gris');

      // Añadir clase azul al botón presionado
      buttonPressed.classList.remove('gris');
      buttonPressed.classList.add('azul');
    }

    prevBtn.addEventListener('click', () => {
      scrollPos = Math.max(scrollPos - cardWidth, 0);
      cards.style.transform = `translateX(-${scrollPos}px)`;
      setActive(prevBtn);
    });

    nextBtn.addEventListener('click', () => {
      scrollPos = Math.min(scrollPos + cardWidth, maxScroll);
      cards.style.transform = `translateX(-${scrollPos}px)`;
      setActive(nextBtn);
    });
  });