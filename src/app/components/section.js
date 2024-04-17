import styled from "styled-components";
import Subsection from "./subsection";

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: ${(props) => (props.$topLevel ? "18vh 8rem" : "1rem 0")};
  min-height: ${(props) => (props.$topLevel ? "100vh" : "")};
  width: 100%;
  background: ${(props) =>
    props.$home
      ? "url('images/home-background.jpeg'), linear-gradient(90deg, var(--accentLightColor), var(--accentColor))"
      : !props.$index
      ? "transparent"
      : props.$index % 2 == 0
      ? "#fafafa"
      : "#ffffff"};
  background-blend-mode: screen;
  background-size: cover;
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
  color: var(--secondaryColor);
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
  color: var(--primaryColor);
  background: linear-gradient(
    163deg,
    var(--accentLightColor) 50%,
    var(--accentColor) 100%
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
            <p>{data.description}</p>
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
