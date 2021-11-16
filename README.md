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
use `http://localhost:5000/add_jobsource_col_to_table` to add job_source column
then use `http://localhost:5000/add_jobsource_data_to_table` to add data to job_source base jobBoards.json


![image](https://user-images.githubusercontent.com/22120359/142023079-61cc63ca-28c1-4435-b107-0cbcc73ffd4f.png)

![image](https://user-images.githubusercontent.com/22120359/142023941-0ae75d25-c4a5-4e41-9051-39037b93fa16.png)



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
![image](https://user-images.githubusercontent.com/22120359/142022645-49c14b15-9467-4a27-a7e6-e52a75342363.png)
![image](https://user-images.githubusercontent.com/22120359/142022734-1dcb9150-3849-4a43-930a-cf85c65e546b.png)


