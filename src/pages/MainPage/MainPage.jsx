import Header from "../../components/Header/Header";
import HeroSearcingService from "../../components/Main/HeroSearcingService/HeroSearcingService";
import WhyUsSection from "../../components/Main/WhyUsSection/WhyUsSection";
import PricingPlans from "../../components/Main/PricingPlans/PricingPlans";
import Footer from "../../components/Footer/Footer";
import s from "./styles.module.scss";

export default function MainPage() {
  return (
    <div className={s.mainPage__container}>
      <Header />
      <HeroSearcingService />
      <WhyUsSection />
      <PricingPlans />
      <Footer />
    </div>
  );
}
