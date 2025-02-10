import Contact from "@/components/main/contact/Contact";
import Encryption from "@/components/main/encryption/Encryption";
import Hero from "@/components/main/hero/Hero";
import Navbar from "@/components/main/navbar/Navbar";
import Skills from "@/components/main/skills/Skills";
import Workflow from "@/components/main/workflow/Workflow"


export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col h-[850px] gap-20'>
    
      <Hero />
      <Navbar />
      <Skills />
      <Encryption />
      <Workflow />
      <Contact />
      
      </div>
    </main>
  );
}
