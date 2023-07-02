pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        // Checkout source code from the GitHub repository
        git branch:'main', url: 'https://github.com/qinjiabo1990/job-post.git'
      }
    }

    stage('Build') {
      steps {
        // Build your static website assets (if needed)
        // For example, you can use npm to install dependencies and build assets
        sh 'npm install'
        sh 'npm run build'
      }
    }

    stage('Deploy to S3') {
      steps {
        // Clear existing files in the S3 bucket
        sh 'aws s3 rm s3://job-post --recursive'

        // Sync the local code with the S3 bucket
        sh 'aws s3 sync ./out/ s3://job-post'
      }
    }
  }
}
