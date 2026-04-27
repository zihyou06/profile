// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

/* ===== DATA ===== */

const courses = [
  {
    name: "Business Analytics",
    skills: ["Data Analysis", "Excel"],
    description: "Learned to analyze business data and derive actionable insights."
  },
  {
    name: "Linear Algebra",
    skills: ["Matrix Operations"],
    description: "Built mathematical foundations for analytical thinking."
  },
  {
    name: "Information Management",
    skills: ["Data Organization"],
    description: "Developed skills in managing and structuring information."
  },
  {
    name: "International Finance",
    skills: ["Financial Analysis"],
    description: "Understood basic global finance concepts."
  }
];

const projects = [];

const skills = {
  Programming: [],
  "AI / ML": [],
  Web: [],
  Tools: ["Excel"]
};

/* ===== RENDER COURSES ===== */

const coursesContainer = document.getElementById("courses-list");

courses.forEach(course => {
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <div class="card-title">${course.name}</div>
    <div class="card-text">${course.description}</div>
    <div>
      ${course.skills.map(skill => `<span class="tag">${skill}</span>`).join("")}
    </div>
  `;

  coursesContainer.appendChild(div);
});

/* ===== RENDER PROJECTS ===== */

const projectsContainer = document.getElementById("projects-list");

if (projects.length === 0) {
  projectsContainer.innerHTML = `<p class="card-text">Coming soon.</p>`;
}

/* ===== RENDER SKILLS ===== */

const skillsContainer = document.getElementById("skills-list");

for (let category in skills) {
  if (skills[category].length === 0) continue;

  const div = document.createElement("div");
  div.className = "skills-category";

  div.innerHTML = `
    <h3>${category}</h3>
    <div>
      ${skills[category].map(skill => `<span class="tag">${skill}</span>`).join("")}
    </div>
  `;

  skillsContainer.appendChild(div);
}