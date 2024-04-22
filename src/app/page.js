"use client";
import { useEffect, useState } from "react";
import Header from "./components/header";
import Section from "./components/section";
import Footer from "./components/footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, defaultTheme } from "./themeConfig";

export default function Home() {
  const [profileData, setProfileData] = useState(undefined);
  useEffect(() => {
    fetch("data/profile.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProfileData(data);
      });
  }, []);

  return profileData ? (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header
        brand={profileData.brand}
        sections={profileData.sections?.map((section) => section.name)}
      />
      {profileData.sections?.map((section, idx) => (
        <Section
          data={section}
          $index={idx}
          $topLevel
          key={`section_${section.name}_${idx}`}
        />
      ))}
      <Footer appName={profileData.appName} data={profileData.footer} />
    </ThemeProvider>
  ) : (
    <div>Site data not available.</div>
  );
}
