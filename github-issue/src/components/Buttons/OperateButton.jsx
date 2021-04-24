import React from "react";
import styled from "styled-components";

// Normal background color: #F8FAFB
const Button = styled.div`
  border: 1px solid #fff;
  padding: 10px 16px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  color: ${({ buttonType }) => buttonType ? "#fff" : "#000"};
  background-color: ${({ buttonType }) => buttonType ? "#31c453" : "#ebedf1"};
`

const OperateButton = ({ name, setNewLabelFlag, newLabelFlag, buttonType }) => {
  const toggleNewLabelFlag = () => {
    setNewLabelFlag(!newLabelFlag)
  }
  return (
    <Button buttonType={buttonType} onClick={toggleNewLabelFlag}>
      {name}
    </Button>
  )
}

export default OperateButton;