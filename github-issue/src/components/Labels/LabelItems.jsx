import React from "react";
import styled from "styled-components";

import Label from "./Label";

const LabelItems = ({ id, name, description, color }) => {

  return (
    <LabelItemWrapper data-label-id={id}>
      <Label labelName={name} color={color}/>
      <div>
        {description}
      </div>
      <DummyElement></DummyElement>
      <LabelButtonWrapper>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </LabelButtonWrapper>
    </LabelItemWrapper>
  )
}

const LabelItemWrapper = styled.li`
  border: 1px solid #dbdee2;
  height: 60px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  padding: 16px;
`

const DummyElement = styled.div``

const LabelButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Button = styled.button`
  border: none;
  background: none;
`

export default LabelItems;