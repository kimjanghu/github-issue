import React, { useState } from "react";
import styled from "styled-components";
import LabelsNavbar from "../Labels/LabelsNavbar";
import LabelsWrapper from "../Labels/LabelsWrapper";

const MainSection = styled.section`
  width: 80%;
  margin: 32px auto;
`

const Main = ({ labels }) => {
  const [type, setType] = useState("Labels")

  return (
    <MainSection>
      <LabelsNavbar type={type} setType={setType} />
      <LabelsWrapper labels={labels} />
    </MainSection>
  );
};

export default Main;