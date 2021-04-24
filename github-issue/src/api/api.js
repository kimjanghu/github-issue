const API_ENDPOINT = "http://localhost:3001";
const URL = {
  LABELS: "/labels",
  MILESTONES: "/milestones",
};

const postMessageForm = (data) => {
  return {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
};

const request = async (url, message = null) => {
  try {
    const res = await fetch(url, message);
    if (!res.ok) {
      throw new Error("Error");
    }
    return await res.json();
  } catch (e) {
    throw new Error(`Error: ${e.message}`);
  }
};

export const getLabels = async () => {
  const data = await request(`${API_ENDPOINT}${URL.LABELS}`);
  return data;
};

export const postLabels = async (data) => {
  const message = postMessageForm(data);
  await request(`${API_ENDPOINT}${URL.LABELS}`, message);
};

export const editLabels = () => {};

export const deleteLabels = () => {};
