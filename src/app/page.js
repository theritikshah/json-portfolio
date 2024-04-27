"use client";
import { useEffect, useState } from "react";
import Header from "./components/header";
import Section from "./components/section";
import Footer from "./components/footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, defaultTheme } from "./themeConfig";

export default function Home() {
  const [profileData, setProfileData] = useState(undefined);
  const [theme, setTheme] = useState(defaultTheme);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("data/profile.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTheme(data.theme);
        setProfileData(data);
      });
  }, []);

  return profileData ? (
    <ThemeProvider
      theme={{
        ...(darkMode ? theme.dark : theme.default),
        homeBackground: `images/mesh-gradient-${
          darkMode ? "dark" : "light"
        }.png`,
      }}
    >
      <GlobalStyles />
      <Header
        brand={profileData.brand}
        sections={profileData.sections?.map((section) => section.name)}
        themeTogglerOpted={
          profileData.options?.darkMode !== undefined
            ? profileData.options.darkMode
            : true
        }
        darkMode={darkMode}
        setDarkMode={setDarkMode}
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
