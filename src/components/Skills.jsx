import { MotionSection } from '../hooks/useAnimation';

const skillsCategories = [
  {
    title: "Languages",
    skills: "Python, SQL (MySQL, SQLite, PostgreSQL)"
  },
  {
    title: "Test Automation Frameworks",
    skills: "Playwright, Selenium, Appium, Pytest"
  },
  {
    title: "QA Methodologies",
    skills: "Test Design, API Testing, Regression/Integration/UAT"
  },
  {
    title: "Backend & Core",
    skills: "FastAPI, REST APIs, Data Structures, Algorithms, OOP"
  },
  {
    title: "Developer Tools & CI/CD",
    skills: "Docker, Git, GitHub, Postman, GitHub Actions"
  },
  {
    title: "Familiar With",
    skills: "JavaScript, Java, PHP, Kotlin, Django, Laravel"
  }
];

function Skills() {
  return (
    <MotionSection
      id="skills"
      className="py-20"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsCategories.map((category, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700/50">
            <h3 className="text-blue-400 font-semibold mb-3">{category.title}</h3>
            <p className="text-gray-300 leading-relaxed">{category.skills}</p>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}

export default Skills;
