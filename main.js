document.addEventListener("DOMContentLoaded", () => {

/* Courses */
const courses = [
  {
    name: "Business Analytics (A+)",
    desc: "Data analysis and insights",
    skills: ["EDA", "Analysis"]
  },
  {
    name: "Linear Algebra (A)",
    desc: "Mathematical foundation",
    skills: ["Matrix"]
  },
  {
    name: "Python",
    desc: "Data processing",
    skills: ["Cleaning"]
  }
];

const coursesContainer = document.getElementById("courses-list");

courses.forEach(c => {
  const div = document.createElement("div");
  div.className = "course-card";

  div.innerHTML = `
    <h4>${c.name}</h4>
    <p>${c.desc}</p>
    ${c.skills.map(s => `<span class="tag">${s}</span>`).join("")}
  `;

  coursesContainer.appendChild(div);
});

/* Projects */
const projects = [
  {
    name: "Student Dropout Prediction",
    desc: "76,000+ data, machine learning models",
    list: ["Logistic Regression", "KNN", "Random Forest"]
  },
  {
    name: "Nissan Campus Ambassador",
    desc: "Marketing strategy using data analysis",
    list: ["10+ data sources", "8,000+ views", "Optimization"]
  },
  {
    name: "INPet Platform",
    desc: "Startup project (3rd place)",
    list: ["SWOT", "STP"]
  }
];

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

/* Skills */
const skills = {
  Programming: ["Python", "SQL"],
  Analysis: ["EDA", "Cleaning"],
  ML: ["Decision Tree", "Random Forest"]
};

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
