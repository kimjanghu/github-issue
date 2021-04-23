import React from "react";
import styled from "styled-components";

import { NAV_MANU, BUTTON_NAME } from "../../utils/constants";

import TypeButton from "../Buttons/TypeButton";
import OperationButton from "../Buttons/OperateButton";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 32px 0;
`
const Type = styled.div`
  display: flex;
`

const labels = NAV_MANU.LABELS;
const milestones = NAV_MANU.MILESTONES;
const newLabel = BUTTON_NAME.NEW_LABEL;

const LabelsNavbar = ({ type, setType, setNewLabelFlag, newLabelFlag }) => {
  return (
    <Wrapper>
      <Type>
        <TypeButton name={labels} typeFlag={type===labels} setType={setType} />
        <TypeButton name={milestones} typeFlag={type===milestones} setType={setType} />
      </Type>
      <div>
        <OperationButton name={newLabel} setNewLabelFlag={setNewLabelFlag} newLabelFlag={newLabelFlag}/>
      </div>
    </Wrapper>
  )
}
      
export default LabelsNavbar;