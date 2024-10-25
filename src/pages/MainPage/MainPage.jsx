import HeroSearcingService from "../../components/Main/HeroSearcingService/HeroSearcingService";
import WhyUsSection from "../../components/Main/WhyUsSection/WhyUsSection";
import PricingPlans from "../../components/Main/PricingPlans/PricingPlans";
import s from "./styles.module.scss";

export default function MainPage() {
  return (
    <div className={s.mainPage__container}>
      <HeroSearcingService />
      <WhyUsSection />
      <PricingPlans />
    </div>
  );
}
