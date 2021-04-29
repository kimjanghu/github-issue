import React from "react";
import styled from "styled-components";

import { NAV_MANU } from "../../utils/constants";

import TypeButton from "../Buttons/TypeButton";
import OperationButton from "../Buttons/OperateButton";

const NEW_LABEL = "New label"
const NEW_MILESTONE = "New milestone"

const Navbar = ({ type, setType, newTypeFlag, setNewTypeFlag }) => {
  const selectedNewType = type === NAV_MANU.LABELS ? NEW_LABEL : NEW_MILESTONE
  return (
    <Navigation>
      <Wrapper newTypeFlag={newTypeFlag}>
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
            name={selectedNewType} 
            setNewTypeFlag={setNewTypeFlag} 
            newTypeFlag={newTypeFlag}
            buttonType={true}
          />
        </div>
      </Wrapper>
    </Navigation>
  )
}
const Navigation = styled.div`
  margin: 32px 0;
`
const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`
const Type = styled.div`
  display: flex;
`
      
export default Navbar;