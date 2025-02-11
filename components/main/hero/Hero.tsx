import React from 'react'
import HeroContent from '@/components/sub/HeroContent'

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
        <video 
        autoPlay
        muted
        loop
        className='rotate-180 absolute top-[-280px] left-0 z-[1] w-full h-full object-cover'
        playsInline
        >
            <source src='/blackhole.webm' type='video/webm' />
            
            Your browser does not support the video tag.
        </video>

   <HeroContent />
      
    </div>
  )
}

export default Hero