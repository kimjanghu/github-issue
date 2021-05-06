import React from "react";
import styled from "styled-components";
import { MILESTONES_STATUS } from "../../utils/constants";
import { changeDateToDueDate } from "../../utils/utils";

const MilestonesItem = ({ milestone }) => {
  const { title, date, description } = milestone
  return (
    <MilestonesItemWrapper>
      <MilestonesItemColumn>
        <h2>{title}</h2>
        <p>Due by {changeDateToDueDate(date)}</p>
        <p>{description}</p>
      </MilestonesItemColumn>
      <MilestonesItemColumn>
        <div>progressbar</div>
        <div>status</div>
        <div>
          <button>Edit</button>
          <button>Close</button>
          <button>Delete</button>
        </div>
      </MilestonesItemColumn>
    </MilestonesItemWrapper>
  )
};

const MilestonesItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid #dbdee2;

  h2 {
    margin: 0;
  }
`

const MilestonesItemColumn = styled.div`
  width: 50%;
`

export default MilestonesItem;