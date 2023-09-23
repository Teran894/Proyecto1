function goHome() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  document.addEventListener("DOMContentLoaded", () => {

    const contactoForm = document.getElementById('contacto-form');

    contactoForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const nombre = document.getElementById("nombre").value;
      const email = document.getElementById("email").value;
      const mensaje = document.getElementById("mensaje").value;
  
      alert('racias por contactarse ' + nombre + '. Le mandare una respuesta a ' + email + ', en refernecia a su mensaje: ' + mensaje);
  
      contactoForm.reset();
    });

  });