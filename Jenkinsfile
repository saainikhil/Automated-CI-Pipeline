pipeline {
    agent any

    environment {
        // Path for your build artifacts
        BUILD_DIR = 'build'
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo "Checking out code from GitHub..."
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing npm dependencies..."
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo "Running unit tests..."
                sh 'npm test'
            }
            post {
                always {
                    junit '**/junit.xml'  // Collect test results (Jest JUnit)
                }
            }
        }

        stage('Build Application') {
            steps {
                echo
