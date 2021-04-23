import React from "react";
import styled from "styled-components";

// Temporary style remark
// & + & {
//   margin-left: 10px;
// }

const Button = styled.div`
  border: 1px solid #f6f8fa;
  padding: 10px 16px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  
  &.non-active {
    color: #595959;
    background-color: #fff;
  }

  &.active {
    color: white;
    background-color: #0f65d7;
  }
`

const TypeButton = ({ name, flag, setType }) => {
  const toggleType = () => {
    setType(name)
  }
  return (
    <Button className={flag ? "active" : "non-active"} onClick={toggleType}>
      { name }
    </Button>
  )
}

export default TypeButton;