import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #222823;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -80px;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 12px 24px;
  max-width: 1100px;
`;

export const NavLogo = styled.img`
  scale: 0.8;
  cursor: pointer;
`;
