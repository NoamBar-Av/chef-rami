"use client";

import { useEffect, useState } from "react";
import type { ComponentType, Dispatch, SetStateAction } from "react";
import Navbar from "../components/landing/Navbar.jsx";
import Hero from "../components/landing/Hero.jsx";
import About from "../components/landing/About.jsx";
import Services from "../components/landing/Services.jsx";
import Gallery from "../components/landing/Gallery.jsx";
import Testimonials from "../components/landing/Testimonials.jsx";
import FAQ from "../components/landing/FAQ.jsx";
import Contact from "../components/landing/Contact.jsx";
import Footer from "../components/landing/Footer.jsx";

type Lang = "he" | "en" | "fr";

type LangProps = {
  lang: Lang;
};

type NavbarProps = {
  lang: Lang;
  setLang: Dispatch<SetStateAction<Lang>>;
};

const NavbarView = Navbar as ComponentType<NavbarProps>;
const HeroView = Hero as ComponentType<LangProps>;
const AboutView = About as ComponentType<LangProps>;
const ServicesView = Services as ComponentType<LangProps>;
const GalleryView = Gallery as ComponentType<LangProps>;
const TestimonialsView = Testimonials as ComponentType<LangProps>;
const FAQView = FAQ as ComponentType<LangProps>;
const ContactView = Contact as ComponentType<LangProps>;
const FooterView = Footer as ComponentType<LangProps>;

export default function Home() {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "he";
    const savedLang = window.localStorage.getItem("chef-rami-lang");
    return savedLang === "he" || savedLang === "en" || savedLang === "fr" ? savedLang : "he";
  });

  useEffect(() => {
    window.localStorage.setItem("chef-rami-lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <>
      <div className="header-shell">
        <NavbarView lang={lang} setLang={setLang} />
      </div>
      <HeroView lang={lang} />
      <AboutView lang={lang} />
      <ServicesView lang={lang} />
      <GalleryView lang={lang} />
      <TestimonialsView lang={lang} />
      <FAQView lang={lang} />
      <ContactView lang={lang} />
      <FooterView lang={lang} />
    </>
  );
}
