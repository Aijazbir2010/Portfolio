import Navbar from "components/Navbar";
import Footer from "components/Footer";
import HeroSection from "components/HeroSection";
import AboutSection from "components/AboutSection";
import SkillsSection from "components/SkillsSection";
import ShoutoutToMyFriendsSection from "components/ShoutoutToMyFriendsSection";
import ProjectsSection from "components/ProjectsSection";
import MentorChannelsSection from "components/MentorChannelsSection";
import ContactMeSection from "components/ContactMeSection";

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Aijazbir | Portfolio" },
    { name: "description", content: "I'm Aijazbir Brar, a 14-year-old Full Stack Developer specializing in MERN Stack, Next.js, and Remix. Explore my portfolio to see modern, stylish, and eye-catching projects that showcase my expertise in crafting innovative web solutions. Let's collaborate to bring your ideas to life!" },
    { name: "keywords", content: "Aijazbir Brar, aijazbir, ajazbir, portfolio, web developer, freelance web developer, projects, skills" },
  ];
};

export default function Index() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <AboutSection />

      <SkillsSection />

      <ShoutoutToMyFriendsSection />

      <ProjectsSection />

      <MentorChannelsSection />

      <ContactMeSection />

      <Footer />
    </>
  );
}

