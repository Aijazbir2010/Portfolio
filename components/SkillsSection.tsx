import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"

const SkillsSection = () => {

  const books = [
    {title: 'Rich Dad Poor Dad', author: 'Robert T. Kiyosaki'},
    {title: 'Zero to One', author: 'Peter Thiel with Blake Masters'},
    {title: 'Think and Grow Rich', author: 'Napoleon Hill'},
    {title: 'The Psychology of Money', author: 'Morgan Housel'},
    {title: 'The Power of Your Subconscious Mind', author: 'Joseph Murphy'},
    {title: 'The Lean Startup', author: 'Eric Ries'},
    {title: 'The Personal MBA', author: 'Josh Kaufman'},
    {title: '$100M Offers', author: 'Alex Hormozi'},
    {title: '$100M Leads', author: 'Alex Hormozi'},
    {title: 'Atomic Habits', author: 'James Clear'},
    {title: 'Deep Work', author: 'Cal Newport'},
  ]  

  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
        setScrollPosition((prev) => (prev + 1) % books.length)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const [translateMultiplier, setTranslateMultiplier] = useState(4.5)

  useEffect(() => {
    const updateTranslateMultiplier = () => {
        if (window.innerWidth >= 768) {
            setTranslateMultiplier(2.5)
        } else {
            setTranslateMultiplier(4.5)
        }
    }

    window.addEventListener('resize', updateTranslateMultiplier)

    return () => window.removeEventListener('resize', updateTranslateMultiplier)
  }, [])

  const boxOneRef = useRef<HTMLDivElement>(null)
  const boxTwoRef = useRef<HTMLDivElement>(null)
  const boxThreeRef = useRef<HTMLDivElement>(null)
  const boxFourRef = useRef<HTMLDivElement>(null)

  const isBoxOneInView = useInView(boxOneRef, { once: true })
  const isBoxTwoInView = useInView(boxTwoRef, { once: true })
  const isBoxThreeInView = useInView(boxThreeRef, { once: true })
  const isBoxFourInView = useInView(boxFourRef, { once: true })

  const [isBoxOneFlipped, setIsBoxOneFlipped] = useState(false)
  const [isBoxTwoFlipped, setIsBoxTwoFlipped] = useState(false)
  const [isBoxThreeFlipped, setIsBoxThreeFlipped] = useState(false)
  const [isBoxFourFlipped, setIsBoxFourFlipped] = useState(false)

  return (
    <div id="skills" className="w-full flex flex-col mt-20 px-6">
        <div className="w-full flex justify-center text-center">
            <span className="font-black text-4xl md:text-[60px] text-gradient">My Skills</span>
        </div>

        <div className="main-container mt-10 grid grid-cols-1 xl:grid-cols-12 gap-10 relative">
            {!isBoxOneFlipped ? (<div ref={boxOneRef} className={`flip-container web-dev-skills xl:col-span-8 min-h-[24rem] rounded-3xl ${isBoxOneInView ? 'translate-x-0 opacity-100' : 'translate-x-[-100px] opacity-0'} transition-all duration-[1500ms]`} onClick={() => setIsBoxOneFlipped((prev) => !prev)}>
                <div className="flip-card">
                    <div className="front skills-gradient-border rounded-3xl">
                        <div className="skills-inner-box h-auto rounded-3xl">
                            <div className="flex w-full justify-center">
                                <span className="font-black text-2xl md:text-3xl text-gradient">Web Development Skills</span>
                            </div>
                            <div className="w-full h-[75%] grid grid-cols-2 md:grid-cols-3 place-items-center gap-5">
                                <img src="/logos/nextlogo.png" alt="Next Js" className="h-8 md:h-12"/>
                                <img src="/logos/expresslogo.png" alt="Express Js" className="h-10 md:h-20"/>
                                <img src="/logos/typescriptlogo.png" alt="TypeScript" className="h-10 md:h-16 p-1 md:p-0"/>
                                <img src="/logos/remixlogo.png" alt="Remix" className="h-10 md:h-20"/>
                                <img src="/logos/mongodb-logo-white.png" alt="MongoDB" className="h-10 md:h-16 p-1 md:p-0"/>
                                <img src="/logos/tailwindlogo.png" alt="Tailwind CSS" className="h-10 md:h-16 p-1 md:p-2"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
                :
            (<div ref={boxOneRef} className={`flip-container xl:col-span-8 min-h-[24rem] rounded-3xl ${isBoxOneInView ? 'translate-x-0 opacity-100' : 'translate-x-[-100px] opacity-0'} transition-all duration-[1500ms]`} onClick={() => setIsBoxOneFlipped((prev) => !prev)}>
                <div className="flip-card flipped">
                    <div className="back rounded-3xl bg-gradient-to-r from-[#00A8E8] to-[#2541B2] p-5 flex justify-center items-center">
                        <span className="text-white font-black italic text-center text-2xl">“I love building websites that are not just functional but also engaging and user-friendly. With frameworks like Next.js, Remix, and tools like MongoDB and TypeScript, I create web applications that deliver real value.”</span>
                    </div>
                </div>
            </div>)}    

            {!isBoxTwoFlipped ? (<div ref={boxTwoRef} className={`flip-container web-dev-skills xl:col-span-4 min-h-[24rem] rounded-3xl ${isBoxTwoInView ? 'translate-x-0 opacity-100' : 'translate-x-[100px] opacity-0'} transition-all duration-[1500ms]`} onClick={() => setIsBoxTwoFlipped((prev) => !prev)}>
                <div className="flip-card">
                    <div className="front skills-gradient-border rounded-3xl">
                        <div className="skills-inner-box h-auto rounded-3xl">
                            <div className="flex w-full justify-center">
                                <span className="font-black text-2xl md:text-3xl text-gradient">Languages</span>
                            </div>
                            <div className="flex flex-col gap-2 w-full p-2">
                                <div className="flex flex-row justify-center items-center gap-1">
                                    <img src="/logos/jslogo.png" alt="JavaScript" className="h-20"/>
                                    <span className="text-2xl font-bold text-white">JavaScript</span>
                                </div>

                                <div className="flex justify-center">
                                    <img src="/logos/python-logo.png" alt="Python" className="w-48 h-20"/>
                                </div>

                                <div className="flex flex-row justify-center items-center gap-2">
                                    <img src="/logos/cpplogo.png" alt="C++" className="h-16"/>
                                    <span className="text-2xl font-bold text-white">C++</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
                :
            (<div ref={boxTwoRef} className={`flip-container xl:col-span-4 min-h-[24rem] rounded-3xl ${isBoxTwoInView ? 'translate-x-0 opacity-100' : 'translate-x-[100px] opacity-0'} transition-all duration-[1500ms]`} onClick={() => setIsBoxTwoFlipped((prev) => !prev)}>
                <div className="flip-card flipped">
                    <div className="back rounded-3xl bg-gradient-to-r from-[#00A8E8] to-[#2541B2] p-5 flex justify-center items-center">
                        <span className="text-white font-black italic text-center text-2xl">“JavaScript, Python, and C++ have been essential in shaping my programming journey. They&apos;ve taught me problem-solving, logical thinking, and how to tackle challenges effectively.”</span>
                    </div>
                </div>
            </div>)}    

            {!isBoxThreeFlipped ? (<div ref={boxThreeRef} className={`flip-container web-dev-skills xl:col-span-4 min-h-[24rem] rounded-3xl ${isBoxThreeInView ? 'translate-x-0 opacity-100' : 'translate-x-[-60px] opacity-0'} transition-all duration-[1500ms]`} onClick={() => setIsBoxThreeFlipped((prev) => !prev)}>
                <div className="flip-card">
                    <div className="front skills-gradient-border rounded-3xl">
                        <div className="skills-inner-box h-auto rounded-3xl">
                            <div className="flex w-full justify-center">
                                <span className="font-black text-2xl md:text-3xl text-gradient">Creative Skills</span>
                            </div>
                            <div className="flex flex-col gap-2 w-full p-2">
                                <div className="flex flex-row justify-center items-center gap-3">
                                    <img src="/logos/premierepro.png" alt="Adobe Premiere Pro" className="h-16"/>
                                    <span className="text-2xl font-bold text-white">Adobe Premire Pro</span>
                                </div>

                                <div className="flex flex-row justify-center items-center gap-3">
                                    <img src="/logos/aftereffects.png" alt="Adobe After Effects" className="h-16"/>
                                    <span className="text-2xl font-bold text-white">Adobe After Effects</span>
                                </div>

                                <div className="flex justify-center">
                                    <img src="/logos/blenderlogo.png" alt="Blender" className="h-16"/>
                                </div>

                                <div className="flex flex-row justify-center items-center gap-2">
                                    <img src="/logos/unrealenginelogo.png" alt="Unreal Engine" className="h-16"/>
                                    <span className="text-2xl font-bold text-white">Unreal Engine</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
                :
            (<div ref={boxThreeRef} className={`flip-container xl:col-span-4 min-h-[24rem] rounded-3xl ${isBoxThreeInView ? 'translate-x-0 opacity-100' : 'translate-x-[-60px] opacity-0'} transition-all duration-[1500ms]`} onClick={() => setIsBoxThreeFlipped((prev) => !prev)}>
                <div className="flip-card flipped">
                    <div className="back rounded-3xl bg-gradient-to-r from-[#00A8E8] to-[#2541B2] p-5 flex justify-center items-center">
                        <span className="text-white font-black italic text-center text-2xl">“I enjoy working on the creative side of things too, like editing videos and bringing ideas to life through 3D animation. It&apos;s a great way to combine technical skills with storytelling.”</span>
                    </div>
                </div>
            </div>)}        

            {!isBoxFourFlipped ? (<div ref={boxFourRef} className={`flip-container web-dev-skills xl:col-span-8 min-h-[24rem] rounded-3xl ${isBoxFourInView ? 'translate-x-0 opacity-100' : 'translate-x-[100px] opacity-0'} transition-all duration-[1500ms]`} onClick={() => setIsBoxFourFlipped((prev) => !prev)}>
                <div className="flip-card">
                    <div className="front skills-gradient-border rounded-3xl">
                        <div className="skills-inner-box h-auto rounded-3xl">
                            <div className="flex w-full justify-center">
                                <span className="font-black text-2xl md:text-3xl text-gradient">My Reads</span>
                            </div>
                            <div className="relative w-full h-[70%] overflow-hidden">
                                <div className="absolute w-full px-10 flex flex-col gap-10 transition-transform duration-1000" style={{transform: `translateY(-${scrollPosition * translateMultiplier}rem)`}}>
                                    {books.map((book, index) => (<span key={index} className="font-bold text-white text-xl">• {book.title} <span className="font-light">by </span><span className="font-normal italic">{book.author}</span></span>))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
                :
            (<div ref={boxFourRef} className={`flip-container xl:col-span-8 min-h-[24rem] rounded-3xl ${isBoxFourInView ? 'translate-x-0 opacity-100' : 'translate-x-[100px] opacity-0'} transition-all duration-[1500ms]`} onClick={() => setIsBoxFourFlipped((prev) => !prev)}>
                <div className="flip-card flipped">
                    <div className="back rounded-3xl bg-gradient-to-r from-[#00A8E8] to-[#2541B2] p-5 flex justify-center items-center">
                        <span className="text-white font-black italic text-center text-2xl">"I&apos;m passionate about reading books that expand my perspective and inspire me to think differently. From personal growth to entrepreneurship, every book I read adds something new to my journey."</span>
                    </div>
                </div>
            </div>)}

            <div className="glow absolute w-[60%] h-[1400px] xl:h-96 opacity-10 bg-[#00A8E8] z-[-1] top-20 left-12 md:left-32"></div>
        </div>
    </div>
  )
}

export default SkillsSection