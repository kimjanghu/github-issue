import React, { useState } from "react";
import styled from "styled-components";

import { NAV_MANU, BUTTON_NAME } from "../../utils/constants";

import TypeButton from "../Buttons/TypeButton";
import OperationButton from "../Buttons/OperateButton";
import LabelsFormSection from "../Labels/LabelsFormSection";

const LabelsNavbar = ({ type, setType, setLabels }) => {
  const [newLabelFlag, setNewLabelFlag] = useState(false)

  return (
    <Navigation>
      <Wrapper newLabelFlag={newLabelFlag}>
        <Type>
          <TypeButton 
            name={NAV_MANU.LABELS} 
            typeFlag={type===NAV_MANU.LABELS}
            setType={setType}
          />
          <TypeButton 
            name={NAV_MANU.MILESTONES} 
            typeFlag={type===NAV_MANU.MILESTONES} 
            setType={setType} 
          />
        </Type>
        <div>
          <OperationButton 
            name={BUTTON_NAME.NEW_LABEL} 
            setNewLabelFlag={setNewLabelFlag} 
            newLabelFlag={newLabelFlag}
            buttonType={true}
          />
        </div>
      </Wrapper>
      <LabelsFormSection 
        newLabelFlag={newLabelFlag} 
        setNewLabelFlag={setNewLabelFlag}
        setLabels={setLabels}
        labelItemData={false}
      />
    </Navigation>
  )
}
const Navigation = styled.div`
  margin: 32px 0;
`
const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ newLabelFlag }) => "32px"};
`
const Type = styled.div`
  display: flex;
`
      
export default LabelsNavbar;