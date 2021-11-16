import React, { useState, useEffect } from "react";
import "./JobList.css";

const JobList = ({ name, setIsJobOpportunityClick }) => {
  const [jobListData, setJobListData] = useState([]);

  const getJobListData = (name) => {
    fetch(`http://localhost:5000/job_opportunities/${name}`)
      .then((res, rej) => {
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        setJobListData(data);
      });
  };

  useEffect(() => {
    getJobListData(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="job-list">
      <h5
        className="back"
        onClick={() => {
          setIsJobOpportunityClick(false);
        }}
      >
        &lt; Back{" "}
      </h5>
      <h3>Job Source: {name}</h3>
      <h4>Job Listed: {jobListData.length}</h4>
      <table>
        <thead>
          <tr>
            <th className="table-id">ID</th>
            <th>Company Name</th>
            <th>Job Title</th>
            <th>Job URL</th>
          </tr>
        </thead>
        <tbody>
          {jobListData.map(({ job_id, job_title, company_name, job_url }) => {
            return (
              <tr key={job_id}>
                <th className="table-id">{job_id}</th>
                <th>{company_name}</th>
                <th>{job_title}</th>
                <th className="job-url">
                  <a href={job_url} target="_blank" rel="noreferrer">
                    {job_url}
                  </a>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default JobList;
