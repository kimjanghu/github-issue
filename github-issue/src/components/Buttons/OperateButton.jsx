import React from "react";
import styled from "styled-components";

// Normal background color: #F8FAFB
const Button = styled.button`
  border: 1px solid #f6f8fa;
  padding: 10px 16px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  background-color: #31c453;
`


const OperateButton = ({ name }) => {
  return (
    <Button>
      {name}
    </Button>
  )
}

export default OperateButton;