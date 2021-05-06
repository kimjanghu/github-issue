const API_ENDPOINT = "http://localhost:3001";
const URL = {
  LABELS: "/labels",
  MILESTONES: "/milestones",
};

const postMessageForm = (data, methodType) => {
  return {
    method: methodType,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
};

const deleteMessageForm = () => {
  return {
    method: "DELETE",
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
  const message = postMessageForm(data, "POST");
  const newLabelData = await request(`${API_ENDPOINT}${URL.LABELS}`, message);
  return newLabelData;
};

export const editLabels = async (data, id) => {
  const message = postMessageForm(data, "PUT");
  await request(`${API_ENDPOINT}${URL.LABELS}/${id}`, message);
};

export const deleteLabels = async (id) => {
  const message = deleteMessageForm();
  await request(`${API_ENDPOINT}${URL.LABELS}/${id}`, message);
};

export const getMilestones = async () => {
  const milestoneData = await request(`${API_ENDPOINT}${URL.MILESTONES}`);
  return milestoneData;
};

export const postMilestones = async (data) => {
  const message = postMessageForm(data, "POST");
  const newMilestoneData = await request(
    `${API_ENDPOINT}${URL.MILESTONES}`,
    message
  );
  return newMilestoneData;
};
