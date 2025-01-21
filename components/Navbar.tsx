import { useState, useEffect } from "react"
import { motion, useAnimationControls } from "framer-motion"

const Navbar = () => {

  const menuControls = useAnimationControls()  
  const [isMenuOpen, setIsMenuOpen] = useState(false)  

  const [isHoveringContactButton, setIsHoveringContactButton] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
        menuControls.start('menuOpen')
    } else if (!isMenuOpen) {
        menuControls.start('initial')
    }
  }, [isMenuOpen])

  return (
    <div className="h-24 flex flex-row items-center justify-around px-6 relative">
        <div className="logo">
            <span className="text-gradient tracking-widest text-2xl">AIJAZBIR</span>
        </div>

        <div className="navigation hidden md:flex flex-row gap-10">
            <a href="#about" className="text-white font-bold text-lg tracking-wider cursor-pointer hover-text-gradient">About</a>
            <a href="#skills" className="text-white font-bold text-lg tracking-wider cursor-pointer hover-text-gradient">Skills</a>
            <a href="#projects" className="text-white font-bold text-lg tracking-wider cursor-pointer hover-text-gradient">Projects</a>
        </div>

        {!isHoveringContactButton ? (<div className={`contact-button gradient-border w-44 h-16 hidden md:flex justify-center items-center`} onMouseEnter={() => setIsHoveringContactButton(true)}>
            <div className="absolute bg-[#101010] w-[97%] h-[94%] rounded-3xl flex justify-center items-center">
                <a href="#contact" className="text-gradient text-lg tracking-wider">Contact Me</a>
            </div>
        </div>) : (
            <a href="#contact" className={`hover-contact-button gradient-bg custom-drop-shadow rounded-3xl w-44 h-16 font-bold text-white text-lg tracking-wider hidden md:flex justify-center items-center`} onMouseLeave={() => setIsHoveringContactButton(false)}>Contact Me</a>
        )}

        <div className="cursor-pointer block md:hidden z-50" onClick={() => setIsMenuOpen(true)}>
            <i className="fa-solid fa-bars text-4xl menu"></i>
        </div>

        <div className="glow absolute left-[50%] translate-x-[-50%] top-[-70px] w-[40%] h-40 z-[-1] bg-[#00A8E8] opacity-10"/>

        <div className="absolute top-0 left-0 w-full">
            <motion.div variants={{initial: {translateY: -400}, menuOpen: {translateY: 0}}} initial='initial' animate={menuControls} transition={{duration: 0.3, ease: 'easeInOut'}} className="sticky top-0 w-full bg-[#121212] drop-shadow-lg h-80 rounded-b-3xl md:hidden flex items-center justify-center flex-col gap-5 z-[60]">
                <a href="#about" className="text-white font-bold text-lg tracking-wider cursor-pointer hover-text-gradient">About</a>
                <a href="#skills" className="text-white font-bold text-lg tracking-wider cursor-pointer hover-text-gradient">Skills</a>
                <a href="#projects" className="text-white font-bold text-lg tracking-wider cursor-pointer hover-text-gradient">Projects</a>

                {!isHoveringContactButton ? (<div className={`contact-button gradient-border w-44 h-16 flex justify-center items-center mt-5`} onMouseEnter={() => setIsHoveringContactButton(true)}>
                    <div className="absolute bg-[#101010] w-[97%] h-[94%] rounded-3xl flex justify-center items-center">
                        <a href="#contact" className="text-gradient text-lg tracking-wider">Contact Me</a>
                    </div>
                </div>) : (
                    <a href="#contact" className={`hover-contact-button gradient-bg custom-drop-shadow rounded-3xl w-44 h-16 font-bold text-white text-lg tracking-wider mt-5 flex justify-center items-center`} onMouseLeave={() => setIsHoveringContactButton(false)}>Contact Me</a>
                )}

                <i className="fa-solid fa-xmark text-lg menu-cross absolute right-5 top-5" onClick={() => setIsMenuOpen(false)}></i>
            </motion.div>
        </div>
    </div>
  )
}

export default Navbar