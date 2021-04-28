import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { NAV_MANU } from "../../utils/constants"
import { getLabels } from "../../api/api";

import Navbar from "../Navbar/Navbar";
import LabelsWrapper from "../Labels/LabelsWrapper";
import MilestonesWrapper from "../Milestones/MilestonesWrapper";

const renderTypeComponent = ({ renderType, props }) => {
  const TypeComponent = { 
    [NAV_MANU.LABELS]: LabelsWrapper, 
    [NAV_MANU.MILESTONES]: MilestonesWrapper 
  }[renderType]
  return <TypeComponent {...props} />
}

const Main = () => {
  const [type, setType] = useState(NAV_MANU.LABELS);
  const [labels, setLabels] = useState([]);
  const [milestones, setMilestones] = useState([]);
  const [newTypeFlag, setNewTypeFlag] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const labelData = await getLabels();
      setLabels(() => [...labelData]);
    };
    fetchData();
  }, []);
  
  return (
    <MainSection>
      <Navbar 
        type={type} 
        setType={setType}
        newTypeFlag={newTypeFlag}
        setNewTypeFlag={setNewTypeFlag}
      />
      {
        renderTypeComponent({
          renderType: type,
          props: type === NAV_MANU.LABELS ? { labels, setLabels, newTypeFlag, setNewTypeFlag } : { milestones, setMilestones, newTypeFlag, setNewTypeFlag }
        })
      }
    </MainSection>
  );
};

const MainSection = styled.section`
  width: 80%;
  margin: 0 auto;
`

export default Main;