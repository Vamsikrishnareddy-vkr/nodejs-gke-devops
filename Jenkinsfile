pipeline {
agent any

stages {

stage('Clone') {
steps {
git 'https://github.com/Vamsikrishnareddy-vkr/nodejs-gke-devops.git'
}
}

stage('Build Docker Image') {
steps {
sh 'docker build -t gcr.io/project-c441bf1c-426a-4d01-bce/node-app:v1 -f docker/Dockerfile .'
}
}

stage('Push Image') {
steps {
sh 'docker push gcr.io/project-c441bf1c-426a-4d01-bce/node-app:v1'
}
}

stage('Deploy to GKE') {
steps {
sh 'helm upgrade --install node-app helm/node-app'
}
}

}

}
