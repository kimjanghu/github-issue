import React, { useState, useContext } from "react";
import styled from "styled-components";
import { postMilestones } from "../../api/api"
import { MilestonesContext } from "../../Context/Context"
import { BUTTON_NAME } from "../../utils/constants"
import OperateButton from "../Buttons/OperateButton"
import SubmitButton from "../Buttons/SubmitButton"

const TITLE = "Title"
const DUE_DATE = "Due date"
const DESCRIPTION = "Description"
const OPTIONAL = "optional"
const CREATE_MILESTONE = "Create milestone"

const initialFormData = {
  title: "",
  date: "",
  description: "",
  status: "open"
}

const MilestonesFormSection = ({ newTypeFlag, setNewTypeFlag }) => {
  const { milestoneDispatch } = useContext(MilestonesContext)
  const [milestonesFormData, setMilestonesFormData] = useState({
    title: "",
    date: "",
    description: "",
    status: "open"
  })

  const { title, date, description } = milestonesFormData

  const onMilestonesFormDataChange = ({ target }) => {
    const { value, name } = target
    setMilestonesFormData({
      ...milestonesFormData,
      [name]: value
    })
  }

  const onFormDataSubmit = async (e) =>{
    e.preventDefault()
    const newMilestoneData = await postMilestones(milestonesFormData)
    milestoneDispatch({ type: "SET_NEW_MILESTONES", payload: newMilestoneData })
    setNewTypeFlag(false)
    setMilestonesFormData({
      ...initialFormData
    })
  }

  return (
    <>
      <FormSection onSubmit={onFormDataSubmit}>
        <Form>
          <LabelWrapper>
            <label>{TITLE}</label>
            <input 
              onChange={onMilestonesFormDataChange}
              type="text"
              name="title"
              placeholder={TITLE}
              value={title}
            />
          </LabelWrapper>
          <LabelWrapper>
            <label>{DUE_DATE + ` (${OPTIONAL})`}</label>
            <input 
              onChange={onMilestonesFormDataChange}
              type="text"
              name="date"
              placeholder="연도. 월. 일."
              value={date}
            />
          </LabelWrapper>
          <LabelWrapper>
            <label>{DESCRIPTION + ` (${OPTIONAL})`}</label>
            <textarea 
              onChange={onMilestonesFormDataChange}
              name="description" 
              cols="30" 
              rows="10"
              value={description}
            ></textarea>
          </LabelWrapper>
        </Form>
        <FormOperationWrapper>
          <OperateButton 
            name={BUTTON_NAME.CANCEL} 
            buttonType={false} 
            setNewTypeFlag={setNewTypeFlag} 
            newTypeFlag={newTypeFlag}
          />
          <SubmitButton name={CREATE_MILESTONE} />
        </FormOperationWrapper>
      </FormSection>
    </>
  )
}

const FormSection = styled.form`

`

const Form = styled.div`
  padding: 16px 0;
  border-top: 1px solid #dbdee2;
  border-bottom: 1px solid #dbdee2;
`

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    margin: 8px 0;
  }

  input {
    width: 500px;
    padding: 8px;
    font-size: 20px;
  }

  textarea {
    width: 600px;
    height: 300px;
    font-size: 20px;
  }
`

const FormOperationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export default MilestonesFormSection;