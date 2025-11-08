import { MotionDiv } from '../hooks/useAnimation';
import { Code } from './Icons';

function ProjectCard({ project }) {
  return (
    <MotionDiv
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700/50 transition-all duration-300 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10 flex flex-col h-full"
    >
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-xl font-bold text-white">{project.title}</h4>
        <p className="text-gray-400 mt-2 text-sm flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-gray-700 text-blue-300 text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 border-t border-gray-700 p-4 flex gap-4">
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <Code size={16} />
            Source Code
          </a>
        ) : (
          <span className="bg-gray-700 px-4 py-2 rounded-lg text-sm flex items-center gap-2 opacity-50 cursor-not-allowed text-gray-400">
            <Code size={16} />
            Private Code
          </span>
        )}
      </div>
    </MotionDiv>
  );
}

export default ProjectCard;
