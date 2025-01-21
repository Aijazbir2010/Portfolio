import { useRef } from "react"
import { useInView } from "framer-motion"

const MentorChannelsSection = () => {

  const sectionRef = useRef<HTMLDivElement>(null)
  const isSectionInView = useInView(sectionRef, { once: true })  

  return (
    <div className="w-full flex flex-col mt-20 px-6">
        <div className="w-full flex justify-center text-center">
            <span className="font-black text-4xl md:text-[60px] text-gradient">Mentor Channels</span>
        </div>

        <div ref={sectionRef} className="w-full flex flex-col md:flex-row md:justify-between items-center mt-10">
            
            <div className={`flex w-[90%] md:w-[60%] pr-0 md:pr-6 justify-center relative ${isSectionInView ? 'translate-y-0 translate-x-0 opacity-100' : 'translate-y-[-60px] translate-x-0 md:translate-y-0 md:translate-x-[-150px] opacity-0'} transition-all duration-[1500ms]`}>
                <div className="text-center md:text-left">
                    <span className="text-white text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Learning programming has been an incredible journey, and I owe a lot of my knowledge to some amazing YouTube channels. I highly recommend <a href="https://www.youtube.com/watch?v=tVzUXW6siu0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w" target="_blank" rel="noopener noreferrer" className="font-black text-gradient">Code With Harry&apos;s Sigma Web Dev Course</a>, which gave me a solid foundation in full-stack web development—it&apos;s an absolute must for anyone starting out. I also learned JavaScript, Git, and GitHub from <a href="https://www.youtube.com/@ApnaCollegeOfficial" target="_blank" rel="noopener noreferrer" className="font-black text-gradient">Apna College</a>, whose practical approach made everything so easy to grasp. For Python, <a href="https://www.youtube.com/@BroCodez" target="_blank" rel="noopener noreferrer" className="font-black text-gradient">Bro Code</a> was my go-to channel, with clear and engaging tutorials that made learning a breeze. These creators have been instrumental in shaping my skills, and I can&apos;t recommend them enough!</span>
                </div>

                <div className="glow absolute w-96 h-60 md:h-96 opacity-10 bg-[#00A8E8] z-[-1] left-[-200px] top-16 md:top-0"></div>
            </div>
            
            <div className={`relative flex justify-center items-center mt-16 md:mt-0 ${isSectionInView ? 'translate-y-0 translate-x-0 opacity-100' : 'translate-y-[100px] translate-x-0 md:translate-y-0 md:translate-x-[120px] opacity-0'} transition-all duration-[1500ms]`}>
                <img src="/illustrations/mentorchannels.svg" alt="" className="w-[450px] 2xl:w-[500px] h-[300px] xl:h-[350px] 2xl:h-[400px]"/>
                <div className="glow absolute inset-0 m-auto w-60 h-60 opacity-10 bg-[#00A8E8] z-[-1]"></div>
            </div>
            
        </div>
    </div>
  )
}

export default MentorChannelsSection