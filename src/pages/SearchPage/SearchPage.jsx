import React from "react";
import s from "./styles.module.scss";
import Header from "../../components/Header/Header";
import SearchSection from "../../components/Main/SearchSection/SearchSection";
import Footer from "../../components/Footer/Footer";

export default function SearchPage() {
  return (
    <div>
      <Header />
      <SearchSection />
      <Footer />
    </div>
  );
}
