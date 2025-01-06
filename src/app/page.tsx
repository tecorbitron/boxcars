import BlogPosts from "@/components/BlogPosts";
import BrowseType from "@/components/BrowseType";
import ExploreBrands from "@/components/ExploreBrands";
import ExploreVehicles from "@/components/ExploreVehicles";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import LoanCalculator from "@/components/LoanCalculator";
import Navbar from "@/components/Navbar";
import OurCustomers from "@/components/OurCustomers";
import OurTeam from "@/components/OurTeam";
import ShopBoxCar from "@/components/ShopBoxCar";
import UsedCarBanner from "@/components/UsedCarBanner";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <section>
      <Navbar />
      <HeroSlider />
      <ExploreVehicles />
      <WhyChoose />
      <BrowseType />
      <ShopBoxCar />
      <ExploreBrands />
      <LoanCalculator />
      <OurCustomers />
      <OurTeam />
      <UsedCarBanner />
      <BlogPosts />
      <Footer />
    </section>
  );
}
