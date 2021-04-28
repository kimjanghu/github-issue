import React, { useContext } from "react";
import styled from "styled-components";
import LabelItem from "./LabelItem";
import { LabelsContext } from "./LabelsWrapper";

const LabelList = () => {
  const { labelsState: { labels } } = useContext(LabelsContext)
  const labelItem = labels.map((label) =>{
    const { id, name, description, color } = label
    return (
      <LabelItem 
        id={id} 
        name={name} 
        description={description} 
        color={color} 
        key={label.id}
      />
    )
  })
  return (
    <LabelListWrapper>
      {labelItem}
    </LabelListWrapper>
  )
}

const LabelListWrapper = styled.ul`

`

export default LabelList;