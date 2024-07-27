import Navbar from "./component/navbar";
import HeroSection from "./component/hero";
import About from "./component/aboutme";
import Projek from "./component/project";
import MySkill from "./component/myskill";
import Contact from "./component/contact";
import Footer from "./component/footer";
import Certificate from "./component/certificate";
import Gallery from "./component/Gallery";

function App() {
  return (
    <>
      <div className=" container-lg bg-background font-popins ">
        <Navbar />
        <HeroSection />
        <About />
        <Certificate />
        
        <Projek />
        <MySkill />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
