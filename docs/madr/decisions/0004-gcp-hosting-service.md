# GCP Hosting Service Decision

* Status: accepted

## Context and Problem Statement
Determine what GCP services to use for deploying the app

## Considered Options
Cloud Run vs App Engine vs manual configuration of Cloud Engine

## Decision Outcome
Use Cloud Run

Need a quick and reliable solution to deploy this website for the business owner, so use a managed service: a serverless app. Use Cloud Run instead of App Engine since Cloud Run will only run when it is used: not many customers will access the site, so this will save money. There will be a cold start response time, but it should be insignificant for users.

Cloud Run can revert deployments in less than 10 sec. (Not sure how long it would take in App Engine.)
https://dev.to/johannesvitt/deploy-a-react-app-on-gcp-with-google-cloud-run-il3

Cloud Run can be in multiple regions to provide lower response time and availability, and App Engine can only be built in one region. Not a critical issue for this low usage of website, but still a benefit.

Eventually we will build out a manual configuration of Cloud Engine instances and other supporting configurations to learn how to manage infrustructure.

## References
App Engine vs Cloud Run
https://cloud.google.com/appengine/docs/flexible/cloud-run-for-gae-customers