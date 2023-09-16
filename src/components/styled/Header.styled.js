import styled from "styled-components";

export const StyledHamburgerBar = styled.div`
  width: ${({ topHeight }) => topHeight * 0.9}px;
  height: ${({ topHeight }) => topHeight / 7}px;
  background-color: ${({ StyledHamburgerBarColour_closed }) =>
    StyledHamburgerBarColour_closed || "black"};
  border-radius: 2px;
  margin: ${({ topHeight }) => topHeight / 7}px 0;
  transition: 0.4s;

  &.change1 {
    transform: translate(0, ${({ topHeight }) => topHeight / 3.5}px)
      rotate(-45deg);
    background-color: ${({ StyledHamburgerBarColour_open }) =>
      StyledHamburgerBarColour_open || "white"};
  }
  &.change2 {
    opacity: 0;
    background-color: ${({ StyledHamburgerBarColour_open }) =>
      StyledHamburgerBarColour_open || "white"};
  }
  &.change3 {
    transform: translate(0, -${({ topHeight }) => topHeight / 3.5}px)
      rotate(45deg);
    background-color: ${({ StyledHamburgerBarColour_open }) =>
      StyledHamburgerBarColour_open || "white"};
  }
`;

export const StyledHamburgerBarContainer = styled.div`
  cursor: pointer;
  padding: ${({ topHeight }) => topHeight / 7}px 10px;
  backgroundcolor: ${({ barContainerColour }) => barContainerColour || "#fff"};
  z-index: 1;
`;

export const StyledNavMenuLogoSection = styled.div`
  margin-right: 10px;
`;

export const StyledNavMenuTopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledNavMenuContentSection_a = styled.a`
  all: unset;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const StyledNavMenuContentSection_li = styled.li`
  list-style: none;
  display: block;
  padding: 35px 10px;
  font-size: larger;
`;

export const StyledNavMenuContentSection = styled.ul`
  display: block;
  position: absolute;
  background-color: ${({ headerNavColour }) => headerNavColour || "black"};
  color: ${({ headerNavTextColour }) => headerNavTextColour || "white"};
  text-align: center;
  margin: 0;
  padding: ${({ topHeight }) => topHeight}px 0 0 0;
  width: 100%;
  left: 0%;
  top: 0;
  height: calc(100vh - ${({ topHeight }) => topHeight}px);
  opacity: 1;
  transition: left 0.3s ease-out, opacity 0.3s ease-out;

  &.closed {
    left: -100%;
    opacity: 0;
  }
`;

export const StyledNavMenu = styled.nav`
  margin: 0;
  padding: 0;
  line-height: 0;
  position: fixed;
  width: 100%;
`;
