import React from "react";
import styled from "styled-components";

// Temporary style remark
// & + & {
//   margin-left: 10px;
// }

const Button = styled.div`
  border: 1px solid #dbdee2;
  padding: 10px 16px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  color: ${({ typeFlag }) => typeFlag ? "#fff" : "#595959"};
  background-color: ${({ typeFlag }) => typeFlag ? "#0f65d7" : "#fff"};
`

const TypeButton = ({ name, typeFlag, setType }) => {
  const toggleType = () => {
    setType(name)
  }
  
  return (
    <Button typeFlag={typeFlag} onClick={toggleType}>
      { name }
    </Button>
  )
}

export default TypeButton;