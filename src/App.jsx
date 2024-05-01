import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import EngeneerCourse from "./Components/EngeneerCourse";
import Software from "./Components/Software";
import Goodfit from "./Components/Goodfit";
import Ourgarantie from "./Components/Ourgarantie";
import Weare from "./Components/Weare";
import Footer from "./Components/Footer";
import StudentSwiper from "./Components/StudentSwiper";
import Social from "./Components/Social";
import BackToTop from "./Components/BackToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Preloder from "./Components/Preloder";
function App() {
  const [load, setload] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      document.body.classList.remove("overflow-hidden");
      setload(false);
    }, 4000);
  });
  React.useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <div className=" bg-main-body text_sm_center">
      {load && <Preloder />}
      <Header />
      <EngeneerCourse />
      <Software />
      <Goodfit />
      <StudentSwiper />
      <Ourgarantie />
      <Weare />
      <Footer />
      <Social />
      <BackToTop />
    </div>
  );
}

export default App;
