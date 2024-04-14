import styled from "styled-components";

const StyledBadges = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Badge = styled.li`
  list-style: none;
  display: inline-block;
  padding: 0.25rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  font-weight: 400;
  background-color: #${(props) => props.color}30;
  color: #${(props) => props.color};
`;

export default function Badges({ data }) {
  const randomColor = () => {
    let randomColor = "";
    while (randomColor.length < 6) {
      let random = Math.floor(Math.random() * 200).toString(16);
      randomColor += random;
    }
    return randomColor.substring(0, 6);
  };

  return (
    <>
      <StyledBadges>
        {data.map((badge, idx) => (
          <Badge color={`${randomColor()}`} key={`badge_${idx}`}>
            {badge}
          </Badge>
        ))}
      </StyledBadges>
    </>
  );
}
