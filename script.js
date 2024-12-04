if (document.body.classList.contains("light-theme")) {
  document.body.style.background = "linear-gradient(135deg, #f1f1f1, #ffffff)";
  document.body.style.color = "#333";
  document.querySelectorAll("header, .hero, .about, .skills-container, .experience, .projects, .contact").forEach(section => {
    section.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
  });
  document.querySelectorAll(".cta-btn, .skill .title, footer a").forEach(element => {
    element.style.color = "#6f2a92"; // Roxo mais escuro para contraste
  });
  document.querySelectorAll(".cta-btn").forEach(button => {
    button.style.backgroundColor = "#8e44ad";
    button.style.color = "#fff";
  });
} else {
  // Tema escuro
  document.body.style.background = "linear-gradient(135deg, #4b0082, #000000)";
  document.body.style.color = "#fff";
  document.querySelectorAll("header, .hero, .about, .skills-container, .experience, .projects, .contact").forEach(section => {
    section.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  });
  document.querySelectorAll(".cta-btn, .skill .title, footer a").forEach(element => {
    element.style.color = "#8e44ad";
  });
  document.querySelectorAll(".cta-btn").forEach(button => {
    button.style.backgroundColor = "#6f2a92";
    button.style.color = "#fff";
  });
}
