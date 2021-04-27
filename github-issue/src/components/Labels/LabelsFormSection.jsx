import React, { useState } from "react";
import styled from "styled-components";
import { LABEL_FORM, BUTTON_NAME, DEFALUT_VALUE } from "../../utils/constants"
import { selectColor } from "../../utils/utils"
import { getLabels, postLabels, editLabels } from "../../api/api"

import Label from "./Label"
import OperateButton from "../Buttons/OperateButton"

const LabelsFormSection = ({ 
  newLabelFlag, 
  setNewLabelFlag, 
  setLabels, 
  labelItemData = {
    id: null,
    name: "",
    description: "",
    color: DEFALUT_VALUE.DEFAULT_COLOR
  }, 
  onClickDeleteLabel 
}) => {
  const { 
    id: editFlag, 
    name: editName, 
    description: editDescription, 
    color: editColor 
  } = labelItemData
  const [buttonFlag, setButtonFlag] = useState(editFlag ? false : true)
  const [formData, setFormData] = useState({
    name: editName,
    description: editDescription,
    color: editColor
  })
  const { name, description, color } = formData
  const createLabel = labelItemData.id ? BUTTON_NAME.SAVE_CHANGES : BUTTON_NAME.CREATE_LABEL
  
  const onChangeData = (e) => {
    const { value, name } = e.target
    if (name === "name") value ? setButtonFlag(false) : setButtonFlag(true)
      
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const onClickColor = () => {
    const selectedColor = selectColor()
    setFormData({
      ...formData,
      color: selectedColor
    })
  }

  const onSubmitFormData = async (e) => {
    e.preventDefault()
    editFlag ? await editLabels(formData, editFlag) : await postLabels(formData)
    const labelData = await getLabels()
    setLabels(() => [...labelData])
    setNewLabelFlag(false)
    setFormData({
      name: "",
      description: "",
      color: DEFALUT_VALUE.DEFAULT_COLOR
    })
  }

  return (
    <Wrapper 
      newLabelFlag={newLabelFlag}
      editFlag={editFlag}
    >
      <Header>
        <Label 
          labelName={name || DEFALUT_VALUE.LABEL_PREVIEW}
          color={color}
        />
        <Button 
          editFlag={editFlag}
          onClick={onClickDeleteLabel}
        >
          Delete
        </Button>
      </Header>
      <FormWrapper>
        <Form onSubmit={onSubmitFormData}>
          <FormLabelWrapper>
            <LabelWrapper>
              <label>{LABEL_FORM.LABEL_NAME}</label>
              <input
                name="name"
                onChange={onChangeData}
                className="label-name-label"
                placeholder={LABEL_FORM.LABEL_NAME} 
                value={name}
              />
            </LabelWrapper>
            <LabelWrapper>
              <label>{LABEL_FORM.DESCRIPTION}</label>
              <input 
                name="description"
                onChange={onChangeData}
                className="description-label"
                placeholder={LABEL_FORM.DESCRIPTION + " (optional)"} 
                value={description}
              />
            </LabelWrapper>
            <LabelWrapper>
              <label>{LABEL_FORM.COLOR}</label>
              <ColorBox 
                color={color}
                onClick={onClickColor} 
              />
            </LabelWrapper>
            <ColorCode>{color}</ColorCode>
          </FormLabelWrapper>
          <FormOperationWrapper>
            <OperateButton 
              name={BUTTON_NAME.CANCEL} 
              buttonType={false} 
              setNewLabelFlag={setNewLabelFlag} 
              newLabelFlag={setNewLabelFlag}
            />
            <SubmitButton disabled={buttonFlag}>{createLabel}</SubmitButton>
          </FormOperationWrapper>
        </Form>
      </FormWrapper>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: ${({ newLabelFlag }) => newLabelFlag ? "block" : "none" };
  width: 100%;
  padding: 24px;
  background-color: ${({ editFlag }) => editFlag ? "#fff" : "#ebedf1"};
  border: 1px solid #dbdee2
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const Button = styled.button`
  display: ${({ editFlag }) => editFlag ? "block" : "none"};
  cursor: pointer;
  border: none;
  background: none;
`

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 32px;
`

const Form = styled.form`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
`

const FormLabelWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 16px;
  }

  .label-name-label {
    width: 250px;
  }

  .description-label {
    width: 400px;
  }

  input {
    padding: 0 16px;
    margin-top: 8px;
    height: 40px;
  }

  & + & {
    margin-left: 16px;
  }
`

const FormOperationWrapper = styled.div`
  display: flex;
`
const ColorBox = styled.div`
  display: inline-block;
  background-color: ${({ color }) => color};
  margin-top: 8px;
  width: 40px;
  height: 40px;
  border-radius: 3px;
`

const ColorCode = styled.div`
  margin-left: 8px;
  padding: 10px 16px;
  border: 1px solid #000;
`

const SubmitButton = styled.button`
  position: relative;
  border: 1px solid #fff;
  padding: 10px 16px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  background-color: #31c453;
  
  &:disabled::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(256, 256, 256, 0.5);
  }
`


export default LabelsFormSection;