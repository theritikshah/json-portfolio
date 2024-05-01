import styled from "styled-components";
import Badges from "./badges";
import MediaItem from "./mediaItem";
import HR from "./hr";
import ButtonGroup from "./buttonGroup";

const StyledSubsection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function Subsection({ data }) {
  return (
    <>
      {data.type === "default" ? (
        <StyledSubsection>
          {data.heading && (
            <h3 dangerouslySetInnerHTML={{ __html: data.heading }}></h3>
          )}
          {data.content && (
            <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
          )}
          {data.badges && <Badges data={data.badges} />}
          {data.buttons && (
            <ButtonGroup groupName={data.name} buttons={data.buttons} />
          )}
        </StyledSubsection>
      ) : data.type === "media-item" ? (
        <MediaItem data={data} />
      ) : data.type === "hr" ? (
        <HR />
      ) : (
        <></>
      )}
    </>
  );
}
