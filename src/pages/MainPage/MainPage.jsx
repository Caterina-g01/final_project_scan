import Header from "../../components/Header/Header";
import HeroSearcingService from "../../components/HeroSearcingService/HeroSearcingService";
import WhyUsSection from "../../components/WhyUsSection/WhyUsSection";
import PricingPlans from "../../components/PricingPlans/PricingPlans";
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
  )
}
