const cards = document.querySelectorAll(".card");
const projectCards = document.querySelectorAll(".project-card");
const internshipBoxes = document.querySelectorAll(".internship-box");

cards.forEach((card) => {

  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });

});

projectCards.forEach((project) => {

  project.addEventListener("mouseenter", () => {
    project.style.transform = "scale(1.03)";
  });

  project.addEventListener("mouseleave", () => {
    project.style.transform = "scale(1)";
  });

});

internshipBoxes.forEach((box) => {

  box.addEventListener("mouseenter", () => {
    box.style.transform = "translateY(-8px)";
  });

  box.addEventListener("mouseleave", () => {
    box.style.transform = "translateY(0)";
  });

});

console.log("Professional Portfolio Loaded Successfully!");