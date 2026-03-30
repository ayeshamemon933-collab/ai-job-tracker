import { useState, useEffect } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);

  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
  });

  const [jobs, setJobs] = useState([]);
  const API = "http://localhost:5000/api/jobs";

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };
  const fetchJobs = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setJobs(data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  const handleSubmit = async () => {
    await fetch(`${API}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });

    fetchJobs();
    setShowForm(false);
  };
  const getAISuggestion = async () => {
    const res = await fetch(`${API}/ai`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: job.title,
        company: job.company,
        location: job.location,
        salary: job.salary,
      }),
    });

    const data = await res.json();
    setJob({ ...job, description: data.suggestion });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-6">
      <h1 className="text-4xl font-extrabold text-white text-center mb-10">
        🚀 AI Job Tracker
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
          <p className="text-gray-700">Total Jobs: {jobs.length}</p>
        </div>

        <div className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl text-center">
          <h2 className="text-xl font-semibold mb-2">Add Job</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg mt-2"
          >
            + Add Job
          </button>
        </div>

        <div className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold mb-2">Jobs</h2>
          <p className="text-gray-600">Scroll below 👇</p>
        </div>
      </div>
      {showForm && (
        <div className="mt-10 bg-white p-6 rounded-2xl shadow-xl max-w-xl mx-auto">
          <input
            name="title"
            onChange={handleChange}
            placeholder="Job Title"
            className="border p-2 w-full mb-3 rounded"
          />
          <input
            name="company"
            onChange={handleChange}
            placeholder="Company"
            className="border p-2 w-full mb-3 rounded"
          />
          <input
            name="location"
            onChange={handleChange}
            placeholder="Location"
            className="border p-2 w-full mb-3 rounded"
          />
          <input
            name="salary"
            onChange={handleChange}
            placeholder="Salary"
            className="border p-2 w-full mb-3 rounded"
          />

          <textarea
            name="description"
            value={job.description}
            onChange={handleChange}
            placeholder="Job Description"
            className="border p-2 w-full mb-3 rounded"
          />

          <button
            onClick={getAISuggestion}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg w-full mb-3"
          >
          </button>

          <button
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg w-full"
          >
            Save Job
          </button>
        </div>
      )}
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {jobs.map((j, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-lg font-bold">{j.title}</h3>
            <p className="text-gray-600">{j.company}</p>
            <p className="text-sm">{j.location}</p>
            <p className="text-sm text-green-600">{j.salary}</p>
            <p className="text-sm mt-2">{j.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;