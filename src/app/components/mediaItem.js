import styled from "styled-components";
import Section from "./section";
import Carousel from "./carousel";

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
  const renderMedia = () => {
    switch (data.mediaDetails.type) {
      case "image":
        return (
          <div>
            <img width="100%" src={data.mediaDetails.src} alt="" />
          </div>
        );
      case "video":
        return (
          <video
            width="100%"
            autoPlay={data.mediaDetails.autoplay || true}
            controls={data.mediaDetails.controls || false}
            loop={data.mediaDetails.loop || true}
            muted={data.mediaDetails.muted || true}
          >
            <source src={data.mediaDetails.src} type="video/mp4"></source>
            Your browser does not support HTML video.
          </video>
        );
      case "image-slide":
        return <Carousel name={data.name} images={data.mediaDetails.src} />;
    }
  };

  return (
    <MediaItemContainer>
      {renderMedia()}
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
