import { useRef } from "react"
import { useInView } from "framer-motion"

const ProjectsSection = () => {

  const projectOneRef = useRef<HTMLDivElement>(null)
  const projectTwoRef = useRef<HTMLDivElement>(null)
  const projectThreeRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  const isProjectOneInView = useInView(projectOneRef, { once: true })
  const isProjectTwoInView = useInView(projectTwoRef, { once: true })
  const isProjectThreeInView = useInView(projectThreeRef, { once: true })
  const isTextInView = useInView(textRef, { once: true })

  return (
    <div id="projects" className="w-full flex flex-col mt-20 px-6">
        <div className="w-full flex justify-center text-center">
            <span className="font-black text-4xl md:text-[60px] text-gradient">My Projects</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 w-full gap-10 2xl:gap-5 mt-20 relative">
            <div ref={projectOneRef} className={`card projects-gradient-border rounded-3xl h-[450px] md:h-[400px] w-[320px] md:w-[400px] justify-self-center ${isProjectOneInView ? 'translate-x-0 opacity-100' : 'translate-x-[-100px] opacity-0'} transition-all duration-[1500ms]`}>
                <div className="projects-inner-box rounded-3xl flex flex-col py-5 relative">
                    <div className="w-full flex flex-row gap-4 justify-center items-center">
                        <img src="/logos/permanwebsitelogo.svg" alt="Perman Website" className="h-10"/>
                        <span className="font-bold text-2xl md:text-3xl tracking-wider text-white">Perman Website</span>
                    </div>

                    <div className="px-6 md:px-4 mt-5">
                        <span className="text-white text-sm tracking-wide">Welcome to Perman Website, your ultimate destination for fans of the classic series. We've created a community-driven platform where enthusiasts can explore, interact, and engage with content in exciting new ways. <a href="https://github.com/Aijazbir2010/PermanWebsite/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="font-black text-gradient">Read More</a></span>
                    </div>

                    <div className="px-6 md:px-4 mt-5">
                        <span className="text-red-600 text-lg tracking-wide font-bold">Note - This Project Cannot Be Deployed Due To Copyright Issues</span>
                    </div>

                    <div className="flex flex-row w-full justify-around absolute bottom-5 md:bottom-10">
                        <a href="https://github.com/Aijazbir2010/PermanWebsite" target="_blank" rel="noopener noreferrer" className="bg-white py-3 flex justify-center items-center rounded-full w-32 md:w-36 gap-2 hover:scale-95 transition-transform duration-300">
                            <i className="fa-brands fa-2xl fa-github"></i>
                            <span className="font-bold text-lg">Github</span>
                        </a>
                        <a href="https://drive.google.com/file/d/1KfsFivZeok4DiCufXwqlmRL4yuV_leb1/preview" target="_blank" rel="noopener noreferrer" className="bg-[#2176FF] py-3 flex justify-center items-center rounded-full w-32 md:w-36 gap-2 hover:scale-95 transition-transform duration-300">
                            <i className="fa-solid fa-lg fa-play text-white"></i>
                            <span className="font-bold text-lg text-white">Video</span>
                        </a>
                    </div>
                </div>
            </div>


            <div ref={projectTwoRef} className={`card projects-gradient-border rounded-3xl h-[450px] md:h-[400px] w-[320px] md:w-[400px] justify-self-center ${isProjectTwoInView ? 'translate-y-0 translate-x-0 opacity-100' : 'translate-x-[100px] translate-y-0 2xl:translate-x-0 2xl:translate-y-[100px] opacity-0'} transition-all duration-[1500ms]`}>
                <div className="projects-inner-box rounded-3xl flex flex-col py-5 relative">
                    <div className="w-full flex flex-row gap-4 justify-center items-center">
                        <img src="/logos/PokeSphereLogo.svg" alt="PokéSphere" className="h-10"/>
                        <span className="font-bold text-2xl md:text-3xl tracking-wider text-white">PokéSphere</span>
                    </div>

                    <div className="px-6 md:px-4 mt-5">
                        <span className="text-white text-sm tracking-wide">Hey there! Welcome to PokéSphere, a place I&apos;ve built for every Pokémon fan out there. Here, you&apos;ll find detailed information about all Pokémon—stats, abilities, and more <a href="https://github.com/Aijazbir2010/PokeSphere/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="font-black text-gradient">Read More</a></span>
                    </div>

                    <div className="px-6 md:px-4 mt-5">
                        <span className="text-gradient text-lg tracking-wide font-bold">Link - <a href="https://pokesphere-alpha.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#35FF69] hover:underline">https://pokesphere-alpha.vercel.app</a></span>
                    </div>

                    <div className="flex flex-row w-full justify-around absolute bottom-5 md:bottom-10">
                        <a href="https://github.com/Aijazbir2010/PokeSphere" target="_blank" rel="noopener noreferrer" className="bg-white py-3 flex justify-center items-center rounded-full w-32 md:w-36 gap-2 hover:scale-95 transition-transform duration-300">
                            <i className="fa-brands fa-2xl fa-github"></i>
                            <span className="font-bold text-lg">Github</span>
                        </a>
                        <a href="https://drive.google.com/file/d/13fMEaDEqTlONL3QRJ9Idx1JAGJ7HLaD6/preview" target="_blank" rel="noopener noreferrer" className="bg-[#35FF69] py-3 flex justify-center items-center rounded-full w-32 md:w-36 gap-2 hover:scale-95 transition-transform duration-300">
                            <i className="fa-solid fa-lg fa-play text-white"></i>
                            <span className="font-bold text-lg text-white">Video</span>
                        </a>
                    </div>
                </div>
            </div>

            <div ref={projectThreeRef} className={`card projects-gradient-border rounded-3xl h-[450px] md:h-[400px] w-[320px] md:w-[400px] justify-self-center lg:col-span-2 2xl:col-span-1 ${isProjectThreeInView ? 'translate-y-0 translate-x-0 opacity-100' : 'translate-y-0 translate-x-[-100px] lg:translate-x-0 lg:translate-y-[100px] 2xl:translate-y-0 2xl:translate-x-[100px] opacity-0'} transition-all duration-[1500ms]`}>
                <div className="projects-inner-box rounded-3xl flex flex-col py-5 relative">
                    <div className="w-full flex flex-row gap-4 justify-center items-center">
                        <img src="/logos/GoSipLogo.svg" alt="GoSip" className="h-10"/>
                        <span className="font-bold text-2xl md:text-3xl tracking-wider text-white">GoSip</span>
                    </div>

                    <div className="px-6 md:px-4 mt-5">
                        <span className="text-white text-sm tracking-wide">Hey there! Welcome to GoSip, a modern and secure chat application built for effortless, real-time communication. Whether you're messaging <a href="https://github.com/Aijazbir2010/GoSip/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="font-black text-gradient">Read More</a></span>
                    </div>

                    <div className="px-6 md:px-4 mt-5">
                        <span className="text-red-600 text-lg tracking-wide font-bold">Note - This Project Will Be Deployed In Few Days</span>
                    </div>

                    <div className="flex flex-row w-full justify-around absolute bottom-5 md:bottom-10">
                        <a href="https://github.com/Aijazbir2010/GoSip" target="_blank" rel="noopener noreferrer" className="bg-white py-3 flex justify-center items-center rounded-full w-32 md:w-36 gap-2 hover:scale-95 transition-transform duration-300">
                            <i className="fa-brands fa-2xl fa-github"></i>
                            <span className="font-bold text-lg">Github</span>
                        </a>
                        <a href="https://drive.google.com/file/d/1Vb8__PCA4WkHiiRzJ_-NTA06TdSjdgT_/preview" target="_blank" rel="noopener noreferrer" className="bg-[#4BB3FD] py-3 flex justify-center items-center rounded-full w-32 md:w-36 gap-2 hover:scale-95 transition-transform duration-300">
                            <i className="fa-solid fa-lg fa-play text-white"></i>
                            <span className="font-bold text-lg text-white">Video</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="glow absolute w-[450px] h-96 opacity-10 bg-[#00A8E8] z-[-1] top-[50%] translate-y-[-50%] lg:translate-y-0 lg:top-0 left-[50%] translate-x-[-50%]"/>

        </div>

        <div ref={textRef} className={`w-[90%] flex justify-center text-center mt-20 mx-auto ${isTextInView ? 'translate-y-0 opacity-100' : 'translate-y-[60px] opacity-0'} transition-all duration-[1500ms]`}>
            <span className="text-white font-bold text-xl md:text-3xl">The listed projects showcase some of my best work, but I&apos;ve also created several other projects while learning and honing my web development skills. Stay tuned for my upcoming projects.</span>
        </div>
    </div>
  )
}

export default ProjectsSection