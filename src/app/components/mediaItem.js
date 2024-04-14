import styled from "styled-components";
import Section from "./section";

const MediaItemContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 3rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

export default function MediaItem({ data }) {
  const subsections = [
    {
      name: `${data.name}_description`,
      type: "paragraph",
      heading: data.heading,
      content: data.description,
    },
  ];
  if (data.badges) {
    subsections.push({
      name: `${data.name}_badges`,
      type: "badges",
      heading: "",
      badges: data.badges,
    });
  }
  return (
    <MediaItemContainer>
      <div>
        <img src={data.mediaDetails.src} alt="" />
      </div>
      <Section
        data={{
          name: data.name,
          type: "default",
          columns: 1,
          subsections: subsections,
          buttons: data.buttons,
        }}
      />
    </MediaItemContainer>
  );
}
