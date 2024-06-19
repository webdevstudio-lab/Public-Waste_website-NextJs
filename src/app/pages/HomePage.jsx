import AboutUs from "../components/AboutUs";
import BannerSection from "../components/BannerSection";
import Header from "../components/Header";
import HeroHomeSection from "../components/HeroHomeSection";
import MoreAboutUs from "../components/MoreAboutUs";
import ProjectSection from "../components/ProjectSection";
import ServiceSection from "../components/ServiceSection";

const HomePage = ({ children }) => {
  return (
    <>
      <Header />
      <HeroHomeSection />
      <AboutUs />
      <MoreAboutUs />
      <BannerSection />
      <ServiceSection />
      <ProjectSection />
    </>
  );
};

export default HomePage;
