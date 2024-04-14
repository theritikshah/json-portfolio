import styled from "styled-components";
import Badges from "./badges";

const StyledSubsection = styled.div`
  padding: 2rem 0;
`;

const StyledHeading = styled.h3`
  padding: 1rem 0;
`;

export default function Subsection({ data }) {
  return (
    <StyledSubsection>
      <StyledHeading>{data.heading}</StyledHeading>
      {data.type === "paragraph" ? (
        <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
      ) : data.type === "badges" ? (
        <Badges data={data.badges} />
      ) : (
        <code>{JSON.stringify(data)}</code> // Todo: Handle all other type of sub sections.
      )}
    </StyledSubsection>
  );
}
