document.addEventListener("DOMContentLoaded", () => {

/* ===== DATA ===== */

const courses = [
  {
    name: "Business Analytics",
    description: "Data analysis and insights",
    skills: ["EDA", "Analysis"]
  },
  {
    name: "Linear Algebra",
    description: "Math foundation",
    skills: ["Matrix"]
  }
];

const projects = [
  {
    name: "Student Dropout Prediction",
    description: "76,000+ data, ML models",
    highlights: ["Logistic Regression", "KNN", "Random Forest"]
  },
  {
    name: "INPet Platform",
    description: "Startup competition (3rd place)",
    highlights: ["SWOT", "STP"]
  }
];

const skills = {
  Programming: ["Python", "SQL"],
  Tools: ["Excel"],
  ML: ["Decision Tree", "Random Forest"]
};

/* ===== COURSES ===== */

const coursesContainer = document.getElementById("courses-list");

courses.forEach(c => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <h3>${c.name}</h3>
    <p>${c.description}</p>
    ${c.skills.map(s => `<span class="tag">${s}</span>`).join("")}
  `;
  coursesContainer.appendChild(div);
});

/* ===== PROJECTS ===== */

const projectsContainer = document.getElementById("projects-list");

projects.forEach(p => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <h3>${p.name}</h3>
    <p>${p.description}</p>
    <ul>${p.highlights.map(h => `<li>${h}</li>`).join("")}</ul>
  `;
  projectsContainer.appendChild(div);
});

/* ===== SKILLS ===== */

const skillsContainer = document.getElementById("skills-list");

for (let key in skills) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <h3>${key}</h3>
    ${skills[key].map(s => `<span class="tag">${s}</span>`).join("")}
  `;
  skillsContainer.appendChild(div);
}

/* ===== Scroll Animation ===== */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(30px)";
  sec.style.transition = "0.6s";
  observer.observe(sec);
});

});
