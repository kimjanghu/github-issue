import React from "react";
import styled from "styled-components";
import LabelList from "./LabelList";

const LabelsWrapper = ({ labels }) => {
  const labelLength = labels.length
  
  return (
    <>
      <Header>{labelLength} labels</Header>
      <LabelList labels={labels} />
    </>
  )
}

// const Wrapper = styled.section`
//   li {
//     height: 60px;
//     border: 1px solid #000;
//   }
// `

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #ebedf1;
  border: 1px solid #dbdee2;
  padding-left: 16px;
  font-weight: bold;
  font-size: 16px;
`

export default LabelsWrapper;