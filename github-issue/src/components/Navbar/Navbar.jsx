import React from "react";
import styled from "styled-components";

import { NAV_MANU, BUTTON_NAME } from "../../utils/constants";

import TypeButton from "../Buttons/TypeButton";
import OperationButton from "../Buttons/OperateButton";

const Navbar = ({ type, setType, newTypeFlag, setNewTypeFlag }) => {
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
            name={BUTTON_NAME.NEW_LABEL} 
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