import { HeroSection} from "../components/HeroSection";
import { SkillsSection } from "../components/SkillsSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      {/* Add your actual project section here if needed */}
      <ContactSection />
    </>
  );
};
