import ExploreVehicles from "@/components/ExploreVehicles";
import HeroSlider from "@/components/HeroSlider";
import Navbar from "@/components/Navbar";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <section>
      <Navbar />
      <HeroSlider />
      <ExploreVehicles />
      <WhyChoose />
    </section>
  );
}
