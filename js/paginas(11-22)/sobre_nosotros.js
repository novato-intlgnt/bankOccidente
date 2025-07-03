
  // Obtener la URL actual
  const currentPage = window.location.pathname.split("/").pop();

  // Obtener todos los enlaces
  const links = document.querySelectorAll(".nav-link");

  // Agregar clase 'active' al enlace correspondiente
  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

