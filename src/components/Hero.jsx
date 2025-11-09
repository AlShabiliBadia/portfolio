import { MotionSection } from '../hooks/useAnimation';
import { Github, Linkedin, FileDown } from './Icons';

function Hero() {
  return (
    <MotionSection
      id="about"
      className="flex flex-col items-center justify-center text-center min-h-screen py-16"
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-white">Hi, I'm Badiea Al-Shabili</h1>
      <h2 className="text-2xl sm:text-3xl font-medium text-blue-400 mt-2">QA Automation Engineer</h2>
      <p className="max-w-2xl mt-4 text-lg text-gray-300">
        Passionate about building efficient, scalable, and maintainable testing systems. Skilled in Python, Pytest, and Playwright, with hands-on experience in optimizing UI and API test frameworks.
      </p>
      
      <div className="flex flex-wrap gap-4 mt-8 justify-center">
        <a
          href="https://github.com/AlShabiliBadia"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white py-2 px-4 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center gap-2"
        >
          <Github size={20} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/badia-alshabili/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white py-2 px-4 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center gap-2"
        >
          <Linkedin size={20} />
          LinkedIn
        </a>
        <a
          href="https://resume.alshabili.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white py-2 px-4 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center gap-2"
        >
          <FileDown size={20} />
          Download CV
        </a>
      </div>
    </MotionSection>
  );
}

export default Hero;
