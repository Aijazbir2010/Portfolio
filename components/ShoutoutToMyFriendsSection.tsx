import { useRef } from "react"
import { useInView } from "framer-motion"

const ShoutoutToMyFriendsSection = () => {

  const sectionRef = useRef<HTMLDivElement>(null)
  const isSectionInView = useInView(sectionRef, { once: true })

  return (
    <div className="w-full flex flex-col mt-20 px-6">
        <div className="w-full flex justify-center text-center">
            <span className="font-black text-4xl md:text-[60px] text-gradient">Shoutout To My Friends</span>
        </div>

        <div ref={sectionRef} className="w-full flex flex-col md:flex-row items-center md:justify-between mt-10 md:mt-20">
          <div className={`flex flex-col gap-10 w-[90%] md:w-[50%] ${isSectionInView ? 'translate-y-0 translate-x-0 opacity-100' : 'translate-y-[-60px] translate-x-0 md:translate-y-0 md:translate-x-[-60px] opacity-0'} transition-all duration-[1500ms]`}>
              <div className="images flex flex-row gap-5 w-full justify-center md:justify-start">
                  <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer">
                    <img src="/logos/geminilogo.png" alt="Google Gemini" className="h-20 hover:scale-110 transition-transform duration-300"/>
                  </a>

                  <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer">
                    <img src="/logos/chatgptlogo.png" alt="ChatGPT" className="h-20 hover:scale-110 transition-transform duration-300"/>
                  </a>

                  <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">
                    <img src="/logos/claudelogo.png" alt="Claude" className="h-20 rounded-2xl hover:scale-110 transition-transform duration-300"/>
                  </a>
              </div>
              <div className="relative text-center md:text-left">
                <span className="text-white text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Whenever I&apos;m stuck or in doubt, my incredible AI friends—<span className="font-black text-gradient">Gemini, Claude, and ChatGPT</span>—are always there to help. Whether it&apos;s solving a tricky problem, offering fresh perspectives, or guiding me through challenges, they&apos;ve become my go-to companions. Their intelligence, patience, and ability to assist me anytime have made my journey so much smoother. Thank you for being the ultimate problem-solving partners!</span>
                <div className="glow absolute w-96 h-40 xl:h-80 opacity-10 bg-[#00A8E8] z-[-1] top-10 md:top-32 left-[-250px] md:left-[-150px]"></div>
              </div>
          </div>

          <div className={`relative flex justify-center items-center mt-10 md:mt-0 ${isSectionInView ? 'translate-y-0 translate-x-0 opacity-100' : 'translate-y-[100px] translate-x-0 md:translate-y-0 md:translate-x-[100px] opacity-0'} transition-all duration-[1500ms]`}>
                <img src="/illustrations/shoutouttomyfriends.svg" alt="" className="w-[320px] h-[320px] xl:w-[450px] xl:h-[450px]"/>
                <div className="glow absolute inset-0 m-auto w-60 h-60 opacity-10 bg-[#00A8E8] z-[-1]"></div>
          </div>

        </div>
    </div>
  )
}

export default ShoutoutToMyFriendsSection