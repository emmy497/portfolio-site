import Navbar from "../Components/Navbar";
import HeaderSection from "../Components/HeaderSection";
import SkillsSection from "../Components/SkillsSection";
import MyExperienceSection from "../Components/MyExperienceSection";
import AboutMeSection from "../Components/AboutMeSection";
import MyProjectsSection from "../Components/MyProjectsSection";
import TestimonialSection from "../Components/TestimonialSection";
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeaderSection />
      <SkillsSection />
      <MyExperienceSection />
      <AboutMeSection />
      <MyProjectsSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
