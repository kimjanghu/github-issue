import React from "react";
import styled from "styled-components";
import LabelItems from "./LabelItems";

const LabelList = ({ labels }) => {
  const labelItem = labels.map((label) =>{
    const { id, name, description, color } = label
    return (
      <LabelItems 
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