import React, { useEffect, useReducer } from "react";
import { getMilestones } from '../../api/api';
import { MilestonesContext } from "./MilestonesContext";
import MilestonesFormSection from "./MilestonesFormSection";
import MilestonesListSection from "./MilestonesListSection";

const initailMilestoneState = { milestones: {
  openMilestones: [],
  closedMilestones: []
} };

const milestoneReducer = (state, action) => {
  switch (action.type) {
    case "SET_MILESTONES":
      return { milestones: {...action.payload} };
    default:
      throw new Error();
  }
}

const renderMilestonesWrapper = ({ renderType, props }) => {
  const MilestonesComponent = renderType ? MilestonesFormSection : MilestonesListSection
  return <MilestonesComponent {...props} />
}

const MilestonesWrapper = ({ newTypeFlag, setNewTypeFlag }) => {
  const [milestoneState, milestoneDispatch] = useReducer(milestoneReducer, initailMilestoneState);
  
  useEffect(() => {
    const getMilestonesData = async () => {
      const milestoneData = await getMilestones();
      milestoneDispatch({ type: "SET_MILESTONES", payload: {
        openMilestones: [...milestoneData.filter(item => item.status === "open")],
        closedMilestones: [...milestoneData.filter(item => item.status === "close")]
      } });
    };
    getMilestonesData();
  }, [])

  return (
    <MilestonesContext.Provider value={{ milestoneState, milestoneDispatch }}>
      {
        renderMilestonesWrapper({
          renderType: newTypeFlag,
          props: { newTypeFlag, setNewTypeFlag }
        })
      }
    </MilestonesContext.Provider>
  )
}

export default MilestonesWrapper;