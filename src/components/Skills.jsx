import { MotionSection } from '../hooks/useAnimation';

const skillsCategories = [
  {
    title: "Languages",
    skills: "Python (Advanced), SQL (PostgreSQL, MySQL), NoSQL (MongoDB) Academic Experience: Java, JavaScript"
  },
  {
    title: "QA Automation & Strategy",
    skills: "Playwright, Selenium, Appium, Pytest, Keyword/Data-Driven Frameworks, Test Architecture"
  },
  {
    title: "Backend Architecture",
    skills: "FastAPI, RabbitMQ, Microservices, System Design, REST APIs"
  },
  {
    title: "AI Engineering",
    skills: "LLM Integration, Instructor (Structured Output), Pydantic Validation"
  },
  {
    title: "DevOps & Tools",
    skills: "Docker Compose, Git, GitHub, GitHub Actions, Postman"
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
