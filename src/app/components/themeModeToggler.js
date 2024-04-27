import styled from "styled-components";

const ToggleButton = styled.input`
  opacity: 0;
  position: absolute;
  &:checked + label div {
    transform: translateX(25px);
  }
`;

const ToggleBase = styled.label`
  width: 60px;
  height: 35px;
  background-color: ${({ theme }) => theme.accentColor};
  display: flex;
  border-radius: 20px;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
  position: relative;
`;

const ToggleBall = styled.div`
  width: 25px;
  height: 25px;
  background-color: white;
  position: absolute;
  left: 5px;
  border-radius: 50%;
  transition: transform 0.2s linear;
`;

export default function ThemeModeToggler({ darkMode, setDarkMode }) {
  return (
    <span>
      <ToggleButton
        type="checkbox"
        id="darkModeCheckbox"
        onChange={() => setDarkMode(!darkMode)}
        checked={darkMode}
      />
      <ToggleBase htmlFor="darkModeCheckbox">
        <span>🌙</span>
        <span>🌞</span>
        <ToggleBall />
      </ToggleBase>
    </span>
  );
}
