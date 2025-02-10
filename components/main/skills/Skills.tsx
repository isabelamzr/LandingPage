import { Skill_data } from '@/constants'
import React from 'react'
import SkillDataProvider from '@/components/sub/SkillDataProvider';
import SkillText from '@/components/sub/SkillText';

const Skills = () => {
    return (
      <section
        id="skills"
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-40 py-20 mt-[6rem]"
        style={{ transform: "scale(0.9" }}
      >
        <SkillText />
  
        <div className="flex flex-row justify-around flex-wrap mt-6 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
        </section>
    );
  };
  
  export default Skills;