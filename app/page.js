import HeroSection from '@/app/_containers/HeroSection'
import ProjectsSection from '@/app/_containers/ProjectsSection'
import SkillsSection from '@/app/_containers/SkillsSection'
import ContactSection from '@/app/_containers/ContactSection'
import Header from '@/app/_components/Header'
import Footer from '@/app/_components/Footer'
import AnimatedCursor from "react-animated-cursor";
export default function Home() {
  return (
    <>
    <AnimatedCursor 
      innerSize={8}
      outerSize={30}
      color="255, 255, 255"
      outerAlpha={.2}
      innerScale={0.7}
      outerScale={3}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]} />
    <Header/>
    <main className="flex min-h-screen w-screen flex-col select-none items-center px-2 s:px-4 md:px-6 isolate transition-all duration-200">
       <HeroSection/>
       <ProjectsSection/>
       <SkillsSection/>
       <ContactSection/>
    </main>
    <Footer/>
    </>
  )
}
