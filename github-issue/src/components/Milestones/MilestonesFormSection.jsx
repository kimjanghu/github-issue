import React, { useState, useContext } from "react";
import { postMilestones } from "../../api/api"
import { MilestonesContext } from "../../Context/Context"
import { BUTTON_NAME } from "../../utils/constants"
import OperateButton from "../Buttons/OperateButton"
import SubmitButton from "../Buttons/SubmitButton"
import { 
  FormSection, 
  Form, 
  LabelWrapper, 
  FormOperationWrapper 
} from "./MilestonesFormSection.style"

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

export default MilestonesFormSection;