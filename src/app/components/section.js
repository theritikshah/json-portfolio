import styled from "styled-components";
import Subsection from "./subsection";
import convert from "color-convert";

const hexToHSLString = (hex) =>
  convert.hex
    .hsl(hex)
    .map((value, index) =>
      index === 0 ? `hsl(${value}` : index === 2 ? `${value}%)` : `${value}%`
    )
    .join(",");

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: ${(props) => (props.$topLevel ? "18vh 8rem" : "1rem 0")};
  min-height: ${(props) => (props.$topLevel ? "100vh" : "")};
  width: 100%;
  background: ${(props) =>
    props?.$index === undefined
      ? "transparent"
      : props.$home
      ? props.theme.isDarkMode
        ? "black"
        : "white"
      : props.$index % 2 == 0
      ? props.theme.secondaryBackgroundColor
      : props.theme.primaryBackgroundColor};
  background-image: ${(props) =>
    props.$home
      ? `radial-gradient(
      at 1% 2%,
      ${hexToHSLString(props.theme.accentColor)} 0px,
      transparent 50%
    ),
    radial-gradient(at 99% 98%, ${hexToHSLString(
      props.theme.accentSecondaryColor
    )} 0px, transparent 50%)`
      : ""};
  background-size: cover;
  transition: all 0.5s;
  ${(props) =>
    props.$home
      ? `
        display: grid;
        place-items: center;
      `
      : ""}
  @media screen and (max-width: 768px) {
    padding: ${(props) => (props.$topLevel ? "18vh 1.5rem" : "0")};
  }
`;

const StyledHeading = styled.div`
  display: flex;
  gap: 1rem;
  padding: ${(props) => (props.$topLevel ? "1rem 10rem 3rem" : "0")};
  flex-direction: column;
  text-align: center;
  color: ${({ theme }) => theme.secondaryTextColor};
  h1 {
    line-height: 3rem;
    font-size: ${(props) => (props.$home ? "4rem" : "2rem")};
  }
  p {
    font-size: ${(props) => (props.$home ? "2rem" : "1rem")};
  }
  @media screen and (max-width: 768px) {
    padding: 1rem;
    h1 {
      font-size: ${(props) => (props.$home ? "2.5rem" : "2rem")};
    }
    p {
      font-size: ${(props) => (props.$home ? "1.5rem" : "1rem")};
    }
  }
`;

const SubsectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$columns}, 1fr);
  gap: ${(props) => (props.$topLevel ? "3rem" : "0.5rem")};
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 1.5rem 0;
  gap: 1rem;
`;

const StyledButton = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primaryTextColor};
  background: linear-gradient(
    163deg,
    ${({ theme }) => theme.accentSecondaryColor} 50%,
    ${({ theme }) => theme.accentColor} 100%
  );
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 1rem;
  transition: 1000ms;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  &:hover {
    transition: 1000ms;
    padding: 1rem 2rem;
  }
`;

export default function Section({ data, $index, $topLevel }) {
  return (
    <section id={data.name} className={$topLevel ? "topLevel" : ""}>
      <SectionWrapper
        $home={data.type === "home"}
        $index={$index}
        $topLevel={$topLevel}
      >
        {data.heading && (
          <StyledHeading $home={data.type === "home"} $topLevel={$topLevel}>
            <h1 dangerouslySetInnerHTML={{ __html: data.heading }}></h1>
            <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
          </StyledHeading>
        )}
        {data.subsections && (
          <SubsectionContainer $columns={data.columns} $topLevel={$topLevel}>
            {data.subsections.map((subsection, idx) => (
              <Subsection
                key={`${data.name}_subsection_${idx}`}
                data={subsection}
                $topLevel={$topLevel}
              ></Subsection>
            ))}
          </SubsectionContainer>
        )}
        {data.buttons && (
          <Buttons>
            {data.buttons.map((button, idx) => (
              <StyledButton
                key={`${data.name}_button_${idx}`}
                href={button.link}
              >
                {button.text}
              </StyledButton>
            ))}
          </Buttons>
        )}
      </SectionWrapper>
    </section>
  );
}
