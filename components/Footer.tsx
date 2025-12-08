const Footer = () => {
  return (
    <div className={`bg-[#0F171B] h-[570px] md:h-[270px] w-full mt-10 py-5 relative`}>
        <div className={`flex flex-col gap-7 md:gap-0 md:flex-row md:justify-around w-full`}>
            <div className="flex flex-col items-center gap-5">
                <span className={`text-3xl md:text-4xl font-bold text-white`}>Quick Links</span>
                <div className="flex flex-col items-center gap-2">
                    <a href="#about" className="font-bold text-[#A6A6A6] cursor-pointer hover-text-gradient">About</a>  
                    <a href="#skills" className="font-bold text-[#A6A6A6] cursor-pointer hover-text-gradient">Skills</a>  
                    <a href="#projects" className="font-bold text-[#A6A6A6] cursor-pointer hover-text-gradient">Projects</a>  
                    <a href="#contact" className="font-bold text-[#A6A6A6] cursor-pointer hover-text-gradient">Contact Me</a>  
                </div> 
            </div>
            <div className="flex flex-col items-center gap-5">
                <span className={`text-3xl md:text-4xl font-bold text-white`}>Social Media</span>
                <div className="flex flex-col items-center gap-2">
                    <a href={"https://www.instagram.com/aijazbir_2010/"} target={"_blank"} rel={"noopener noreferrer"} className="flex flex-row gap-2 items-center">
                        <i className="fa-brands fa-instagram fa-lg text-[#A6A6A6]"></i>
                        <span className="font-bold text-[#A6A6A6] hover-text-gradient">Instagram</span>
                    </a>
                    <a href={"https://github.com/Aijazbir2010"} target={"_blank"} rel={"noopener noreferrer"} className="flex flex-row gap-2 items-center">
                        <i className="fa-brands fa-github fa-lg text-[#A6A6A6]"></i>
                        <span className="font-bold text-[#A6A6A6] hover-text-gradient">Github</span>
                    </a>   
                </div> 
            </div>
        </div>

        <div className="flex justify-center w-full absolute bottom-5 text-center">
            <span className="text-[#A6A6A6] px-2">&copy; {new Date().getFullYear()} Aijazbir Brar. All Rights Reserved. | Illustrations by <a href="https://undraw.co" target="_blank" rel="noopener noreferrer" className="font-black text-gradient">Undraw.co</a></span>   
        </div>
    </div>
  )
}

export default Footer
