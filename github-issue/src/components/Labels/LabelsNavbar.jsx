import React from "react";
import styled from "styled-components";
import TypeButton from "../Buttons/TypeButton"
import OperationButton from "../Buttons/OperateButton"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const Type = styled.div`
  display: flex;
`

const LabelsNavbar = ({ type, setType }) => {
  return (
    <Wrapper>
      <Type>
        <TypeButton name="Labels" flag={type==="Labels"} setType={setType} />
        <TypeButton name="Milestones" flag={type==="Milestones"} setType={setType} />
      </Type>
      <div>
        <OperationButton name="New label" />
      </div>
    </Wrapper>
  )
}
      
export default LabelsNavbar;