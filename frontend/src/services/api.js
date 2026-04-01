const BASE_URL = process.env.REACT_APP_API_URL;

// GET ALL JOBS
export const getJobs = async () => {
  const res = await fetch(`${BASE_URL}/jobs`);
  return res.json();
};

// ADD JOB
export const addJob = async (job) => {
  const res = await fetch(`${BASE_URL}/jobs/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(job),
  });
  return res.json();
};

// AI DESCRIPTION
export const getAISuggestion = async (data) => {
  const res = await fetch(`${BASE_URL}/ai/suggest`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

// AI MATCH
export const getAIMatch = async (data) => {
  const res = await fetch(`${BASE_URL}/ai/match`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};