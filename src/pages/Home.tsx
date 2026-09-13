import Navbar from "../Components/Navbar";
import HeaderSection from "../Components/HeaderSection";
import SkillsSection from "../Components/SkillsSection";
import MyExperienceSection from "../Components/MyExperienceSection";
import AboutMeSection from "../Components/AboutMeSection";
import MyProjectsSection from "../Components/MyProjectsSection";
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";

// TestimonialSection is built and ready in ../Components/TestimonialSection,
// but it's unmounted: the quotes in it came from the reference design and
// aren't real. Add the import and the <TestimonialSection /> line back once
// there are genuine quotes to put in it.

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeaderSection />
      <SkillsSection />
      <MyExperienceSection />
      <AboutMeSection />
      <MyProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
