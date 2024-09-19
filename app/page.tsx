import Encryption from "@/components/main/encryption/Encryption";
import Hero from "@/components/main/hero/Hero";
import Navbar from "@/components/main/navbar/Navbar";
import Skills from "@/components/main/skills/Skills";


export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col h-[850px] gap-20'>
    
      <Hero />
      <Navbar />
      <Skills />
      <Encryption />
      </div>
    </main>
  );
}
