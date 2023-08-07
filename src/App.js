import "./App.css";
import BestSeller from "./Components/BestSellers/BestSeller";
import Footer from "./Components/Footer/Footer";
import HairCare from "./Components/HairCare/HairCare";
import IconsFrame from "./Components/IconsFrame/IconsFrame";
import InstaBar from "./Components/InstaBar/InstaBar";
import TrackBar from "./Components/InstaBar/TrackBar";
import LogoFrame from "./Components/LogoFrame/LogoFrame";
import MainSlider from "./Components/MainSlider/MainSlider";
import SkinCare from "./Components/SkinCare/SkinCare";
import SkinTalk from "./Components/SkinTalk/SkinTalk";
// import StatusBar from "./Components/StatusBar/StatusBar";
import UnderstandingHair from "./Components/UnderstandingHair/UnderstandingHair";
import WellnessFrame from "./Components/WellnessFrame/WellnessFrame";

function App() {
  return (
    <div className="container">
      <div className="container2">
        {/* <StatusBar /> // Keeping for potential future use */}
        <LogoFrame />
        <IconsFrame />
        <WellnessFrame />
        <TrackBar />
        <MainSlider />
        <BestSeller />
        <HairCare />
        <UnderstandingHair />
        <SkinCare />
        <SkinTalk />
        <Footer />
        <InstaBar />
      </div>
    </div>
  );
}

export default App;
