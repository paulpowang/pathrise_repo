const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const fs = require("fs");

//middleware
app.use(cors());
app.use(express.json());

// get json job_boards data
let rawdata = fs.readFileSync("source/jobBoards.json");
let data = JSON.parse(rawdata);
let { job_boards } = data;

//ROUTES//
app.get("/get_raw_json", async (req, res) => {
  try {
    res.send(rawdata);
  } catch (err) {
    res.send(err.message);
  }
});

app.post("/add_jobsource_col_to_table", async (req, res) => {
  try {
    // add job_source column
    await pool.query(
      "ALTER TABLE job_opportunities ADD job_source varchar(50)"
    );
    res.send("job source update compeleted");
  } catch (err) {
    console.error(err.message);
    res.send(err.message);
  }
});

//update job source to table according to json
app.post("/add_jobsource_data_to_table", async (req, res) => {
  try {
    // add job_source data

    for (let newJob of job_boards) {
      //   console.log(newJob);
      let { name, root_domain } = newJob;
      //   console.log(`${name}: ${root_domain}`);
      await pool.query(
        `update job_opportunities set job_source = '${name}' where job_url ilike '%${root_domain}%'`
      );
    }
    // set other null for Unknown
    await pool.query(
      `update job_opportunities set job_source = 'Unknown' where job_source is null`
    );
    res.send("job source update compeleted");
  } catch (err) {
    console.error(err.message);
  }
});
//get job data by job source
app.get("/job_opportunities/:job_source", async (req, res) => {
  try {
    const { job_source } = req.params;
    const allJobOpportunities = await pool.query(
      `select * from job_opportunities where job_source ilike '${job_source}'`
    );
    res.json(allJobOpportunities.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
