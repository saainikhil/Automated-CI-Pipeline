#  Automated CI Pipeline with Jenkins

This project demonstrates a **Continuous Integration (CI)** pipeline using **Jenkins**, integrated with **Node.js**, **ESLint** (for code quality checks), and **Jest** (for unit testing).
It automatically builds, tests, and verifies code quality whenever new changes are pushed to the repository.

---

##  Project Overview

The goal of this project is to implement a **fully automated CI pipeline** that:

* Checks out code from GitHub
* Installs dependencies
* Runs unit tests with Jest
* Performs code linting using ESLint
* Generates test and lint reports
* Optionally builds the application

This ensures every commit and pull request is automatically verified before integration.

---

##  Features

* **Automated Build and Test** via Jenkins
* **Code Quality Enforcement** using ESLint
* **Unit Testing** with Jest
* **JUnit & Lint Reports** generated for Jenkins visualization
* **Webhook-based automation** — Jenkins triggers on each GitHub push

---

## Technologies Used

| Component         | Technology                 |
| ----------------- | -------------------------- |
| Language          | JavaScript (Node.js)       |
| Testing Framework | Jest                       |
| Code Quality      | ESLint                     |
| CI/CD             | Jenkins                    |
| OS                | Ubuntu / Linux environment |
| Source Control    | GitHub                     |

---

## Folder Structure

```
Automated-CI-Pipeline-Jenkins/
│
├── src/
│   ├── app.js              # Main Node.js application file
│
├── docs/                   # Jenkins setup screenshots or docs
│
├── .eslintrc.cjs           # ESLint configuration
├── package.json            # Node.js scripts and dependencies
├── jest.config.js          # Jest configuration (optional)
├── Jenkinsfile             # CI pipeline definition
└── README.md               # Documentation
```

---

##  Local Setup


### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Application

```bash
npm start
```

---

##  Code Quality Check (ESLint)

### 1. ESLint Configuration

File: `.eslintrc.cjs`



### 2. Add Lint Script (in `package.json`)


### 3. Run Linting

```bash
npm run lint
```

 If everything is clean:

```
✔ No problems
```

 If there are issues, they’ll be displayed with line numbers and rule names.

---

##  Testing (Jest)

### 1. Run Tests

```bash
npm test
```

### 2. Generate JUnit Reports

The following line in your `package.json` ensures JUnit output:

```json
"test": "jest --ci --reporters=default --reporters=jest-junit"
```

Report is saved in:

```
./junit.xml
```

---

##  Jenkins CI Pipeline Setup

### 1. Prerequisites

* Jenkins installed and running on port `8080`
* Node.js installed on the Jenkins agent
* GitHub repository connected

### 2. Jenkins Plugins Required

* **Git Plugin**
* **Pipeline Plugin**
* **JUnit Plugin**
* **NodeJS Plugin**


##  Webhook Integration (GitHub → Jenkins)

1. In **Jenkins**, go to your job → **Configure**
2. Under **Build Triggers**, check:
    *“GitHub hook trigger for GITScm polling”*
3. In **GitHub → Settings → Webhooks → Add Webhook**

   * **Payload URL**: `http://<your-server-ip>:8080/github-webhook/`
   * **Content type**: `application/json`
   * **Trigger**: “Just the push event”

---

##  Troubleshooting

| Issue                                | Solution                                                                             |
| ------------------------------------ | ------------------------------------------------------------------------------------ |
| `405 Method Not Allowed` on webhook  | Jenkins is up but webhook isn’t configured as POST → recheck GitHub webhook settings |
| `'process' is not defined` in ESLint | Ensure `.eslintrc.cjs` has `env: { node: true }`                                     |
| Jenkins build fails at `npm test`    | Make sure all dependencies are installed and `jest` is properly configured           |
| ESLint not running                   | Confirm `.eslintrc.cjs` is in project root and you run from same directory           |

---

##  Future Enhancements

* Integrate **SonarQube** for advanced code quality metrics
* Add **Docker** build stage
* Deploy automatically to a staging environment
* Generate detailed test coverage reports


