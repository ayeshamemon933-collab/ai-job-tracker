import React, { useState } from "react";
import { addJob, getAISuggestion, getAIMatch } from "../services/api";

const AddJob = () => {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    skills: "",
    description: "",
    matchResult: "",
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const generateDescription = async () => {
    const data = await getAISuggestion(job);
    setJob({ ...job, description: data.suggestion });
  };

  const generateMatch = async () => {
    const data = await getAIMatch(job);
    setJob({ ...job, matchResult: data.result });
  };

  const handleSubmit = async () => {
    await addJob(job);
    alert("Job Added");
  };

  return (
    <div className="max-w-xl mx-auto glass p-6 rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">Add Job</h2>

      <input name="title" onChange={handleChange} placeholder="Title" className="input" />
      <input name="company" onChange={handleChange} placeholder="Company" className="input" />
      <input name="location" onChange={handleChange} placeholder="Location" className="input" />
      <input name="salary" onChange={handleChange} placeholder="Salary" className="input" />
      <input name="skills" onChange={handleChange} placeholder="Skills" className="input" />

      <button onClick={generateDescription} className="btn-indigo mt-3">
       Generate Description
      </button>

      <button onClick={generateMatch} className="btn-pink mt-3">
        Check Match
      </button>

      <textarea name="description" value={job.description} readOnly className="input mt-3" />
      <textarea name="matchResult" value={job.matchResult} readOnly className="input mt-3" />

      <button onClick={handleSubmit} className="btn-green mt-4 w-full">
        Save Job
      </button>
    </div>
  );
};

export default AddJob;