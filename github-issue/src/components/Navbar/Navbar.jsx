import React from "react";
import styled from "styled-components";

import { NAV_MANU, BUTTON_NAME } from "../../utils/constants";

import TypeButton from "../Buttons/TypeButton";
import OperationButton from "../Buttons/OperateButton";

const LabelsNavbar = ({ type, setType, setNewLabelFlag, newLabelFlag }) => {
  return (
    <Wrapper>
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
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 32px 0;
`
const Type = styled.div`
  display: flex;
`
      
export default LabelsNavbar;