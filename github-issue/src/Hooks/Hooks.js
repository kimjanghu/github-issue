import { useState, useEffect } from "react";
import { getLabels, getMilestones } from "../api/api";
import { NAV_MANU } from "../utils/constants";
import { delay } from "../utils/utils";

const { LABELS } = NAV_MANU;

const useFetch = (type) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const fetchData =
          type === LABELS ? await getLabels() : await getMilestones();
        setState([...fetchData]);
      } catch (e) {
        console.error("exeception occuer", e.message);
      } finally {
        await delay(3000);
        setLoading(false);
      }
    })();
  }, [type]);

  return {
    state,
    loading,
  };
};

export default useFetch;
