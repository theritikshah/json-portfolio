import styled from "styled-components";

const StyledHR = styled.div`
  padding: 0;
  width: 10%;
  border: dotted var(--accentLightColor) 6px;
  border-bottom: none;
  margin: 2rem auto;
`;

export default function HR({ data }) {
  return <StyledHR></StyledHR>;
}
