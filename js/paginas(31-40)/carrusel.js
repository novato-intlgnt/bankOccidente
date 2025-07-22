// CARRUSEL FUNCIONALIDAD
  const cardContainer = document.getElementById("cardContainer");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const cardWidth = 740; // ancho estimado de cada card + gap
  let scrollX = 0;

  prevButton.addEventListener("click", () => {
    scrollX = Math.max(scrollX - cardWidth, 0);
    cardContainer.style.transform = `translateX(-${scrollX}px)`;
  });

  nextButton.addEventListener("click", () => {
    const maxScroll = cardContainer.scrollWidth - cardContainer.clientWidth;
    scrollX = Math.min(scrollX + cardWidth, maxScroll);
    cardContainer.style.transform = `translateX(-${scrollX}px)`;
  });