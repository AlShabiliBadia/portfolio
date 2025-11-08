import { MotionSection } from '../hooks/useAnimation';

function Experience({ experienceData }) {
  return (
    <MotionSection
      id="experience"
      className="py-20"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Experience</h2>
      
      <div className="space-y-8">
        {experienceData.map((exp, index) => (
          <div key={index} className="pl-8 relative border-l border-gray-700 py-4">
            <div className="absolute left-[-9px] top-5 w-4 h-4 bg-gray-900 border-2 border-blue-500 rounded-full"></div>
            
            <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
            <p className="text-blue-400 font-medium">{exp.company}</p>
            <p className="text-sm text-gray-500 mb-2">{exp.date}</p>
            
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {exp.points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}

export default Experience;
