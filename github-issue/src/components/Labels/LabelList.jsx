import React from "react";
import styled from "styled-components";
import LabelItem from "./LabelItem";

const LabelList = ({ labels, setLabels }) => {
  const labelItem = labels.map((label) =>{
    const { id, name, description, color } = label
    return (
      <LabelItem 
        id={id} 
        name={name} 
        description={description} 
        color={color} 
        key={label.id}
        setLabels={setLabels}
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