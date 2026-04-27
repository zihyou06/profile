document.addEventListener("DOMContentLoaded", () => {

const projects = [
  {
    name: "Student Dropout Prediction",
    desc: "76,000+ data, ML models",
    list: ["Logistic Regression", "KNN", "Random Forest"]
  },
  {
    name: "INPet Platform",
    desc: "Startup competition (3rd place)",
    list: ["SWOT", "STP"]
  },
  {
    name: "Nissan Campus Ambassador",
    desc: "Marketing & data-driven strategy",
    list: ["10+ data sources", "8,000+ views", "Content optimization"]
  }
];

const skills = {
  Programming: ["Python", "SQL"],
  Tools: ["Excel"],
  ML: ["Decision Tree", "Random Forest"]
};

/* PROJECTS */
const projectContainer = document.getElementById("projects-list");

projects.forEach(p => {
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <h3>${p.name}</h3>
    <p>${p.desc}</p>
    <ul>${p.list.map(i => `<li>${i}</li>`).join("")}</ul>
  `;

  projectContainer.appendChild(div);
});

/* SKILLS */
const skillsContainer = document.getElementById("skills-list");

for (let key in skills) {
  const div = document.createElement("div");
  div.className = "skill-card";

  div.innerHTML = `
    <h4>${key}</h4>
    ${skills[key].map(s => `<span class="tag">${s}</span>`).join("")}
  `;

  skillsContainer.appendChild(div);
}

});
