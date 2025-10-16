pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out source code...'
                git branch: 'main', url: 'https://github.com/saainikhil/Automated-CI-Pipeline.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                sh 'npm test -- --passWithNoTests'
            }
        }

        stage('Build and Package') {
            steps {
                echo 'Building the application...'
                sh 'mkdir -p build && zip -r build/artifact.zip src package.json'
            }
        }

        stage('Archive Artifacts') {
            steps {
                echo 'Archiving build artifact...'
                archiveArtifacts artifacts: 'build/artifact.zip', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
