import styled from "styled-components";

export const HeaderContainer = styled.header`
  align-items: center;
  background-color: #565259;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 64px 96px 40px 96px;
  transition: all 0.2s ease-in-out;

  & svg:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 32px 24px 20px 24px;
  }
`;

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LinkItem = styled.a`
  color: #ffffff;
  cursor: pointer;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  opacity: 0.75;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
