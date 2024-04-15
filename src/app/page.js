"use client";
import { useEffect, useState } from "react";
import Header from "./components/header";
import Section from "./components/section";
import Subsection from "./components/subsection";

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
          $index={idx}
          $topLevel
          key={`section_${section.name}_${idx}`}
        />
      ))}
    </>
  ) : (
    <div>
      <Subsection
        data={{
          name: "project3",
          type: "media-item",
          heading: "Gradient Generator",
          mediaDetails: {
            type: "image",
            src: "/images/home-background.jpeg",
          },
          description:
            "This website helps developers to generate Gradients Background.",
          badges: ["HTML", "CSS", "Javascript"],
          buttons: [
            {
              text: "Visit",
              link: "https://www.anmolagrawal.dev/gradient-generator/",
            },
          ],
        }}
      />
    </div>
  );
}
