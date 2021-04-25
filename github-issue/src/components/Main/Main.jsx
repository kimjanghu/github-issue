import React, { useState } from "react";
import styled from "styled-components";

import { NAV_MANU } from "../../utils/constants"

import Navbar from "../Navbar/Navbar";
import LabelsWrapper from "../Labels/LabelsWrapper";

const MainSection = styled.section`
  width: 80%;
  margin: 0 auto;
`

const Main = ({ labels, setLabels }) => {
  const [type, setType] = useState(NAV_MANU.LABELS)
  
  return (
    <MainSection>
      <Navbar 
        type={type} 
        setType={setType}
        labels={labels}
        setLabels={setLabels}
      />
      <LabelsWrapper
        labels={labels}
        setLabels={setLabels}
      />
    </MainSection>
  );
};

export default Main;