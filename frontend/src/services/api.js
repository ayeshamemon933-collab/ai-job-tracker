const BASE_URL = "http://localhost:5000/api";

export const getJobs = async () => {
  const res = await fetch(`${BASE_URL}/jobs`);
  return res.json();
};

export const addJob = async (job) => {
  const res = await fetch(`${BASE_URL}/jobs/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });
  return res.json();
};

export const getAISuggestion = async (data) => {
  const res = await fetch(`${BASE_URL}/ai/suggest`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getAIMatch = async (data) => {
  const res = await fetch(`${BASE_URL}/ai/match`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};