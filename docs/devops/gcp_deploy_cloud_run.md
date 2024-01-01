# Deploy App to Google Serverless Cloud Run
The following describes how to deploy a React app in the Google serverless product, Cloud Run. Then map Cloud Run to Custom Domains using a Google-managed SSL certificate with Global external HTTP(S) load balancer (classic). 

The reason for this choice is descrsibed in this repo at docs/madr/decisions/0004-gcp-hosting-service.md

The following assumes that a react app exists, Dockerfile exists, gcp is installed locally, a project is created, and a Custom Domain is built.
- See docker.md in this folder to create the Dockerfile
- See gcp_custom_domain.md in this folder to create a zone for a custom domain

See bottom of CLI on how to deploy an updated version of the app.

Cloud Run Google doc
https://cloud.google.com/run/docs/setup

Cloud Run Google Community
https://cloud.google.com/community/tutorials/deploy-react-nginx-cloud-run

Cloud Run Dev.io
https://dev.to/johannesvitt/deploy-a-react-app-on-gcp-with-google-cloud-run-il3

Load Balancer Google Doc
https://cloud.google.com/load-balancing/docs/https

Map Custom Domains
https://cloud.google.com/run/docs/mapping-custom-domains#https-load-balancer
https://cloud.google.com/load-balancing/docs/https/setup-global-ext-https-serverless

## Console
Instructions on how to build the app in Cloud Run using GCP console

### Create project
It top toolbar, click the current project in the dropdown. In the popup, in the top-right, click "New Project.

Name the project and click create.

After the project is created, in the popup click "Select Project" to switch to the project.

### Deploy to Cloud Run
https://cloud.google.com/run/docs/deploying#console

### Create Static IP
https://cloud.google.com/compute/docs/ip-addresses/reserve-static-external-ip-address#console

### SSL Certificate
https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs#console

Go to Network Services, Load Balancing
Click "Create SSL Certificate"
Name: charis-ssl
Description: Charis Mediation production website
Create mode: Create Google-managed certificate
Domain 1: charismediation.org
Click Create

### Load Balancer with Cloud Run
https://cloud.google.com/load-balancing/docs/https/setting-up-https-serverless

Go to VPC Network, IP addresses
Click Reserve Static Address

Premium:
Name: charis-ip
Desccription: Static IPv4 address for charismediation.org
Network Tier: Premium

Standard:
Name: charis-ip-std
Desccription: Static IPv4 address for charismediation.org
Network Tier: Standard
Region: us-west3 (Salt Lake City, since other resources already there)

Click Reserve

Premium
Go to Network Services, Load Balancing
Click Create Load Balancer
Under Application load balancer (HTTP/S), click Start Configuration
Under Internet facing or internal only, select From Internet to my VMs.
Under Global or regional, select Global HTTP(S) Load Balancer (classic).
Click Continue.
Name: charis-lb
Protocol: HTTPS
Network Service Tier: Premium
IP Version: IPv4
IP Address: charis-ip
Port: 443
Certificate: charis-ssl
Check mark the Enable HTTP to HTTPS Redirect
Click Done

Standard:
Go to Network Services, Load Balancing
Click Create Load Balancer
Under Application load balancer (HTTP/S), click Start Configuration
Under Internet facing or internal only, select From Internet to my VMs.
Under Global or regional, select Classic application load balancer
Click Continue.
Load Balancer Name: charis-lb-std
Region: us-west3

New Frontend IP and port
Description: Classic application load balancer for Standard Network Service Tier.
Protocol: HTTPS
Network Service Tier: Standard
IP Version: IPv4
IP Address: charis-ip-front-std
Port: 443
Certificate: charis-ssl
Check mark the Enable HTTP to HTTPS Redirect
Click Done

Click Backend Configuration
In dropdown for Backend Configuration, select Create Backend Service
Name: charis-be
Description: Backend for charismediation.org
Backend Type: Serverless Network Element Group (NEG)
In New Backend dropdown, click Create Serverless Network Endpoint Group
Name: charis-neg
Region: us-west-3
Click Cloud Run
Service: Select Cloud Run service deployed (charis-app-prod)
Under New Backend, click Done
Uncheck Enable Cloud CDN
Click Create

Click on Host Path and Rules
Mode: Simple Host path rule
charis-be should be selected

Change mode to "Advanced host path rule (URL redirect)
Click "Add host and path rule"
New host and path rule: www.charismediation.org
Edit any paths
Click Redirect the client to different host/path
Host redirect: www.charismediation.org
Path redirect: https://charismediation.org
Keep same: Redirect response code: 301 - Moved Permanently
Check Enable for HTTPS redirect
Click Save

Back on "Host path rules" click Done

Click on Review and Finalize
Click Create
Note static IP address

### Connect Domain to Load Balancer
Go to Cloud DNS
Click on zone created
Click Add Standard
Enter the static IP address created
Click create

## CLI

### Reserve Static IP Address
gcloud compute addresses create charis-ip-std \
--project=charis-377419 \
--description=Static\ IPv4\ address\ for\ charismediation.org\ using\ Standard\ Network\ Service\ Tier \
--network-tier=STANDARD \
--region=us-west3

### Classic application load balancer
POST https://compute.googleapis.com/compute/v1/projects/charis-377419/global/urlMaps
{
  "defaultUrlRedirect": {
    "httpsRedirect": true,
    "redirectResponseCode": "MOVED_PERMANENTLY_DEFAULT"
  },
  "description": "Automatically generated HTTP to HTTPS redirect for the charis-ip-front-std forwarding rule",
  "name": "charis-ip-front-std-redirect"
}

POST https://compute.googleapis.com/compute/v1/projects/charis-377419/global/targetHttpProxies
{
  "name": "charis-ip-front-std-target-proxy",
  "urlMap": "projects/charis-377419/global/urlMaps/charis-ip-front-std-redirect"
}

POST https://compute.googleapis.com/compute/v1/projects/charis-377419/regions/us-west3/forwardingRules
{
  "IPAddress": "35.217.88.156",
  "IPProtocol": "TCP",
  "loadBalancingScheme": "EXTERNAL",
  "name": "charis-ip-front-std-forwarding-rule",
  "networkTier": "STANDARD",
  "portRange": "80",
  "region": "us-west3",
  "target": "projects/charis-377419/global/targetHttpProxies/charis-ip-front-std-target-proxy"
}

POST https://compute.googleapis.com/compute/v1/projects/charis-377419/global/urlMaps
{
  "defaultService": "projects/charis-377419/global/backendServices/charis-be",
  "hostRules": [
    {
      "hosts": [
        "www.charismediation.org"
      ],
      "pathMatcher": "path-matcher-1"
    }
  ],
  "name": "charis-lb-std",
  "pathMatchers": [
    {
      "defaultUrlRedirect": {
        "hostRedirect": "www.charismediation.org",
        "httpsRedirect": true,
        "pathRedirect": "charismediation.org",
        "redirectResponseCode": "MOVED_PERMANENTLY_DEFAULT",
        "stripQuery": false
      },
      "name": "path-matcher-1"
    }
  ]
}

POST https://compute.googleapis.com/compute/v1/projects/charis-377419/global/targetHttpsProxies
{
  "name": "charis-lb-std-target-proxy",
  "quicOverride": "NONE",
  "sslCertificates": [
    "projects/charis-377419/global/sslCertificates/charis-ssl"
  ],
  "urlMap": "projects/charis-377419/global/urlMaps/charis-lb-std"
}

POST https://compute.googleapis.com/compute/v1/projects/charis-377419/regions/us-west3/forwardingRules
{
  "IPAddress": "projects/charis-377419/regions/us-west3/addresses/charis-ip-std",
  "IPProtocol": "TCP",
  "description": "Frontend IP for Standard Network Service Tier.",
  "loadBalancingScheme": "EXTERNAL",
  "name": "charis-ip-front-std",
  "networkTier": "STANDARD",
  "portRange": "443",
  "region": "projects/charis-377419/regions/us-west3",
  "target": "projects/charis-377419/global/targetHttpsProxies/charis-lb-std-target-proxy"
}

### Setup for Cloud Run
```sh
PROJECT_NAME="charis"
PROJECT_ID="charis-377419"
REGION="us-west3"
CLOUD_RUN_SERVICE_NAME="charis-app-prod2"
SSL_CERTIFICATE_NAME="charis-ssl2"
STATIC_IP_NAME="charis-ip2"
SERVERLESS_NEG_NAME="charis-neg2"
URL_MAP_NAME="charis-lb-https2"
URL_MAP_REDIRECT_NAME="charis-lb-http-redirect2"
TARGET_HTTPS_PROXY_NAME="charis-lb-target-https-proxy2"
TARGET_HTTP_PROXY_NAME="charis-lb-target-http-proxy2"
HTTPS_FORWARDING_RULE_NAME="charis-lb-https2"
HTTP_FORWARDING_RULE_NAME="charis-lb-http-forwarding-rule2"
BACKEND_SERVICE_NAME="charis-be2"
DNS_ZONE="charis-zone2"
DOMAIN="charismediation.org"

# URL_MAP_NAME for HTTPS traffic
# URL_MAP_REDIRECT_NAME for Redirect HTTP to HTTPS

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
run.googleapis.com                Cloud Run Admin API
cloudbuild.googleapis.com         Cloud Build API

# if not enabled run 
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com
```

### Deploy Cloud Run
https://cloud.google.com/run/docs/deploying#command-line

```sh
# Build docker image and upload to Registry. Uses Dockerfile in folder where command is run.
gcloud builds submit \
--tag gcr.io/$PROJECT_ID/$CLOUD_RUN_SERVICE_NAME

# Deploy
gcloud run deploy $CLOUD_RUN_SERVICE_NAME \
--image gcr.io/$PROJECT_ID/$CLOUD_RUN_SERVICE_NAME\:latest \
--platform=managed \
--allow-unauthenticated \
--port=80 \
--tag=$PROJECT_NAME

```
Note URL for Cloud Run deployment

### Create Static IP
https://cloud.google.com/compute/docs/ip-addresses/reserve-static-external-ip-address#gcloud

```sh
# Create static IP
gcloud compute addresses create $STATIC_IP_NAME \
--network-tier=PREMIUM \
--ip-version=IPV4 \
--description="Static IPv4 address for charismediation.org" \
--global

# Assign result to variable:
STATIC_IP=`gcloud compute addresses describe $STATIC_IP_NAME \
--format="get(address)" \
--global`
```

### Load Balancer with Cloud Run
https://cloud.google.com/load-balancing/docs/https/setting-up-https-serverless#gcloud_1

Create Google-managed Certificate
https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs

```sh
# Create serverless Network Element Group (NEG)
gcloud compute network-endpoint-groups create $SERVERLESS_NEG_NAME \
--region=$REGION \
--network-endpoint-type=serverless \
--cloud-run-service=$CLOUD_RUN_SERVICE_NAME

# Create backend service
gcloud compute backend-services create $BACKEND_SERVICE_NAME \
--load-balancing-scheme=EXTERNAL \
--protocol=HTTPS \
--port-name=http \
--global

# Add serverless NEG as a backend to the backend service
gcloud compute backend-services add-backend $BACKEND_SERVICE_NAME \
--global \
--network-endpoint-group=$SERVERLESS_NEG_NAME \
--network-endpoint-group-region=$REGION

# Create a URL map (aka Load Balancer) to route incoming requests to the backend service
gcloud compute url-maps create $URL_MAP_NAME \
--default-service $BACKEND_SERVICE_NAME

```

### Create URL map to redirect HTTP traffic to HTTPS load balancer
This accomplishes the same tasks completed when checking the box for "Redirect HTTP to HTTPS" in the console setup for Create Load Balancer (see Console section above)
https://cloud.google.com/load-balancing/docs/https/setting-up-http-https-redirect#partial-http-lb

Create charis-lb-http-redirect2.yaml file
```sh
kind: compute#urlMap
name: charis-lb-http-redirect2
defaultUrlRedirect:
  redirectResponseCode: MOVED_PERMANENTLY_DEFAULT
  httpsRedirect: True
description: HTTP to HTTPS redirect for the charis-lb2 forwarding rule

```

Run command from that folder
```sh
# Validate map
gcloud compute url-maps validate \
--source charis-lb-http-redirect2.yaml

# Create map
gcloud compute url-maps import charis-lb-http-redirect2 \
--source charis-lb-http-redirect2.yaml \
--global

# List URL maps
gcloud compute url-maps list

# Create target proxy to route HTTP traffic to URL map
gcloud compute target-http-proxies create $TARGET_HTTP_PROXY_NAME \
--url-map=$URL_MAP_REDIRECT_NAME

```

```sh
# Create certificate
gcloud compute ssl-certificates create $SSL_CERTIFICATE_NAME \
--project=$PROJECT_ID \
--global \
--description="Charis Mediation production website" \
--domains=$DOMAIN

# Check certificate status
gcloud compute ssl-certificates list \
--global

gcloud compute ssl-certificates describe $SSL_CERTIFICATE_NAME \
--global \
--format="get(name, managed.status, managed.domainStatus)"

# Create target proxy to route HTTPS traffic to URL map
gcloud compute target-https-proxies create $TARGET_HTTPS_PROXY_NAME \
--ssl-certificates=$SSL_CERTIFICATE_NAME \
--url-map=$URL_MAP_NAME

# Create forwarding rule to route incoming HTTP requests to the proxy
gcloud compute forwarding-rules create $HTTP_FORWARDING_RULE_NAME \
--load-balancing-scheme=EXTERNAL \
--network-tier=PREMIUM \
--address=$STATIC_IP \
--target-http-proxy=$TARGET_HTTP_PROXY_NAME \
--global \
--ports=80

gcloud compute forwarding-rules describe $HTTP_FORWARDING_RULE_NAME \
--global

gcloud compute forwarding-rules create $HTTPS_FORWARDING_RULE_NAME \
--load-balancing-scheme=EXTERNAL \
--network-tier=PREMIUM \
--address=$STATIC_IP \
--target-https-proxy=$TARGET_HTTPS_PROXY_NAME \
--global \
--ports=443

gcloud compute forwarding-rules describe $HTTPS_FORWARDING_RULE_NAME --global
```

### Test Load Balancer
https://cloud.google.com/load-balancing/docs/https/setting-up-https-serverless#gcloud_1
For http, it may take 10 minutes before it works. Keep the page up and wait for it to resovle.
For https, run the following to check the provisioning status.
```sh
# Test HTTP to HTTPS redirect
curl -v http://hostname.com

# Test SSL certificate
gcloud compute ssl-certificates describe $SSL_CERTIFICATE_NAME \
--global \
--format="get(name, managed.status, managed.domainStatus)"
```

http://STATIC_IP
https://STATIC_IP

Both should direct toward the Charis React website.
If the https does not work, it may show the message, "ERR_SSL_VERSION_OR_CIPHER_MISMATCH". If so, then ...
The https may not work because ...

Should not have a "Not secure" message in the hyperlink bar. If you see this, click on it, and it may indicate that the certificate is not valid. If so, then ...

### Create a Managed Zone
https://cloud.google.com/dns/docs/zones
If not already done, create a DNS Managed Zone

```sh
gcloud dns managed-zones create $DNS_ZONE \
--description="DNS managed zone for $PROJECT_NAME" \
--dns-name=$DOMAIN \
--visibility=public

```

### Add Static IP to DNS Zone
https://cloud.google.com/dns/docs/records#gcloud
https://cloud.google.com/load-balancing/docs/ssl-certificates/troubleshooting

Add a resource record set

```sh
gcloud dns record-sets create $DOMAIN \
--project=$PROJECT_ID \
--zone=$DNS_ZONE \
--type="A" \
--ttl="300" \
--rrdatas=$STATIC_IP

gcloud dns record-sets create $DOMAIN \
--project=$PROJECT_ID \
--zone=charis-zone \
--type="A" \
--ttl="300" \
--rrdatas=35.190.79.222
```

Check managed domain status for the Google-managed SSL certificate. At first the domain status will show "FAILED_NOT_VISIBLE" since the SSL certificate provisioning has not been completed for the domain. It usually takes a few hours, but it could take up to 72 hours. After it successfully completes, it will show ACTIVE for status and domainStatus. See the following section for troubleshooting steps.
```sh
gcloud compute ssl-certificates describe $SSL_CERTIFICATE_NAME \
--global \
--format="get(name, managed.status, managed.domainStatus)"

# SSL certificate not completed 
charis-ssl     PROVISIONING    charismediation.org=FAILED_NOT_VISIBLE

## SSWL certificate provisioning completed
charis-ssl      ACTIVE  charismediation.org=ACTIVE
   
```

### Verify Domain forwards to IP address
https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs

Dig on domain
```sh
dig charismediation.org

; <<>> DiG 9.10.6 <<>> charismediation.org
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 28941
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1440
;; QUESTION SECTION:
;charismediation.org.           IN      A

;; ANSWER SECTION:
charismediation.org.    1       IN      A       35.190.79.222

;; Query time: 46 msec
;; SERVER: fe80::c2d7:aaff:fee0:fecf%13#53(fe80::c2d7:aaff:fee0:fecf%13)
;; WHEN: Mon Feb 27 11:23:51 PST 2023
;; MSG SIZE  rcvd: 64

```

nslookup on domain
```sh
nslookup charismediation.org

Server:         fe80::c2d7:aaff:fee0:fecf%13
Address:        fe80::c2d7:aaff:fee0:fecf%13#53

Non-authoritative answer:
Name:   charismediation.org
Address: 35.190.79.222

```

### Troubleshoot SSL Certificate
https://cloud.google.com/load-balancing/docs/ssl-certificates/troubleshooting#domain-status
https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs#verify-target-proxy

After the certificate and domain statuses are active, it can take up to 30 minutes for your load balancer to begin using your Google-managed SSL certificate.
```sh
echo | openssl s_client \
-showcerts \
-servername $DOMAIN \
-connect $STATIC_IP:443 \
-verify 99 \
-verify_return_error

echo | openssl s_client \
-showcerts \
-servername $DOMAIN \
-connect 35.190.79.222:443 \
-verify 99 \
-verify_return_error

verify depth is 99
CONNECTED(00000003)
depth=2 C = US, O = Google Trust Services LLC, CN = GTS Root R1
verify return:1
depth=1 C = US, O = Google Trust Services LLC, CN = GTS CA 1D4
verify return:1
depth=0 CN = charismediation.org
verify return:1
---
Certificate chain
 0 s:CN = charismediation.org
   i:C = US, O = Google Trust Services LLC, CN = GTS CA 1D4
   a:PKEY: rsaEncryption, 2048 (bit); sigalg: RSA-SHA256
   v:NotBefore: Feb 24 01:18:06 2023 GMT; NotAfter: May 25 02:08:57 2023 GMT
-----BEGIN CERTIFICATE-----
[certifcate here]
-----END CERTIFICATE-----
 1 s:C = US, O = Google Trust Services LLC, CN = GTS CA 1D4
   i:C = US, O = Google Trust Services LLC, CN = GTS Root R1
   a:PKEY: rsaEncryption, 2048 (bit); sigalg: RSA-SHA256
   v:NotBefore: Aug 13 00:00:42 2020 GMT; NotAfter: Sep 30 00:00:42 2027 GMT
-----BEGIN CERTIFICATE-----
[certifcate here]
-----END CERTIFICATE-----
 2 s:C = US, O = Google Trust Services LLC, CN = GTS Root R1
   i:C = BE, O = GlobalSign nv-sa, OU = Root CA, CN = GlobalSign Root CA
   a:PKEY: rsaEncryption, 4096 (bit); sigalg: RSA-SHA256
   v:NotBefore: Jun 19 00:00:42 2020 GMT; NotAfter: Jan 28 00:00:42 2028 GMT
-----BEGIN CERTIFICATE-----
[certifcate here]
-----END CERTIFICATE-----
---
Server certificate
subject=CN = charismediation.org
issuer=C = US, O = Google Trust Services LLC, CN = GTS CA 1D4
---
No client certificate CA names sent
Peer signing digest: SHA256
Peer signature type: RSA-PSS
Server Temp Key: X25519, 253 bits
---
SSL handshake has read 4695 bytes and written 405 bytes
Verification: OK
---
New, TLSv1.3, Cipher is TLS_AES_256_GCM_SHA384
Server public key is 2048 bit
Secure Renegotiation IS NOT supported
Compression: NONE
Expansion: NONE
No ALPN negotiated
Early data was not sent
Verify return code: 0 (ok)
---
DONE

```

### Delete Resources

```sh
# Delete DNS record set
gcloud dns record-sets delete $DOMAIN \
--zone=$DNS_ZONE \
--type="A"

# Delete DNS Managed Zone
gcloud dns managed-zones delete $DNS_ZONE

# Delete forwarding rules
gcloud compute forwarding-rules delete $HTTPS_FORWARDING_RULE_NAME \
--global

gcloud compute forwarding-rules delete $HTTP_FORWARDING_RULE_NAME \
--global

# Delete target proxies
gcloud compute target-http-proxies delete $TARGET_HTTP_PROXY_NAME
gcloud compute target-https-proxies delete $TARGET_HTTPS_PROXY_NAME

# Delete SSL Certificate
gcloud compute ssl-certificates delete $SSL_CERTIFICATE_NAME \
--global

# Delete URL map (aka Load Balancer)
gcloud compute url-maps delete $URL_MAP_NAME
gcloud compute url-maps delete $URL_MAP_REDIRECT_NAME

# Remove serverless NEG 
gcloud compute backend-services remove-backend $BACKEND_SERVICE_NAME \
--global \
--network-endpoint-group=$SERVERLESS_NEG_NAME \
--network-endpoint-group-region=$REGION

# Delete backend service
gcloud compute backend-services delete $BACKEND_SERVICE_NAME \
--global

# Delete serverless Network Element Group (NEG)
gcloud compute network-endpoint-groups delete $SERVERLESS_NEG_NAME \
--region=$REGION

# Delete Static IP
gcloud compute addresses delete $STATIC_IP_NAME \
--global

# Check Cloud Run revisions and delete them. If only one revision, then need to delete service.
gcloud run revisions list
gcloud run revisions delete charis-app-prod3-00001-moh

# Delete Cloud run services
gcloud run services delete $CLOUD_RUN_SERVICE_NAME


```

### Deploy revision of app

```sh
PROJECT_NAME="charis"
PROJECT_ID="charis-377419"
REGION="us-west3"
CLOUD_RUN_SERVICE_NAME="charis-app-prod"

# Create new build files
npm run build

# Build docker image and upload to Registry. Uses Dockerfile in folder where command is run.
gcloud builds submit \
--tag gcr.io/$PROJECT_ID/$CLOUD_RUN_SERVICE_NAME

# Deploy
gcloud run deploy $CLOUD_RUN_SERVICE_NAME \
--image gcr.io/$PROJECT_ID/$CLOUD_RUN_SERVICE_NAME\:latest \
--platform=managed \
--allow-unauthenticated \
--port=80 \
--tag=$PROJECT_NAME

```

