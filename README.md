# Simple API with Node + Express + PostgreSQL

An easy way to get started with an Express server with PostgreSQL with Node.js. The code for this repository is largely inspired from an [excellent introductory blog post](https://www.robinwieruch.de/postgres-express-setup-tutorial/) by Robin Wieruch. 

## Features

- NodeJS
- Express
- REST API
- PostgreSQL

## Deploying with CodeNOW

### Prerequisites
- [node & npm](https://nodejs.org/en/)
  - You must use npm 7 or posterior versions. As a matter of fact, this repository uses the version 2 of `package-lock.json`. While version 2 is backwards compatible with version 1 (used by npm v5 and v6), you should [upgrade your local npm version to at least 7 to avoid possible issues](https://www.abrahamberg.com/blog/npm-package-json-lock-version-1-or-2/).
  - CodeNOW's deployment will use Node v18 (cf. [Dockerfile](./Dockerfile)). In order to have deployment environments as close as possible to your local environment, we recommend you to use the same node version.
- [git](https://www.robinwieruch.de/git-essential-commands/) is installed.
- To test locally, you must have PostgreSQL installed. To install PostgreSQL, refer to [its download page](https://www.postgresql.org/download/). We recommend to install the same or similar PostgreSQL version that it is used in CodeNOW. At the time of this writing, this is v12.11.
- Make sure all your environment variables (e.g., path) are correctly set, so you can run executables from the terminal (e.g., typing `psql -U postgres` in a terminal should start a Postgres server).
- Basic knowledge of relational databases in general and Postgres in particular.

### Step 1: install locally
1. Create new application with CodeNOW (e.g., named `express-api`)
2. Add a component in that application (e.g., named `rest-api-with-postgres`) with the **Docker Generic** stack
3. Clone the component's repository to your computer
4. Clone the current GitHub repository to your computer
5. Copy the contents of this repository (with the exception of the `.git` file) into the cloned component's repository

### Step 2: run locally
1. In a terminal on your local computer, from the root of your repository, type `npm ci` to install all the application dependencies. We recommend `npm ci` over `npm install` (or the equivalent `npm i`) in order not to [modify inadvertently the `package-lock.json`](https://www.abrahamberg.com/blog/npm-package-json-lock-version-1-or-2/).
2. Start an instance of PostgreSQL server (e.g., `psql -U postgres` or use pgadmin v4 which should come preinstalled with Postgres).
3. Type `npm start` to start the application.

### Step 3: test locally
- `GET` Routes
  - Visit http://localhost:3000
    - `/messages`
    - `/messages/1`
    - `/users`
    - `/users/1`

- Beyond `GET` Routes
  - CURL
    - Create a message with:
      - `curl -X POST -H "Content-Type:application/json" http://localhost:3000/messages -d '{"text":"Hi again, World"}'`
    - Delete a message with:
      - `curl -X DELETE -H "Content-Type:application/json" http://localhost:3000/messages/1`
  - Postman
    - Install [Postman](https://www.getpostman.com/apps) to interact with the REST API
    - Create a message with:
      - URL: `http://localhost:3000/messages`
      - Method: `POST`
      - Body: raw + JSON (application/json)
      - Body Content: `{ "text": "Hi again, World" }`
    - Delete a message with:
      - URL: `http://localhost:3000/messages/1`
      - Method: `DELETE`

- Commit and push to the component's remote repository

### Step 4: create a Postgres database in CodeNOW
1. Add a postgreSQL (v12) managed service (**Marketplace > Managed services > Get New Service**)

### Step 5: connect the app to the database
1. Create a new connection for your component
   - Name your connection (e.g., `EXPRESS_DEMO_DB`)
   - Select **PostgreSQL** as service type

Note that if you name your connection anything else than `EXPRESS_DEMO_DB`, you need to update the name of the environment variables used in the code to connect to the database (cf. [`src/models/index.js`](./src/models/index.js)).

### Step 6: build and package your application
1. Build your component
2. Create an application package that contains the newly built component

### Step 7: deploy your application
1. Create a deployment configuration for your target deployment environment and package
2. Edit the `.env` as you see fit to pass environment variables to your NodeJS application
3. Deploy your application
   1. In step 1 of the [deployment process](https://docs.codenow.com/docs/admin-manuals/deployment-application#deployment-process), pick the target deployment and package that you created a deployment configuration for
   2. In step 2, review and possibly update your configuration files
   3. In step 5, select the specific instance of managed service that you want to connect to the soon-to-be-deployed instance(s) of your application.
