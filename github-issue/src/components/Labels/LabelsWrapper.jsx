import React from "react";
import styled from "styled-components";
import LabelList from "./LabelList";
import LabelsFormSection from "./LabelsFormSection";

const LabelsWrapper = ({ labels, setLabels, newTypeFlag, setNewTypeFlag }) => {
  const labelLength = labels.length
  
  return (
    <>
      <LabelsFormSection 
        newTypeFlag={newTypeFlag} 
        setNewTypeFlag={setNewTypeFlag}
        setLabels={setLabels}
      />
      <Header>{labelLength} labels</Header>
      <LabelList 
        labels={labels} 
        setLabels={setLabels}
      />
    </>
  )
}

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #ebedf1;
  border: 1px solid #dbdee2;
  padding-left: 16px;
  font-weight: bold;
  font-size: 16px;
`

export default LabelsWrapper;