import { MotionSection } from '../hooks/useAnimation';
import ProjectCard from './ProjectCard';

function Projects({ projectsData }) {
  return (
    <MotionSection
      id="projects"
      className="py-20"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Projects</h2>
      
      <div className="flex flex-wrap justify-center gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </MotionSection>
  );
}

export default Projects;
