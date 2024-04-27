import _ from "lodash";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import ThemeModeToggler from "./themeModeToggler";

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.accentSecondaryColor};
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.7);
  min-height: 12vh;
  position: fixed;
  z-index: 1;
`;

const Brand = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: start;
  align-items: center;
  gap: 1rem;
`;

const BrandName = styled.span`
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.brandColor};
`;

const fade = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const NavLinksContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 12vh;
    background-color: ${({ theme }) => theme.accentSecondaryColor};
    height: 88vh;
    right: 0px;
    flex-direction: column;
    width: 50%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
    box-shadow: -10px 20px 20px rgba(0, 0, 0, 0.5);
    justify-content: flex-start;
    &.nav-active {
      transform: translateX(0%);
    }
  }
`;

const StyledLinks = styled.li`
  display: block;
  height: 8vh;
  margin: 0.6rem 1rem;
  transition: all 0.5s ease;
  &.active {
    color: ${({ theme }) => theme.primaryTextColor};
    border-bottom: 2px solid ${({ theme }) => theme.accentColor};
  }
  a {
    display: grid;
    place-items: center;
    height: 100%;
    width: 100%;
    color: inherit;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 3px;
  }
  @media screen and (max-width: 768px) {
    opacity: 0;
    height: 15%;
    display: none;
    border-bottom: 2px solid ${({ theme }) => theme.accentColor};
    &:last-child {
      border-bottom: none;
    }
    &.nav-active-li {
      display: block;
      animation: ${fade} 0.5s ease-in forwards
        ${(props) => props.$animationDelay}s;
    }
  }
`;

const Ham = styled.div`
  display: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  div {
    background-color: ${({ theme }) => theme.brandColor};
    width: 25px;
    height: 3px;
    margin: 5px;
    transition: all 0.3s ease;
  }
  @media screen and (max-width: 768px) {
    display: block;
    &.trigger .line1 {
      transform: rotate(45deg) translate(0px, 6px);
    }

    &.trigger .line2 {
      display: none;
    }

    &.trigger .line3 {
      transform: rotate(-45deg) translate(0px, -6px);
    }
  }
`;

export default function Header({
  brand,
  sections,
  darkMode,
  setDarkMode,
  themeTogglerOpted,
}) {
  const [activeTab, setActiveTab] = useState(sections[0]);
  const [isHamActive, setisHamActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section.topLevel");

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveTab(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <StyledNav>
        <Brand>
          <Image
            src={brand.image}
            alt={`${brand.name}_logo`}
            width={60}
            height={60}
          />
          <BrandName>{brand.name}</BrandName>
        </Brand>
        <NavLinksContainer className={isHamActive ? "nav-active" : ""}>
          {sections.map((section, idx) => (
            <StyledLinks
              $animationDelay={idx / sections.length + 0.5}
              key={`section_${idx}`}
              className={`${activeTab === section && "active"} ${
                isHamActive && "nav-active-li"
              }`}
              onClick={() => {
                if (isHamActive) {
                  setisHamActive(false);
                }
              }}
            >
              <a href={`#${section}`}>{_.startCase(section)}</a>
            </StyledLinks>
          ))}
          {themeTogglerOpted && (
            <ThemeModeToggler darkMode={darkMode} setDarkMode={setDarkMode} />
          )}
        </NavLinksContainer>
        <Ham
          onClick={() => {
            setisHamActive(!isHamActive);
          }}
          className={isHamActive ? "trigger" : ""}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </Ham>
      </StyledNav>
    </>
  );
}
