import styled from "styled-components";

export const FormSection = styled.form``;

export const Form = styled.div`
  padding: 16px 0;
  border-top: 1px solid #dbdee2;
  border-bottom: 1px solid #dbdee2;
`;

export const LabelWrapper = styled.div`
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
`;

export const FormOperationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
