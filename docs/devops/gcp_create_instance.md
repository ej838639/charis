# Create Compute Engine instance and build docker container

## Console
PROJECT_ID: (use project for charis)
REGION: "us-west3"
ZONE: "us-west3-c"
REPO: "charis-docker-repo"

### Setup environment
Set region/zone
https://cloud.google.com/compute/docs/gcloud-compute#default-region-zone
https://cloud.google.com/compute/docs/regions-zones
us-west1 The Dalles, OR
us-west2 LA, CA
us-west3 SLC, UT
us-west4 LV, NV

### Upload container to Artifact Repository
https://cloud.google.com/artifact-registry/docs/docker/store-docker-container-images

### Create Compute Engine instance
Navigate to Cloud Engine: VM instances
Create instance
name: charis
Machine type: e2-micro
Container section: click Deploy Container. 
Container image:
$REGION-docker.pkg.dev/$PROJECT_ID/$REPO/charis:latest

In search bar, search for "firewall rules"
Click "Firewall: VPC network"
Click "Create Firewall Rule"
name it: "allow-flask"
target tags "allow-flask"
source IPv4 ranges: 0.0.0.0/0
check TCP and include port 3000
click Create

Navigate to Cloud Engine: VM Instances
Collect the "Internal IP" for the charis container
Click on "SSH" for charis container

```sh
docker ps # see container running
docker stop (container number)

docker run \
--name charis \
-p 5173:5173 \
-d \
$REGION-docker.pkg.dev/$PROJECT_ID/$REPO/charis:latest
```

## CLI

### Setup environment
```shell
PROJECT_ID=$(gcloud config get-value project)
REGION="us-west3"
ZONE="us-west3-c"
REPO="charis-docker-repo"
PORT=5173

# Development:
INSTANCE_NAME="charis-app-dev"

# Production:
INSTANCE_NAME="charis-app-prod"

gcloud compute project-info add-metadata \
--metadata google-compute-default-region=$REGION,google-compute-default-zone=$ZONE

gcloud init   

# Confirm region and zone
gcloud config get-value compute/region
gcloud config get-value compute/zone
```

### Upload container to Artifact Repository
```shell
# authorize docker
gcloud auth configure-docker
sudo gcloud components install docker-credential-gcr

gcloud services list

# if artifactregistry not activated, then run:
gcloud services enable \
artifactregistry.googleapis.com \
--project=${PROJECT_ID}

gcloud artifacts repositories create $REPO \
--repository-format=docker \
--location=${REGION} --description="Charis Docker repository"

gcloud artifacts repositories list
gcloud auth configure-docker ${REGION}-docker.pkg.dev
docker tag ej838639/charis:latest \
${REGION}-docker.pkg.dev/${PROJECT_ID}/$REPO/charis:latest
docker push ${REGION}-docker.pkg.dev/${PROJECT_ID}/$REPO/charis:latest

docker tag ej838639/charis:0.1 \
${REGION}-docker.pkg.dev/${PROJECT_ID}/$REPO/charis:0.1
docker push ${REGION}-docker.pkg.dev/${PROJECT_ID}/$REPO/charis:0.1

```

### Create Compute Engine instance
```shell

gcloud services list

# if compute not activated, then run:
gcloud services enable compute.googleapis.com 

gcloud compute firewall-rules create allow-app \
--source-ranges 0.0.0.0/0 \
--allow tcp:$PORT \
--target-tags allow-app

gcloud compute firewall-rules list

# prod
gcloud compute instances create-with-container $INSTANCE_NAME \
--machine-type e2-micro \
--container-image $REGION-docker.pkg.dev/$PROJECT_ID/$REPO/charis:latest \
--tags http-server

# dev
gcloud compute instances create-with-container $INSTANCE_NAME \
--machine-type e2-micro \
--container-image $REGION-docker.pkg.dev/$PROJECT_ID/$REPO/charis:0.1 \
--tags http-server,allow-app

# note external IP for charis instance, or use the following command
gcloud compute instances list

EXTERNAL_IP="[insert IP]"

```

Wait about 5 minutes, and then open web link:
http:$EXTERNAL_IP:$PORT

Or check progress of instance: SSH to instance and run:
```sh
# see the current containers running
docker ps
# Image "gcr.io/gce-containers/konlet:v.0.11-latest" running to pull and run the container
# (Also logging agent image running)

docker logs [container id]
# see the progress to pull and run the container

# After 5 minutes the containers iamge will stop and the desired container will run. Confirm with:
docker ps 
```

# Delete Instance
```sh
gcloud compute instances delete $INSTANCE_NAME

gcloud compute firewall-rules delete allow-app
```
