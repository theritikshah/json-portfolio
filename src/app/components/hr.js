import styled from "styled-components";

const StyledHR = styled.div`
  padding: 0;
  width: 10%;
  border: dotted ${({ theme }) => theme.accentSecondaryColor} 6px;
  border-bottom: none;
  margin: 2rem auto;
  grid-column: span 2;
`;

export default function HR({ data }) {
  return <StyledHR></StyledHR>;
}
