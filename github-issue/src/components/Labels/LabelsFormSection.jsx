import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: none;
  width: 100%;
  margin-bottom: 32px;
  padding: 24px;
  background-color: #ebedf1;

  &.active {
    display: block
  }
`

const LabelsFormSection = ({ newLabelFlag }) => {
  return (
    <Wrapper className={newLabelFlag ? "active" : null}>
      <div>
        <button>Label preview</button>
      </div>
      <div>
        <div>
          <div>
            <p>Label name</p>
            <input />
          </div>
          <div>
            <p>Description</p>
            <input />
          </div>
          <div>
            <p>Color</p>
            <button>new</button>
          </div>
          <button>#bfd4f2</button>
        </div>
        <div>
          <button>#bfd4f2</button>
          <button>#bfd4f2</button>
        </div>
      </div>
    </Wrapper>
  )
};

export default LabelsFormSection;