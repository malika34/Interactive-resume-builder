const resumeData = {
  fullname: "Malik Musadiq Ahmed",
  image: "assets/images/profile.png",
  phoneno: "+923340125672",
  email: "musadiqa34@gmail.com",
  address: "Clifton, Punjab Colony, Karachi, Pakistan",
  designation: "Software Engineer",
  summary:
    "Experienced Software Engineer with a passion for creating innovative solutions.",
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "TailwindCss",
  ],
  achievements: [
    {
      title: "Best Employee Award",
      description: "Awarded for outstanding performance.",
    },
  ],
  educations: [
    {
      school: "Virtual University of Pakistan",
      degree: "BSc SE",
      city: "Karachi",
      startDate: "2024-Present",
      graduationDate: "2028",
      description: "Wll Graduated.",
    },
  ],
  experiences: [
    {
      title: "Frontend Developer",
      organization: "Tech Corp",
      location: "Clifton",
      startDate: "2022",
      endDate: "2024-present",
      description: "Developed UIs.",
    },
  ],
  projects: [
    {
      title: "Portfolio Website",
      link: "https://malik-personal-portfolio-customcss.vercel.app/",
      description: "A personal portfolio website.",
    },
  ],
};

// DOM Elements
const nameDsp = document.getElementById("fullname_dsp") as HTMLElement;
const imageDsp = document.getElementById("image_dsp") as HTMLImageElement;
const phonenoDsp = document.getElementById("phoneno_dsp") as HTMLElement;
const emailDsp = document.getElementById("email_dsp") as HTMLElement;
const addressDsp = document.getElementById("address_dsp") as HTMLElement;
const designationDsp = document.getElementById(
  "designation_dsp"
) as HTMLElement;
const summaryDsp = document.getElementById("summary_dsp") as HTMLElement;
const achievementsDsp = document.getElementById(
  "achievements_dsp"
) as HTMLElement;
const experiencesDsp = document.getElementById(
  "experiences_dsp"
) as HTMLElement;
const educationsDsp = document.getElementById("educations_dsp") as HTMLElement;
const projectsDsp = document.getElementById("projects_dsp") as HTMLElement;
const skillsToggleBtn = document.getElementById(
  "skills-toggle-btn"
) as HTMLButtonElement;
const skillsDsp = document.getElementById("skills_dsp") as HTMLElement;

// Populate Data
nameDsp.textContent = resumeData.fullname;
imageDsp.src = resumeData.image;
phonenoDsp.textContent = resumeData.phoneno;
emailDsp.textContent = resumeData.email;
addressDsp.textContent = resumeData.address;
designationDsp.textContent = resumeData.designation;
summaryDsp.textContent = resumeData.summary;

// Populate Achievements
achievementsDsp.innerHTML = resumeData.achievements
  .map(
    (achievement) =>
      `<li><strong>${achievement.title}:</strong> ${achievement.description}</li>`
  )
  .join("");

// Populate Experiences
experiencesDsp.innerHTML = resumeData.experiences
  .map(
    (experience) =>
      `<div>
        <h4>${experience.title}</h4>
        <p>${experience.organization}, ${experience.location}</p>
        <p>${experience.startDate} - ${experience.endDate}</p>
        <p>${experience.description}</p>
      </div>`
  )
  .join("");

// Populate Education
educationsDsp.innerHTML = resumeData.educations
  .map(
    (education) =>
      `<div>
        <h4>${education.degree}</h4>
        <p>${education.school}, ${education.city}</p>
        <p>${education.startDate} - ${education.graduationDate}</p>
        <p>${education.description}</p>
      </div>`
  )
  .join("");

// Populate Projects
projectsDsp.innerHTML = resumeData.projects
  .map(
    (project) =>
      `<li><strong>${project.title}</strong>: <a href="${project.link}" target="_blank">${project.link}</a> - ${project.description}</li>`
  )
  .join("");

// Populate Skills
skillsDsp.innerHTML = resumeData.skills
  .map((skill) => `<li>${skill}</li>`)
  .join("");

// Toggle Skills Visibility
skillsToggleBtn.addEventListener("click", () => {
  // Toggle the display of the skills section
  if (skillsDsp.style.display === "none" || skillsDsp.style.display === "") {
    skillsDsp.style.display = "block";
    skillsToggleBtn.textContent = "Hide Skills";
  } else {
    skillsDsp.style.display = "none";
    skillsToggleBtn.textContent = "Show Skills";
  }
});
