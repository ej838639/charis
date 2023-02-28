# Deploy App to Google Serverless App Engine
The following is how to deploy a React app in the Google serverless product, App Engine.

TBD: Add instructions to map App Engine to Custom Domains using a Google-managed SSL certificate with Global external HTTP(S) load balancer (classic).

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

### Deploy App Engine
[TBD]

## CLI
The following assumes that a react app exists and gcp is installed locally.

Variables
```sh
PROJECT_NAME="charis"
PROJECT_ID="charis-377419"
REGION="us-west3"
```

```sh
# Update gcloud cli version
sudo gcloud components update
# N to disable usage reporting
```

In project folder, add app.yaml file
https://cloud.google.com/appengine/docs/flexible/java/configuring-your-app-with-app-yaml

Then run:
```sh
gcloud app deploy
```
