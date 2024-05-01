import styled from "styled-components";

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

export default function ButtonGroup({ groupName, buttons }) {
  return (
    <Buttons>
      {buttons.map((button, idx) => (
        <StyledButton key={`${groupName}_button_${idx}`} href={button.link}>
          {button.text}
        </StyledButton>
      ))}
    </Buttons>
  );
}
