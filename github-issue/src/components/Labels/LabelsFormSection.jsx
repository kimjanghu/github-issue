import React from "react";
import styled from "styled-components";
import { LABEL_FORM, BUTTON_NAME } from "../../utils/constants"

const Wrapper = styled.div`
  display: ${({ newLabelFlag }) => newLabelFlag ? "block" : "none" };
  width: 100%;
  margin-bottom: 32px;
  padding: 24px;
  background-color: #ebedf1;
`

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const Form = styled.form`
  display: flex;
  align-items: flex-end
`

const labelPreview = LABEL_FORM.LABEL_PREVIEW;
const labelName = LABEL_FORM.LABEL_NAME;
const description = LABEL_FORM.DESCRIPTION;
const color = LABEL_FORM.COLOR;
const cancel = BUTTON_NAME.CANCEL;
const createLabel = BUTTON_NAME.CREATE_LABEL;

const LabelsFormSection = ({ newLabelFlag }) => {
  return (
    <Wrapper newLabelFlag={newLabelFlag}>
      <div>
        <button>{labelPreview}</button>
      </div>
      <FormWrapper>
        <Form>
          <div>
            <label>{labelName}</label>
            <input />
          </div>
          <div>
            <label>{description}</label>
            <input />
          </div>
          <div>
            <label>{color}</label>
            <button>new</button>
          </div>
          <button>#bfd4f2</button>
        </Form>
        <div>
          <button>{cancel}</button>
          <button>{createLabel}</button>
        </div>
      </FormWrapper>
    </Wrapper>
  )
};

export default LabelsFormSection;