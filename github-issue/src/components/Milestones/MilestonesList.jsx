import React, { useContext } from "react";
import styled from "styled-components";
import MilestonesItem from "./MilestonesItem";
import { MilestonesContext } from "./MilestonesContext";
import { MILESTONES_STATUS } from "../../utils/constants";

const { OPEN, CLOSED } = MILESTONES_STATUS

const milestonesItem = (milestones) => {
  return milestones.map(milestone => <MilestonesItem key={milestone.id} milestone={milestone} />)
}

const MilestonesList = ({ milestoneStatus }) => {
  const { milestoneState: { milestones } } = useContext(MilestonesContext)
  const { openMilestones, closedMilestones } = milestones
  const milestonesType = {
    [OPEN]: openMilestones,
    [CLOSED]: closedMilestones
  }

  return (
    <MilestonesListWrapper>
      {
        milestonesItem(milestonesType[milestoneStatus])
      }
    </MilestonesListWrapper>
  )
};

const MilestonesListWrapper = styled.ul`

`

export default MilestonesList;