import React from 'react';
import WorkflowCard from '../../sub/WorkflowCards';

const Workflow = () => {
  return (
    <div className="flex flex-col items-center justify-center -mt-7" id="workflow">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5">
        My Workflow
      </h1>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 mt-10 w-full">
        <WorkflowCard
          src="/ERD-diagram.png"
          title="Building the Foundation: ER Diagram"
          description="Designed a robust MySQL relational database with complex relationships based on client requirements."
        />
        <WorkflowCard
          src="/database.png"
          title="API Development & Security"
          description="Developed a secure RESTful API with Flask, implementing modern architectural patterns for CRUD operations, and CORS integration."
        />
        <WorkflowCard
          videoSrc="/folderstructure.mp4"
          title="Scalable Architecture & Efficient Loading"
          description="Organized folders to improve maintainability, collaboration, and scalability. Separated logic for loading, navigation, and rendering, making the code more modular, enhancing component reusability, sticking to design principles like SOLID."
        />
      </div>

      <div className="w-full mt-10 px-10">
        <WorkflowCard
          videoSrc="/videotest1.mp4"
          title="Optimized Frontend Experience"
          description="This frontend was designed to provide a seamless and intuitive user experience 
          for managing database records. Fully integrated with MySQL, it supports all CRUD operations, 
          including soft delete to prevent accidental data loss. The inclusion of an 
          elegant dark/light mode switch and dynamic UI components enhances usability, scalability, and performance."
        />
      </div>
    </div>
  );
};

export default Workflow;
