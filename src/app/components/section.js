import styled from "styled-components";
import Subsection from "./subsection";

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18vh 8rem;
  min-height: 100vh;
  width: 100%;
  background: ${(props) =>
    props.home
      ? "url('/images/home-background1.jpeg'), linear-gradient(90deg, #30d63a, #dfc014)"
      : props.index && props.index % 2 == 0
      ? "#fafafa"
      : "#ffffff"};
  background-blend-mode: screen;
  background-size: cover;
  ${(props) =>
    props.home
      ? `
        display: grid;
        place-items: center;
      `
      : ""}
  @media screen and (max-width: 768px) {
    padding: 18vh 1.5rem;
  }
`;

const StyledHeading = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem 10rem;
  flex-direction: column;
  text-align: center;
  color: grey;
  h1 {
    line-height: 3rem;
    font-size: ${(props) => (props.home ? "4rem" : "2rem")};
  }
  p {
    font-size: ${(props) => (props.home ? "2rem" : "1rem")};
  }
  @media screen and (max-width: 768px) {
    padding: 1rem;
    h1 {
      font-size: ${(props) => (props.home ? "2.5rem" : "2rem")};
    }
    p {
      font-size: ${(props) => (props.home ? "1.5rem" : "1rem")};
    }
  }
`;

const SubsectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: 3rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default function Section({ data, index }) {
  return (
    <section id={data.name}>
      <SectionWrapper home={data.type === "home"} index={index}>
        <StyledHeading home={data.type === "home"}>
          <h1 dangerouslySetInnerHTML={{ __html: data.heading }}></h1>
          <p>{data.description}</p>
        </StyledHeading>
        {data.subsections && (
          <SubsectionContainer columns={data.columns}>
            {data.subsections.map((subsection, idx) => (
              <Subsection
                key={`${data.name}_subsection_${idx}`}
                data={subsection}
              ></Subsection>
            ))}
          </SubsectionContainer>
        )}
      </SectionWrapper>
    </section>
  );
}
