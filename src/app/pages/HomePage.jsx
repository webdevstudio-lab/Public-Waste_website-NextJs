import AboutUs from "../components/AboutUs";
import BannerSection from "../components/BannerSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroHomeSection from "../components/HeroHomeSection";
import MoreAboutUs from "../components/MoreAboutUs";
import ProjectSection from "../components/ProjectSection";
import ServiceSection from "../components/ServiceSection";
import SubscribeSection from "../components/SubscribeSection";
import VideoSection from "../components/VideoSection";

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
      <ContactSection />
      <VideoSection />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default HomePage;
