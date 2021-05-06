import React from "react";
import styled from "styled-components";

const SubmitButton = ({ name }) => {
  return (
    <Button type="submit">
      {name}
    </Button>
  )
}

const Button = styled.button`
  position: relative;
  border: 1px solid #fff;
  padding: 10px 16px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  background-color: #31c453;
`

export default SubmitButton;