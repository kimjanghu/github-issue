import React, { useState, useEffect, useReducer } from "react";
import styled from "styled-components";
import { getLabels } from "../../api/api";
import { LabelsContext } from "./LabelsContext"
import LabelList from "./LabelList";
import LabelsFormSection from "./LabelsFormSection";

const initialLabelState = { labels: [] };

const labelReducer = (state, action) => {
  switch (action.type) {
    case "SET_LABELS":
      return { labels: [...action.payload] }
    default:
      throw new Error();
  }
}

export const LabelsWrapper = ({ newTypeFlag, setNewTypeFlag }) => {
  const [labelsState, labelsDispatch] = useReducer(labelReducer, initialLabelState)
  const { labels } = labelsState
  useEffect(() => {
    const fetchData = async () => {
      const labelData = await getLabels();
      labelsDispatch({ type: "SET_LABELS", payload: [...labelData] })
    };
    fetchData();
  }, []);
  
  return (
    <LabelsContext.Provider value={{ labelsState, labelsDispatch }}>
      <LabelsFormSection 
        newTypeFlag={newTypeFlag} 
        setNewTypeFlag={setNewTypeFlag}
      />
      <Header>{labels.length} labels</Header>
      <LabelList />
    </LabelsContext.Provider>
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