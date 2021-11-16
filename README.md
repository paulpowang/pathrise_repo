# Getting Started with Pathrise App

before start, create a posgresql database: pathrise_db
then create a table: job_opportunities
then import /source/job_opportunities.csv to job_opportunities table

/server
run `npm start` to start server
will connect db port: 5432 by default

/client
run `npm start` to start client

After server and client run
if job_source column not in table
use `http://localhost:3000/add_jobsource_col_to_table` to add job_source column
then use `http://localhost:3000/add_jobsource_data_to_table` to add data to job_source base jobBoards.json

## Available API

### `/get_raw_json`

to provide client data from jobBoards.json

### `/add_jobsource_col_to_table`

to allow add job_source column to table if not added

### `/add_jobsource_data_to_table`

to allow add job_source data to talbe after job_source column added

### `/job_opportunities/:job_source`

to allow client get data by job_source

## dependencies

### server

#### "cors"

use for cors

#### "express"

use for api routing

#### "pg"

use for access postgresql

### client

regular react basic dependency, no extra added

## `/source/job_opportunities.csv`
