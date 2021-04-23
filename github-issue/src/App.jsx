import React, { useState, useEffect } from "react";
import { getLabels } from "./api/api";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";

const App = () => {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const labelData = await getLabels();
      setLabels(() => [labelData]);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Main labels={labels} />
    </>
  );
};

export default App;
