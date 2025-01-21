import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"
import ReactTypingEffect from 'react-typing-effect';

const HeroSection = () => {

  const imageRef = useRef<HTMLDivElement>(null)
  const isImageInView = useInView(imageRef, { once: true })

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="w-full h-[600px] mt-20 px-2 md:px-6 flex flex-col gap-10 xl:gap-0 xl:flex-row">
        <div className="h-[50%] w-full xl:h-full xl:w-[50%] flex justify-center items-center px-10">
          <span className="text-white text-4xl md:text-[60px] font-black tracking-wider leading-[50px] md:leading-[70px] text-center xl:text-left">
              {isClient && <ReactTypingEffect
                text={["Hi, I am Aijazbir Brar, redefining what's possible at my age!"]}
                speed={70}
                eraseDelay={10000000000}
                cursor=""
                cursorClassName="typing-cursor"
                typingDelay={0}
                displayTextRenderer={(text: string): React.ReactElement => {
                  const parts = text.split('Aijazbir Brar');
                  if (parts.length === 2) {
                    return (
                      <>
                        {parts[0]}
                        <span className="text-gradient">Aijazbir Brar</span>
                        {parts[1]}
                      </> 
                    );
                  }
                  return <span>{text}</span>
                }}
              />}
          </span>
        </div>
        <div className="h-[50%] w-full xl:h-full xl:w-[50%] mt-0 md:mt-20 xl:mt-0 flex justify-center xl:justify-end items-center relative">
            <div ref={imageRef} className={`relative ${isImageInView ? 'translate-y-0 xl:translate-y-0 xl:translate-x-0 opacity-100' : 'translate-y-40 xl:translate-y-0 xl:translate-x-60 opacity-0'} transition-all duration-[1500ms]`}>
              <img src="/illustrations/herosection.svg" alt="" className="h-[550px] w-[550px] md:w-[700px] md:h-[700px]"/>
              <div className="glow absolute inset-0 m-auto w-60 h-60 md:w-96 md:h-96 opacity-10 bg-[#00A8E8] z-[-1]"></div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection