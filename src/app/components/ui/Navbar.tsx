import { Ellipsis } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 min-h-[10vh] z-100 flex justify-center items-center pt-15">
        <nav className="w-[35vw] h-[7vh] flex justify-between items-center rounded-full backdrop-blur-md shadow-lg px-10  bg-[#F2EFEB]/70">
          <div className="w-full h-full rounded-full flex justify-around items-center">
            <a className="text-[#111111] dark:text-[#F5F4EE] hover:opacity-75 transition-all ease-in-out hover:scale-105 tracking-tight " href={'#hero-section'}>About</a>
            <a className="text-[#111111] dark:text-[#F5F4EE] hover:opacity-75 transition-all ease-in-out hover:scale-105 tracking-tight " href={'#services-section'}>Services</a>
            <a className="text-[#111111] dark:text-[#F5F4EE] hover:opacity-75 transition-all ease-in-out hover:scale-105 tracking-tight " href={'#projects-section'}>Projects</a>
            <a className="text-[#111111] dark:text-[#F5F4EE] hover:opacity-75 transition-all ease-in-out hover:scale-105 tracking-tight " href={'#testimonials-section'}>Testimonials</a>
            <a className="text-[#111111] dark:text-[#F5F4EE] hover:opacity-75 transition-all ease-in-out hover:scale-105 tracking-tight " href={'#contact-section'}>Contact</a>
        </div>
          
      </nav>
        
    </header>
    </>
  );
}
