import _ from "lodash";
import Image from "next/image";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: var(--accentLightColor);
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
  color: var(--brandColor);
`;

const StyledNav = styled.nav`
  display: grid;
  place-items: center;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    list-style: none;
  }
`;

const StyledLinks = styled.li`
  padding: 0.5rem 1rem;

  a {
    text-decoration: none;
    font-weight: bold;
    color: var(--primaryColor);
  }
`;

export default function Header({ brand, sections }) {
  return (
    <>
      <StyledHeader>
        <Brand>
          <Image
            src={brand.image}
            alt={`${brand.name}_logo`}
            width={60}
            height={60}
          />
          <BrandName>{brand.name}</BrandName>
        </Brand>
        <StyledNav>
          <ul>
            {sections.map((section, idx) => (
              <StyledLinks key={`section_${idx}`}>
                <a href={`#${section}`}>{_.startCase(section)}</a>
              </StyledLinks>
            ))}
          </ul>
        </StyledNav>
      </StyledHeader>
    </>
  );
}
