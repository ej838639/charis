# Deploy App to Google Cloud Engine

## Cloud Run reference
Google doc Cloud Run
https://cloud.google.com/run/docs/setup

Google Community Cloud Run
https://cloud.google.com/community/tutorials/deploy-react-nginx-cloud-run

Dev.io Cloud Run
https://dev.to/johannesvitt/deploy-a-react-app-on-gcp-with-google-cloud-run-il3

## Docker for React with Vite reference
https://javascript.plainenglish.io/step-by-step-guide-to-dockerize-react-app-created-using-vite-90772423f7fb
https://medium.com/@mattburrellnet/running-a-react-vite-app-in-docker-using-nginx-414ff9a302c5

## App Engine reference
Google documentation App Engine
https://cloud.google.com/appengine/docs/flexible/an-overview-of-app-engine

Medium article for App Engine
https://medium.com/google-cloud/hosting-a-react-js-app-on-google-cloud-app-engine-6d1341b75d8c

Coding Deft article for App Engine
https://www.codingdeft.com/posts/react-deploy-google-cloud-app-engine/

## Console
Instructions on how to build the app using GCP console

### Create project
It top toolbar, click the current project in the dropdown. In the popup, in the top-right, click "New Project.

Name the project and click create.

After the project is created, in the popup click "Select Project" to switch to the project.

## CLI
The following assumes that a react app exists and gcp is installed locally.

Variables
```sh
PROJECT_NAME="charis"
PROJECT_ID="charis-377419"
REGION="us-west3"
```

### App Engine
In project folder, add app.yaml file and run:
```sh
gcloud app deploy
```

### Cloud Run Setup

# check current project
gcloud config get-value project

# if necessary, move to desired project
gcloud config set project $PROJECT_ID

# check if Cloud Run and Cloud Build are enabled
gcloud services list --enabled
NAME                                 TITLE
run.googleapis.com                   Cloud Run Admin API

# if not enabled run 
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com

# Update gcloud cli version
sudo gcloud components update
# N to disable usage reporting

# check default region and zone
gcloud config get-value run/region

# if unset, change region and zone
gcloud config set run/region $REGION

# authorize docker
gcloud auth configure-docker
sudo gcloud components install docker-credential-gcr
```

### Deploy to GCP Cloud Run

```sh
# From code, build docker image and upload to Registry
gcloud builds submit --tag gcr.io/$PROJECT_ID/charis-app-prod

```