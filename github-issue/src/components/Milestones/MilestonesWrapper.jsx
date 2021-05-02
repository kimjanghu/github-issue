import React, { useEffect, useReducer } from "react";
import { getMilestones } from '../../api/api';
import { MilestonesContext } from "../../Context/Context";
import { NAV_MANU } from "../../utils/constants";
import MilestonesFormSection from "./MilestonesFormSection";
import MilestonesListSection from "./MilestonesListSection";
import useFetch from "../../Hooks/Hooks";

const { MILESTONES } = NAV_MANU

const initailMilestoneState = { milestones: {
  openMilestones: [],
  closedMilestones: []
} };

const milestoneReducer = (state, action) => {
  switch (action.type) {
    case "SET_MILESTONES":
      return { milestones: {...action.payload} };
    case "SET_NEW_MILESTONES":
      return { milestones: {...state.milestones, openMilestones: [...state.milestones.openMilestones, action.payload]} }
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
  const { state, loading } = useFetch(MILESTONES);

  useEffect(() => {
    const getMilestonesData = async () => {
      milestoneDispatch({ type: "SET_MILESTONES", payload: {
        openMilestones: [...state.filter(item => item.status === "open")],
        closedMilestones: [...state.filter(item => item.status === "close")]
      } });
    };
    getMilestonesData();
  }, [state])

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