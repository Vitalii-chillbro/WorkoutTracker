import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #333;
  padding: 1rem;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

const NavItem = styled.li``;

const StyledLink = styled(Link)<{ $active: boolean }>`
  color: white;
  text-decoration: none;
  background-color: ${({ $active }) => ($active ? "#555" : "transparent")};
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    text-decoration: underline;
  }
`;

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <Nav>
      <NavList>
        <NavItem>
          <StyledLink to="/day-one" $active={location.pathname === "/day-one"}>
            Day One
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/day-two" $active={location.pathname === "/day-two"}>
            Day Two
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink
            to="/day-three"
            $active={location.pathname === "/day-three"}
          >
            Day Three
          </StyledLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
