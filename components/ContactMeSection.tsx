import { useState, useRef } from "react"
import { useInView } from "framer-motion"
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Spinner from "./Spinner";

import { toast } from "react-toastify";

const sendEmailSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter a Valid E-mail !")
      .required("E-mail is Required !"),
    message: Yup.string()
      .min(5, "Message must be atleast 5 characters")
      .required("Password is Required !"),
});

const ContactMeSection = () => {

  const [isHoveringContactButton, setIsHoveringContactButton] = useState(false)
  const [isSendingEmail, setIsSendingEmail] = useState(false)

  const instagramButtonRef = useRef<HTMLAnchorElement>(null)  
  const whatsappButtonRef = useRef<HTMLAnchorElement>(null)
  const orSeparatorDivRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)  
  const textRef = useRef<HTMLDivElement>(null)  

  const isInstagramButtonInView = useInView(instagramButtonRef, { once: true })
  const isWhatsappButtonInView = useInView(whatsappButtonRef, { once: true })
  const isOrSeparatorDivInView = useInView(orSeparatorDivRef, { once: true })
  const isFormInView = useInView(formRef, { once: true })
  const isTextInView = useInView(textRef, { once: true })  


  const {
    register: sendEmailFormRegister,
    handleSubmit: handleSendEmail,
    reset: sendEmailFormReset,
    formState: { errors: sendEmailErrors },
  } = useForm({
    resolver: yupResolver(sendEmailSchema),
  });

  const sendEmail = async (data: {email: string, message: string}) => {
    try {
      setIsSendingEmail(true)
      const formData = new FormData()
      formData.append('email', data.email)
      formData.append('message', data.message)

      const response = await fetch('/api/sendEmail', {method: "POST", body: formData})
      const responseData = await response.json()

      if (responseData.success) {
        setIsSendingEmail(false)
        toast('E-mail Sent !', {style: {backgroundColor: '#101010', color: '#fff'}, progressClassName: 'custom-progress-bar-blue'})
      } else if (responseData.error) {
        setIsSendingEmail(false)
        toast('Cannot Send E-mail !', {style: {backgroundColor: '#101010', color: '#fff'}, progressClassName: 'custom-progress-bar-red'})
      }

      sendEmailFormReset()

    } catch (err) {
      sendEmailFormReset()
      setIsSendingEmail(false)
      toast('Cannot Send E-mail !', {style: {backgroundColor: '#101010', color: '#fff'}, progressClassName: 'custom-progress-bar-red'})
    }
  }

  return (
    <>
      {isSendingEmail && (<div className={`bg-[#101010] opacity-80 fixed inset-0 z-[60] flex justify-center items-center`}>
          <Spinner />
      </div>)}


      <div id="contact" className="w-full flex flex-col mt-20 px-6">
          <div className="w-full flex justify-center text-center pt-10">
              <span className="font-black text-4xl md:text-[60px] text-gradient">Contact Me</span>
          </div>

          <div className="w-full flex flex-col items-center gap-5 mt-10 relative">
              <a ref={instagramButtonRef} href="https://www.instagram.com/aijazbir_2010/" target="_blank" rel="noopener noreferrer" className={`instagram-btn bg-[#0F171B] w-[340px] md:w-[400px] h-16 rounded-3xl flex flex-row items-center gap-4 px-6 hover:scale-95 ${isInstagramButtonInView ? 'translate-x-0 opacity-100' : 'translate-x-[-60px] opacity-0'} transition-all duration-[1500ms] hover:duration-300`}>
                  <img src="/logos/instagram.svg" alt="Instagram" className="w-10 h-10"/>
                  <span className="text-white text-lg">Instagram</span>
              </a>
              <a ref={whatsappButtonRef} href="https://wa.me/916284523190" target="_blank" rel="noopener noreferrer" className={`whatsapp-btn bg-[#0F171B] w-[340px] md:w-[400px] h-16 rounded-3xl flex flex-row items-center gap-4 px-6 hover:scale-95 ${isWhatsappButtonInView ? 'translate-x-0 opacity-100' : 'translate-x-[60px] opacity-0'} transition-all duration-[1500ms] hover:duration-300`}>
                  <i className="fa-brands fa-whatsapp text-[#25D366] text-4xl"></i>
                  <span className="text-white text-lg">Chat on Whatsapp</span>
              </a>

              <div ref={orSeparatorDivRef} className={`w-[340px] md:w-[400px] flex flex-row gap-2 justify-center items-center ${isOrSeparatorDivInView ? 'scale-100 opacity-100' : 'scale-50 opacity-0'} transition-all duration-[1000ms]`}>
                  <div className="h-[1px] w-[40%] bg-gradient-to-r from-[#00A8E8] to-[#2541B2]"/>
                  <span className="nav-text-gradient text-sm">Or</span>
                  <div className="h-[1px] w-[40%] bg-gradient-to-r from-[#00A8E8] to-[#2541B2]"/>
              </div>

              <form onSubmit={handleSendEmail(sendEmail)} ref={formRef} className={`w-[340px] md:w-[400px] flex flex-col ${(sendEmailErrors.email || sendEmailErrors.message) ? 'gap-3' : 'gap-5'} ${isFormInView ? 'translate-y-0 opacity-100' : 'translate-y-[100px] opacity-0'} transition-all duration-[1500ms]`}>
                  <div className={`w-full h-16 rounded-3xl bg-[#0F171B] flex flex-row items-center gap-4 px-6 ${sendEmailErrors.email ? 'border-2 border-red-500 focus-within:border-red-500' : ''}`}>
                      <i className="fa-solid fa-xl fa-envelope text-[#A6A6A6]"></i>
                      <input type="text" className="h-full w-full rounded-3xl border-none outline-none bg-transparent text-white text-lg font-bold placeholder:font-normal placeholder:text-[#A6A6A6] placeholder:text-lg" placeholder="E-mail" {...sendEmailFormRegister('email')}/>
                  </div>
                  {sendEmailErrors.email && <p className="font-bold text-red-500 text-xs px-6 w-[340px] md:w-96">{sendEmailErrors.email.message}</p>}

                  <textarea className={`no-scrollbar w-full h-48 bg-[#0F171B] rounded-3xl resize-none px-6 py-4 outline-none ${!sendEmailErrors.message ? 'border-none' : ''} text-white text-lg font-bold placeholder:text-[#A6A6A6] placeholder:text-lg placeholder:font-normal ${sendEmailErrors.message ? 'border-2 border-red-500 focus-within:border-red-500' : ''}`} placeholder="Type your Message" {...sendEmailFormRegister('message')}/>
                  {sendEmailErrors.message && <p className="font-bold text-red-500 text-xs px-6 w-[340px] md:w-96">{sendEmailErrors.message.message}</p>}

                  {!isHoveringContactButton ? (<div className={`contact-button gradient-border w-full h-16 flex justify-center items-center mt-2`} onMouseEnter={() => setIsHoveringContactButton(true)}>
                      <div className="absolute bg-[#101010] w-[99%] h-[94%] rounded-3xl flex justify-center items-center">
                          <button type="submit" className="text-gradient text-lg tracking-wider">Send E-mail</button>
                      </div>
                  </div>) : (
                      <button type="submit" className={`hover-contact-button gradient-bg custom-drop-shadow rounded-3xl w-full h-16 font-bold text-white text-lg tracking-wider mt-2`} onMouseLeave={() => setIsHoveringContactButton(false)}>Send E-mail</button>
                  )}
              </form>

              <div ref={textRef} className={`w-[90%] flex justify-center text-center mt-5 ${isTextInView ? 'translate-y-0 opacity-100' : 'translate-y-[60px] opacity-0'} transition-all duration-[1500ms]`}>
                  <span className="font-black text-gradient text-2xl md:text-3xl italic">Let&apos;s Connect and Create Something Amazing !</span>
              </div>

              <div className="glow absolute w-60 h-96 opacity-10 bg-[#00A8E8] z-[-1] hidden md:block md:left-[-200px] xl:left-[-140px] top-[50%] translate-y-[-50%]"></div>
          </div>
      </div>
    </>
  )
}

export default ContactMeSection