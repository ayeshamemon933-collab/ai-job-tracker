import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="glass p-5 rounded-2xl hover:scale-105 transition">
      <h3 className="text-xl font-bold">{job.title}</h3>
      <p className="text-gray-600">{job.company}</p>

      <div className="text-sm mt-2">
        <p>📍 {job.location}</p>
        <p className="text-green-600 font-semibold">💰 {job.salary}</p>
      </div>

      <p className="mt-3 text-sm">{job.description}</p>

      {job.matchResult && (
        <div className="mt-3 p-2 bg-indigo-100 rounded">
          <strong>AI Match:</strong>
          <pre className="text-xs">{job.matchResult}</pre>
        </div>
      )}
    </div>
  );
};

export default JobCard;