import React, { useEffect, useState } from "react";
import { getJobs } from "../services/api";
import JobCard from "../components/JobCard";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const data = await getJobs();
    setJobs(data);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      <p className="mb-6 text-gray-600">
        Total Jobs: <span className="font-bold">{jobs.length}</span>
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;