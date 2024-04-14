"use client";
import { useEffect, useState } from "react";
import Header from "./components/header";
import Section from "./components/section";

export default function Home() {
  const [profileData, setProfileData] = useState(undefined);
  useEffect(() => {
    fetch("/data/profile.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProfileData(data);
      });
  }, []);

  return profileData ? (
    <>
      <Header
        brand={profileData.brand}
        sections={profileData.sections?.map((section) => section.name)}
      />
      {profileData.sections?.map((section, idx) => (
        <Section
          data={section}
          index={idx}
          topLevel
          key={`section_${section.name}_${idx}`}
        />
      ))}
    </>
  ) : (
    <div>Data not available</div>
  );
}
