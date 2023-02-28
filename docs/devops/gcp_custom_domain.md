# Create Zone to Custom Domain in Google Cloud
The following explains how to create a zone in Cloud DNS.

## Console


## CLI

### Setup for Cloud DNS
```sh
PROJECT_NAME="charis"
PROJECT_ID="charis-377419"
REGION="us-west3"
DNS_ZONE="charis-zone2"
DOMAIN="charismediation.org"

# Update gcloud cli version
sudo gcloud components update
# N to disable usage reporting

# check current project
gcloud config get-value project

# if necessary, move to desired project. Avoids need to specify project in commands.
gcloud config set project $PROJECT_ID

# check default region and zone
gcloud config get-value run/region

# if unset, change region and zone. Avoids need to specify region in commands.
gcloud config set run/region $REGION

# check if Cloud Run and Cloud Build are enabled
gcloud services list --enabled
NAME                              TITLE
dns.googleapis.com                Cloud DNS API

# if not enabled run 
gcloud services enable dns.googleapis.com 
```

### Create DNS Zone
https://cloud.google.com/dns/docs/zones#gcloud

```sh
gcloud dns managed-zones create $DNS_ZONE \
--description="DNS Zone for Charis Mediation" \
--dns-name=$DOMAIN \
--labels=project=$PROJECT_NAME \
--visibility=public

```
