// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

/* ===== DATA ===== */

const courses = [
  {
    name: "Business Analytics (A+)",
    skills: ["Data Analysis", "EDA"],
    description: "Analyzed business data and generated insights."
  },
  {
    name: "Linear Algebra (A)",
    skills: ["Matrix", "Logic Thinking"],
    description: "Built strong analytical foundations."
  },
  {
    name: "Python",
    skills: ["Data Processing"],
    description: "Used for data cleaning and analysis."
  }
];

const projects = [
  {
    name: "Student Dropout Prediction Model",
    description: "Analyzed 76,000+ student data and built ML models.",
    highlights: [
      "Logistic Regression, KNN, Decision Tree, Random Forest",
      "EDA & data cleaning",
      "Model evaluation (Accuracy, Precision, Recall)"
    ]
  },
  {
    name: "INPet Pet Care Platform",
    description: "Startup project - 3rd place in competition.",
    highlights: [
      "SWOT & STP analysis",
      "Product feature design",
      "User targeting & positioning"
    ]
  },
  {
    name: "Nissan Campus Ambassador",
    description: "Analyzed youth market and optimized content strategy.",
    highlights: [
      "10+ data sources",
      "8,000+ views content",
      "Data-driven marketing"
    ]
  }
];

const skills = {
  Programming: ["Python", "SQL"],
  "Data Analysis": ["EDA", "Data Cleaning"],
  "AI / ML": ["Logistic Regression", "KNN", "Decision Tree", "Random Forest"],
  Tools: ["Excel"],
  Language: ["English (TOEIC 865)", "Chinese"]
};

/* ===== RENDER COURSES ===== */

const coursesContainer = document.getElementById("courses-list");

courses.forEach(course => {
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <div class="card-title">${course.name}</div>
    <div>${course.description}</div>
    <div>
      ${course.skills.map(s => `<span class="tag">${s}</span>`).join("")}
    </div>
  `;

  coursesContainer.appendChild(div);
});

/* ===== RENDER PROJECTS ===== */

const projectsContainer = document.getElementById("projects-list");

projects.forEach(project => {
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <div class="card-title">${project.name}</div>
    <div>${project.description}</div>
    <ul>
      ${project.highlights.map(h => `<li>${h}</li>`).join("")}
    </ul>
  `;

  projectsContainer.appendChild(div);
});

/* ===== RENDER SKILLS ===== */

const skillsContainer = document.getElementById("skills-list");

for (let category in skills) {
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <div class="card-title">${category}</div>
    <div>
      ${skills[category].map(s => `<span class="tag">${s}</span>`).join("")}
    </div>
  `;

  skillsContainer.appendChild(div);
}
