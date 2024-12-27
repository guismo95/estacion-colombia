const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

emailjs.init("TU_USER_ID");

document.getElementById("reservationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.send("service_fdovjd7", "template_ieu2pjv", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }).then(
        function (response) {
            alert("Reserva enviada exitosamente!");
        },
        function (error) {
            alert("Ocurrió un error. Inténtalo nuevamente.");
        }
    );
});

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});
