import "./App.css";
import Card from "./components/Card";
import React, { useState, useEffect } from "react";
import JobList from "./components/JobList";

function App() {
  const [jobBoards, setjobBoards] = useState([]);
  const [isJobOpportunityClick, setIsJobOpportunityClick] = useState(false);
  const [sourceName, setSourceName] = useState("");

  const getJobBoards = async () => {
    const res = await fetch("http://localhost:5000/get_raw_json");
    const data = await res.json();
    let { job_boards } = data;
    console.log(job_boards);
    setjobBoards(job_boards);
    console.log(jobBoards);
  };

  useEffect(() => {
    getJobBoards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      {isJobOpportunityClick ? (
        <JobList
          name={sourceName}
          setIsJobOpportunityClick={setIsJobOpportunityClick}
        />
      ) : (
        jobBoards.map(({ name, rating, logo_file, description }) => {
          return (
            <Card
              key={name}
              name={name}
              rating={rating}
              logo_file={logo_file}
              description={description}
              setIsJobOpportunityClick={setIsJobOpportunityClick}
              setSourceName={setSourceName}
            />
          );
        })
      )}
    </div>
  );
}

export default App;
