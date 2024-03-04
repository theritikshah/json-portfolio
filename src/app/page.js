"use client";
import { useEffect, useState } from "react";
import Header from "./components/header";
// import { promises as fs } from "fs";
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

    // const datafile = fs.readFile(
    //   process.cwd() + "/src/app/data/profile.json",
    //   "utf8"
    // );
  }, []);

  return profileData ? (
    <>
      <Header
        brand={profileData.brand}
        sections={profileData.sections?.map((section) => section.name)}
      />
      {profileData.sections?.map((section, idx) => (
        <Section data={section} key={`section_${section.name}_${idx}`} />
      ))}
    </>
  ) : (
    <div>Data not available</div>
  );
}
