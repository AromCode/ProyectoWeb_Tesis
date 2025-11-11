// Script simple para mostrar mensaje de confirmación al enviar formulario
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Gracias por tu mensaje. Nos pondremos en contacto pronto.");
  this.reset();
});
