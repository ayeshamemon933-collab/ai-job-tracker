import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/Newjob";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-6">
      <Navbar setPage={setPage} />

      <div className="mt-6">
        {page === "dashboard" && <Dashboard />}
        {page === "add" && <AddJob />}
      </div>
    </div>
  );
}

export default App;