import React, { useContext } from "react";
import styled from "styled-components";
import { MilestonesContext } from "../../Context/Context";
import { MILESTONES_STATUS } from "../../utils/constants";

const { OPEN, CLOSED } = MILESTONES_STATUS

const MilestonesListHeader = ({ milestoneStatus, setMilestoneStatus }) => {
  const { milestoneState: { milestones } } = useContext(MilestonesContext)
  const { openMilestones, closedMilestones } = milestones
  
  const milestonesStatusCounts = {
    [OPEN]: openMilestones.length,
    [CLOSED]: closedMilestones.length
  }

  const onToggleMilestoneStatusClick = (value) => setMilestoneStatus(value)

  return (
    <Header>
      {
        [OPEN, CLOSED].map(value => 
          <Button 
            key={value} 
            milestoneStatusFlag={value === milestoneStatus}
            onClick={() => onToggleMilestoneStatusClick(value)}
          >
            {milestonesStatusCounts[value]} {value}
          </Button>
        )
      }
      
    </Header>
  )
};

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

const Button = styled.div`
  cursor: pointer;
  color: ${({ milestoneStatusFlag }) => milestoneStatusFlag ? "#000" : "#dbdee2"};
  & + & {
    margin-left: 16px;
  }
`

export default MilestonesListHeader;