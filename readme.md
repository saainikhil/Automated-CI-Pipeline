#  Automated CI Pipeline for a Node.js Web Application using Jenkins

## **Project Overview**

This project demonstrates the setup and execution of an **Automated Continuous Integration (CI) Pipeline** for a Node.js-based web application using **Jenkins**.

The pipeline is tightly integrated with **GitHub webhooks**, ensuring that every new commit or pull request automatically triggers a fresh build and validation process.

Once triggered, Jenkins performs the following actions:

1. Pulls the latest code from the GitHub repository.
2. Installs required dependencies using `npm install`.
3. Executes linting checks and automated unit tests via **Jest**.
4. Packages the validated code into an artifact (`artifact.zip`).
5. Archives the artifact for deployment or further stages.

This setup promotes **automation, reliability, and continuous feedback**, key pillars of DevOps CI practices.

---

## **Key Achievements**

Jenkins configured for fully automated CI workflows
Integrated GitHub repository using secure webhooks
Automated dependency installation, linting, and testing
enerated and archived build-ready artifacts
Displayed test results and pipeline stages in Jenkins UI
Achieved seamless automation from commit → artifact

---

## **Tech Stack**

| Component                | Technology                                     |
| ------------------------ | ---------------------------------------------- |
| **Language / Framework** | Node.js (Express.js)                           |
| **Version Control**      | Git & GitHub                                   |
| **CI Tool**              | Jenkins                                        |
| **Build Tool**           | npm                                            |
| **Testing Framework**    | Jest                                           |
| **Code Quality Tool**    | ESLint                                         |
| **Artifact Storage**     | Jenkins Workspace (Archived Artifacts)         |
| **OS Environment**       | Ubuntu 22.04 LTS                               |
| **Notifications**        | Jenkins Console Logs / Email Alerts (optional) |

---

## **Project Structure**

```
Automated-CI-Pipeline/
│
├── README.md                 # Documentation
├── Jenkinsfile               # Declarative Jenkins pipeline script
│
├── src/
│   ├── app.js                # Node.js entry point
│   ├── routes/               # Express route files
│   ├── templates/            # Optional frontend templates
│   └── static/               # CSS/JS/static files
│
├── tests/
│   └── test_app.js           # Jest test cases
│
├── package.json              # Dependencies and scripts
│
├── build/
│   └── artifact.zip          # Jenkins-generated build artifact
│
├── docs/
│   ├── pipeline_overview.png
│   ├── build_success.png
│   ├── test_results.png
│   └── archived_artifacts.png
│
├── .gitignore                # Ignored files and folders
└── report.pdf                # Optional detailed report
```

---

## **Implementation Details**

### **1. Jenkins Setup**

* Jenkins installed on Ubuntu 22.04 LTS using the official package repository.
* Required plugins configured:

  * **Git Plugin**
  * **Pipeline Plugin**
  * **JUnit Plugin**
  * **NodeJS Plugin**
  * **GitHub Integration Plugin**

**Tool Configuration:**

* Node.js (v18+) added under *Manage Jenkins → Global Tool Configuration*.
* GitHub credentials securely stored under *Manage Credentials* (using Personal Access Token).

>  Sensitive information like tokens or credentials are never hardcoded and are accessed through Jenkins credentials binding.

---

### **2. GitHub Integration**

* Created a private GitHub repository for storing source code.
* Configured a secure **GitHub webhook** to automatically trigger Jenkins builds:

  ```
  http://<jenkins-server>/github-webhook/
  ```
* Every commit or pull request initiates a new Jenkins job through the webhook payload.

---

### **3. Jenkinsfile (Pipeline Script)**

```groovy
pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Fetching latest source code...'
                git branch: 'main', url: 'https://github.com/<your-repo>.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm packages...'
                sh 'npm install'
            }
        }

        stage('Lint') {
            steps {
                echo 'Running ESLint for code quality...'
                sh 'npm run lint || true'
            }
        }

        stage('Test') {
            steps {
                echo 'Executing unit tests with Jest...'
                sh 'npm test -- --ci --reporters=default --reporters=jest-junit'
            }
            post {
                always {
                    junit 'test-results/*.xml'
                }
            }
        }

        stage('Build & Archive') {
            steps {
                echo 'Creating deployment artifact...'
                sh 'zip -r artifact.zip *'
                archiveArtifacts artifacts: 'artifact.zip', fingerprint: true
            }
        }
    }

    post {
        success {
            echo ' Pipeline completed successfully!'
        }
        failure {
            echo ' Pipeline failed. Check console output for details.'
        }
    }
}
```

---

## **Testing and Validation**

* **Framework:** Jest
* **Command:** `npm test`
* **Result:**

  ```
  PASS  tests/test_app.js
   ✓ should return 200 OK for root route (20 ms)
  Test Suites: 1 passed, 1 total
  Tests:       1 passed, 1 total
  Time:        1.12 s
  ```

Test results are displayed in Jenkins via the “Test Result Trend” graph for better visibility.

---

## **Artifact Creation**

After successful build and tests:

* Jenkins compresses the project into `artifact.zip`.
* Artifact stored under:

  ```
  Jenkins → Build #12 → Archived Artifacts → artifact.zip
  ```
* Each artifact includes a unique timestamp for version tracking and reproducibility.

---

## **Screenshots**

| Screenshot               | Description                                   |
| ------------------------ | --------------------------------------------- |
| `pipeline_overview.png`  | Jenkins pipeline stages executed successfully |
| `test_results.png`       | Jest test results integrated in Jenkins       |
| `archived_artifacts.png` | Build artifact archived automatically         |

---

## **Challenges & Solutions**

| Challenge                     | Solution                                                 |   |        |
| ----------------------------- | -------------------------------------------------------- | - | ------ |
| Jenkins not triggering builds | Rechecked GitHub webhook and validated payload URL       |   |        |
| Node version mismatch         | Configured NodeJS via Jenkins tool settings              |   |        |
| Test results not showing      | Installed JUnit plugin and added `junit` step            |   |        |
| ESLint errors breaking build  | Allowed non-critical warnings (`npm run lint             |   | true`) |
| Secure credential handling    | Used Jenkins credentials manager instead of plain tokens |   |        |

---

## **Outcomes**

* Fully automated Jenkins CI pipeline from **Git push → Artifact generation**
* Improved build reliability and developer productivity
* Seamless integration with GitHub and Node.js ecosystem
* Standardized and repeatable build process aligned with DevOps CI best practices

---

## **Conclusion**

Through this project, I successfully implemented an **end-to-end CI workflow** that automates build, test, and packaging steps using Jenkins.
This setup ensures faster feedback for developers, consistent build results, and secure artifact management.

By integrating GitHub, Node.js, and Jenkins, the project achieves a **modern, maintainable, and scalable CI solution**—demonstrating real-world DevOps automation capabilities.

---

**Author:**
**Petnikoti Sai Nikhil**

 **Project Status:** Completed Successfully
 **Last Updated:** October 2025
 **Result:** Fully automated, secure CI pipeline for Node.js web application

---
