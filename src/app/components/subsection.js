import styled from "styled-components";
import Badges from "./badges";
import MediaItem from "./mediaItem";
import HR from "./hr";

const StyledSubsection = styled.div`
  padding: ${(props) => (props.topLevel ? "2rem 0" : "0")};
`;

const StyledHeading = styled.h3`
  padding-bottom: 1rem;
`;

export default function Subsection({ data, topLevel }) {
  return (
    <StyledSubsection topLevel={topLevel}>
      {data.type !== "media-item" && data.heading && (
        <StyledHeading>{data.heading}</StyledHeading>
      )}
      {data.type === "paragraph" ? (
        <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
      ) : data.type === "badges" ? (
        <Badges data={data.badges} />
      ) : data.type === "media-item" ? (
        <MediaItem data={data} />
      ) : data.type === "hr" ? (
        <HR />
      ) : (
        <code>{JSON.stringify(data)}</code> // Todo: Handle all other type of sub sections.
      )}
    </StyledSubsection>
  );
}
