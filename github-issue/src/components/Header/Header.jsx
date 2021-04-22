import React from "react";
import styled from "styled-components";
const HeaderSection = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: #000;
  color: #fff;
  font-size: 24px;
`;

const Header = () => {
  const TITLE = "ISSUES"
  return (
    <HeaderSection>{TITLE}</HeaderSection>
  )
};

export default Header;