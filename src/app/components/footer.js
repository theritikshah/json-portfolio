import styled from "styled-components";
import Copyright from "./copyright";
import Subsection from "./subsection";

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #000000ee;
`;

const FooterMain = styled.div`
  padding: 7rem 15rem;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 10rem;
  @media screen and (max-width: 768px) {
    padding: 2rem;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Socials = styled.div`
  //   background-color: red;
  h3 {
    padding-bottom: 1rem;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;
  }
  a {
    text-decoration: none;
    font-size: 2.25rem;
    color: #ffffff;
  }
`;

export default function Footer({ appName, data }) {
  return (
    <StyledFooter>
      <FooterMain>
        <Subsection
          data={{
            name: "footer",
            type: "paragraph",
            heading: data.heading,
            content: data.content,
          }}
        />
        {data.socials && (
          <Socials>
            <h3>Socials</h3>
            <ul>
              {data.socials.map((social, idx) => (
                <li key={`social_${social.name}_link_${idx}`}>
                  <a href={social.link}>
                    <i className={social.icon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </Socials>
        )}
      </FooterMain>
      <Copyright appName={appName} />
    </StyledFooter>
  );
}
