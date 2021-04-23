import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import LabelsWrapper from "../Labels/LabelsWrapper";
import LabelsFormSection from "../Labels/LabelsFormSection"

const MainSection = styled.section`
  width: 80%;
  margin: 0 auto;
`

const Main = ({ labels }) => {
  const [type, setType] = useState("Labels")
  const [newLabelFlag, setNewLabelFlag] = useState(false)

  return (
    <MainSection>
      <Navbar 
        type={type} 
        setType={setType} 
        setNewLabelFlag={setNewLabelFlag} 
        newLabelFlag={newLabelFlag}
      />
      <LabelsFormSection 
        newLabelFlag={newLabelFlag} 
      />
      <LabelsWrapper
        labels={labels}
      />
    </MainSection>
  );
};

export default Main;