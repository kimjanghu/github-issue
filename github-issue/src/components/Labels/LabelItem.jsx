import React, { useState, useContext } from "react";
import styled from "styled-components";
import { getLabels, deleteLabels } from "../../api/api"

import Label from "./Label";
import LabelsFormSection from './LabelsFormSection';
import { LabelsContext } from "./LabelsWrapper";

const LabelItem = ({ id, name, description, color }) => {
  const { labelsDispatch } = useContext(LabelsContext)
  const [editLabelFlag, setEditLabelFlag] = useState(false)
  const labelItemData = {
    id, 
    name,
    description,
    color
  }
  const onClickToggleEditForm = () => setEditLabelFlag(!editLabelFlag)

  const onClickDeleteLabel = async (e) => {
    e.preventDefault()
    await deleteLabels(id)
    const labelData = await getLabels()
    labelsDispatch({ type: "SET_LABELS", payload: [...labelData] })
    if (editLabelFlag) {
      setEditLabelFlag(false)
    }
  }

  return (
    <>
      <LabelItemWrapper data-label-id={id} editLabelFlag={editLabelFlag}>
        <Label labelName={name} color={color}/>
        <div>
          {description}
        </div>
        <GridDummyElement></GridDummyElement>
        <LabelButtonWrapper>
          <Button onClick={onClickToggleEditForm}>Edit</Button>
          <Button onClick={onClickDeleteLabel}>Delete</Button>
        </LabelButtonWrapper>
      </LabelItemWrapper>
      <LabelsFormSection 
        newTypeFlag={editLabelFlag}
        setNewTypeFlag={setEditLabelFlag}
        labelItemData={labelItemData}
        onClickDeleteLabel={onClickDeleteLabel}
      />
    </>
  )
}

const LabelItemWrapper = styled.li`
  display: ${({ editLabelFlag }) => editLabelFlag ? "none" : "grid"};
  border: 1px solid #dbdee2;
  height: 60px;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  padding: 16px;
`

const GridDummyElement = styled.div``

const LabelButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Button = styled.button`
  cursor: pointer;
  border: none;
  background: none;
`

export default LabelItem;