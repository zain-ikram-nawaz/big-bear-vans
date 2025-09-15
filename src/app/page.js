import Hero from "./components/Hero/page";
import SectioSlider from "./components/SectionSlider/page";
import StickyBottomBar from "./components/StickyBottomBar/page";
import ElevatorBedModel from "./components/ElevatorBedModel/page";
import ElevatorBedInVan from "./components/ElevatorInstall/page";
import VanCustomizer from "./components/Customize/page";
import CustomVanSection from "./components/CustomVanSection/page";
import Portfolio from "./components/Portfolio/page";
import ReviewSlider from "./components/Review/page";
import ShopSection from "./components/shop/page";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero/>
      {/* <StickyBottomBar/> */}
      <SectioSlider/>
      <VanCustomizer/>
      <CustomVanSection/>
      <Portfolio/>
      <ElevatorBedModel/>
      <ElevatorBedInVan/>
      <ShopSection/>
      <ReviewSlider/>

    </div>
  );
}
