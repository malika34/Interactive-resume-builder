var resumeData = {
    fullname: "Malik Musadiq Ahmed",
    image: "assets/images/profile.png",
    phoneno: "+923340125672",
    email: "musadiqa34@gmail.com",
    address: "Clifton, Punjab Colony, Karachi, Pakistan",
    designation: "Software Engineer",
    summary: "Experienced Software Engineer with a passion for creating innovative solutions.",
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
var nameDsp = document.getElementById("fullname_dsp");
var imageDsp = document.getElementById("image_dsp");
var phonenoDsp = document.getElementById("phoneno_dsp");
var emailDsp = document.getElementById("email_dsp");
var addressDsp = document.getElementById("address_dsp");
var designationDsp = document.getElementById("designation_dsp");
var summaryDsp = document.getElementById("summary_dsp");
var achievementsDsp = document.getElementById("achievements_dsp");
var experiencesDsp = document.getElementById("experiences_dsp");
var educationsDsp = document.getElementById("educations_dsp");
var projectsDsp = document.getElementById("projects_dsp");
var skillsToggleBtn = document.getElementById("skills-toggle-btn");
var skillsDsp = document.getElementById("skills_dsp");
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
    .map(function (achievement) {
    return "<li><strong>".concat(achievement.title, ":</strong> ").concat(achievement.description, "</li>");
})
    .join("");
// Populate Experiences
experiencesDsp.innerHTML = resumeData.experiences
    .map(function (experience) {
    return "<div>\n        <h4>".concat(experience.title, "</h4>\n        <p>").concat(experience.organization, ", ").concat(experience.location, "</p>\n        <p>").concat(experience.startDate, " - ").concat(experience.endDate, "</p>\n        <p>").concat(experience.description, "</p>\n      </div>");
})
    .join("");
// Populate Education
educationsDsp.innerHTML = resumeData.educations
    .map(function (education) {
    return "<div>\n        <h4>".concat(education.degree, "</h4>\n        <p>").concat(education.school, ", ").concat(education.city, "</p>\n        <p>").concat(education.startDate, " - ").concat(education.graduationDate, "</p>\n        <p>").concat(education.description, "</p>\n      </div>");
})
    .join("");
// Populate Projects
projectsDsp.innerHTML = resumeData.projects
    .map(function (project) {
    return "<li><strong>".concat(project.title, "</strong>: <a href=\"").concat(project.link, "\" target=\"_blank\">").concat(project.link, "</a> - ").concat(project.description, "</li>");
})
    .join("");
// Populate Skills
skillsDsp.innerHTML = resumeData.skills
    .map(function (skill) { return "<li>".concat(skill, "</li>"); })
    .join("");
// Toggle Skills Visibility
skillsToggleBtn.addEventListener("click", function () {
    // Toggle the display of the skills section
    if (skillsDsp.style.display === "none" || skillsDsp.style.display === "") {
        skillsDsp.style.display = "block";
        skillsToggleBtn.textContent = "Hide Skills"; // Change button text to "Hide Skills"
    }
    else {
        skillsDsp.style.display = "none";
        skillsToggleBtn.textContent = "Show Skills"; // Change button text to "Show Skills"
    }
});
