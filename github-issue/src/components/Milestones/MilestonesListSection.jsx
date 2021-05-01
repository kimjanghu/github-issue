import React, { useState } from "react";
import { MILESTONES_STATUS } from "../../utils/constants"
import MilestonesListHeader from "./MilestonesListHeader";
import MilestonesList from "./MilestonesList";

const { OPEN } = MILESTONES_STATUS

const MilestonesListSection = ({ newTypeFlag, setNewTypeFlag }) => {
  const [milestoneStatus, setMilestoneStatus] = useState(OPEN)
  
  return (
    <>
      <MilestonesListHeader 
        milestoneStatus={milestoneStatus}
        setMilestoneStatus={setMilestoneStatus}
      />
      <MilestonesList 
        milestoneStatus={milestoneStatus}
      />
    </>
  )
}

export default MilestonesListSection;