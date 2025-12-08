import { useRef } from "react"
import { useInView } from "framer-motion"

const AboutSection = () => {

  const sectionOneRef = useRef<HTMLDivElement>(null)
  const sectionTwoRef = useRef<HTMLDivElement>(null)

  const isSectionOneInView = useInView(sectionOneRef, { once: true })
  const isSectionTwoInView = useInView(sectionTwoRef, { once: true })

  return (
    <div id="about" className="w-full flex flex-col mt-20 md:mt-40 xl:mt-10 px-6">
        <div className="w-full flex justify-center text-center pt-10">
            <span className="font-black text-4xl md:text-[60px] text-gradient">About Me</span>
        </div>

        <div ref={sectionOneRef} className="w-full flex flex-col md:flex-row md:justify-between items-center mt-10">
            <img src="/illustrations/aboutme-1.svg" alt="" className={`w-[250px] h-[250px] xl:w-[300px] xl:h-[300px] 2xl:w-[400px] 2xl:h-[400px] ${isSectionOneInView ? 'translate-y-0 translate-x-0 opacity-100' : 'translate-y-[-60px] translate-x-0 md:translate-y-0 md:translate-x-[-60px] opacity-0'} transition-all duration-[1500ms]`}/>

            <div className={`flex flex-col gap-10 w-[90%] md:w-[70%] mt-10 md:mt-0 justify-center ${isSectionOneInView ? 'translate-y-0 translate-x-0 opacity-100' : 'translate-y-[100px] translate-x-0 md:translate-y-0 md:translate-x-[150px] opacity-0'} transition-all duration-[1500ms]`}>
                <div className="text-center md:text-right">
                    <span className="text-white text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">I’m Aijazbir Brar, a 15-year-old self-taught software engineer and young entrepreneur, currently serving as the Co-Founder & CEO of <a className="font-bold" href="https://softpeo.com" target="_blank" rel="noopener noreferer">SoftPeo</a>. I started my journey not with formal training or privilege, but with obsession, discipline, and an unstoppable curiosity for how technology really works. Over the years, I’ve built real production systems, shipped scalable products, led technical decisions, and learned how to turn raw ideas into structured, high-impact solutions. At this age, while most are still exploring possibilities, I’m already operating inside real business pressure, real users, and real responsibility — learning leadership, execution, and innovation the hard way, every single day.</span>
                </div>

                <div className="text-center md:text-right">
                    <span className="text-white text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">SoftPeo is an AI startup with a bold mission: to make artificial intelligence and advanced technology accessible, safe, and affordable for everyone. We are not building for hype — we are building for impact. Our goal is to create groundbreaking innovations that don’t just add convenience, but reshape how people live, work, create, and grow in the future. At SoftPeo, we believe that powerful technology should not be locked behind high costs or complexity. We are focused on designing products that are intelligent, human-centered, and built for scale — with a long-term vision of shaping the global tech ecosystem, not just participating in it. <a className="font-bold" href="https://softpeo.com" target="_blank" rel="noopener noreferer">Learn More</a>.</span>
                </div>
            </div>
        </div>

        <div ref={sectionTwoRef} className="w-full flex flex-col-reverse md:flex-row md:justify-between items-center mt-20">
            
            <div className={`flex flex-col gap-10 w-[90%] md:w-[70%] mt-10 md:mt-0 justify-center relative ${isSectionTwoInView ? 'translate-y-0 translate-x-0 opacity-100' : 'translate-y-[100px] translate-x-0 md:translate-y-0 md:translate-x-[-150px] opacity-0'} transition-all duration-[1500ms]`}>
                <div className="text-center md:text-left">
                    <span className="text-white text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">I envision a future where technology becomes a bridge to solving real-world problems, empowering people, and creating lasting value. My ultimate goal is to become an <span className="font-black text-gradient">Entrepreneur</span>, founding startups that make a meaningful impact on people&apos;s lives.</span>
                </div>

                <div className="text-center md:text-left">
                    <span className="text-white text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">I believe in innovation that serves a purpose—whether it&apos;s simplifying daily tasks, addressing global challenges, or creating tools that inspire creativity.</span>
                </div>

                <div className="glow absolute w-60 h-72 xl:h-96 opacity-10 bg-[#00A8E8] z-[-1] top-32 left-[-220px] md:top-0 md:left-[-60px]"></div>
            </div>
            
            <div className={`relative flex justify-center items-center ${isSectionTwoInView ? 'translate-y-0 translate-x-0 opacity-100' : 'translate-y-[-20px] translate-x-0 md:translate-y-0 md:translate-x-[120px] opacity-0'} transition-all duration-[1500ms]`}>
                <img src="/illustrations/aboutme-2.svg" alt="" className="w-[250px] h-[250px] xl:w-[300px] xl:h-[300px] 2xl:w-[400px] 2xl:h-[400px]"/>
                <div className="glow absolute inset-0 m-auto w-60 h-60 opacity-10 bg-[#00A8E8] z-[-1]"></div>
            </div>
            
        </div>

    </div>
  )
}

export default AboutSection
