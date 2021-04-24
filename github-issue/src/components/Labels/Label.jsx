import React from "react";
import styled from "styled-components";

const Label = ({ labelName, color }) => {
  return (
    <LabelWrapper color={color}>
      {labelName}
    </LabelWrapper>
  )
}

const LabelWrapper = styled.div`
  display: inline-block;
  padding: 8px;  
  border-radius: 3px;
  background-color: ${({ color }) => color};
  color: #000;
  font-weight: bold;
`

export default Label;