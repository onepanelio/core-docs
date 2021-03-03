(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(2),c=(a(0),a(119));const o={title:"TLS certificates",sidebar_label:"TLS certificates",description:"Enabling fully managed TLS certificates on Onepanel"},r={unversionedId:"deployment/configuration/tls",id:"deployment/configuration/tls",isDocsHomePage:!1,title:"TLS certificates",description:"Enabling fully managed TLS certificates on Onepanel",source:"@site/docs/deployment/configuration/tls.md",slug:"/deployment/configuration/tls",permalink:"/docs/deployment/configuration/tls",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/deployment/configuration/tls.md",version:"current",sidebar_label:"TLS certificates",sidebar:"deployment",previous:{title:"Configuration files",permalink:"/docs/deployment/configuration/files"},next:{title:"Adding components",permalink:"/docs/deployment/components/add"}},i=[{value:"Manually managed certificates",id:"manually-managed-certificates",children:[]},{value:"Automatically managed certificates",id:"automatically-managed-certificates",children:[]},{value:"Supported DNS providers",id:"supported-dns-providers",children:[{value:"AzureDNS",id:"azuredns",children:[]},{value:"Cloudflare",id:"cloudflare",children:[]},{value:"Google CloudDNS",id:"google-clouddns",children:[]},{value:"Route53",id:"route53",children:[]}]}],l={rightToc:i};function s({components:e,...t}){return Object(c.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"TLS certificate can be added in two ways:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Manually managed certificates"),Object(c.b)("li",{parentName:"ul"},"Automatically managed certificates with ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://letsencrypt.org/"}),"Let's Encrypt"))),Object(c.b)("h2",{id:"manually-managed-certificates"},"Manually managed certificates"),Object(c.b)("p",null,"To enable HTTPS and HTTPS redirection, but manage your own certificate, add the following flag to ",Object(c.b)("inlineCode",{parentName:"p"},"opctl init"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"opctl init ... --enable-https\n")),Object(c.b)("h2",{id:"automatically-managed-certificates"},"Automatically managed certificates"),Object(c.b)("p",null,"To enable HTTPS and HTTPS redirection and enable automated certificate manage through ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://letsencrypt.org"}),"Let's Encrypt"),", add the following flags to ",Object(c.b)("inlineCode",{parentName:"p"},"opctl init"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"opctl init ... --enable-https --enable-cert-manager --dns-provider <supported-dns-provider>\n")),Object(c.b)("h2",{id:"supported-dns-providers"},"Supported DNS providers"),Object(c.b)("h3",{id:"azuredns"},"AzureDNS"),Object(c.b)("p",null,"The flag is ",Object(c.b)("inlineCode",{parentName:"p"},"azuredns"),", as in "),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"opctl init ... --dns-provider azuredns\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This guide has been adapted from the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cert-manager.io/docs/configuration/acme/dns01/azuredns/"}),"cert-manager docs")," "))),Object(c.b)("p",null,"This guide assumes you have ",Object(c.b)("inlineCode",{parentName:"p"},"azure-cli")," installed."),Object(c.b)("p",null,"First set some variables for your project"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Choose a name for the service principal that contacts azure DNS to present the challenge\n$ AZURE_CERT_MANAGER_NEW_SP_NAME=NEW_SERVICE_PRINCIPAL_NAME\n# This is the name of the resource group that you have your dns zone in\n$ AZURE_DNS_ZONE_RESOURCE_GROUP=AZURE_DNS_ZONE_RESOURCE_GROUP\n# The DNS zone name. It should be something like domain.com or sub.domain.com\n$ AZURE_DNS_ZONE=AZURE_DNS_ZONE\n")),Object(c.b)("p",null,"Then run,"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"az ad sp create-for-rbac --name $AZURE_CERT_MANAGER_NEW_SP_NAME\n")),Object(c.b)("p",null,"Look at the output, it should be something like this."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-{"}),'     "appId": "app_id",\n     "displayName": "display_name",\n     "name": "http://something",\n     "password": "password",\n     "tenant": "tenant"\n   }\n')),Object(c.b)("p",null,"You will also need the id from "),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"az account show\n")),Object(c.b)("p",null,"Here's how the ",Object(c.b)("inlineCode",{parentName:"p"},"params.yaml")," portion connects to the above keys and variables."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"certManager:\n  azuredns:\n    clientId: appId\n    environment: AzurePublicCloud\n    hostedZoneName: $AZURE_DNS_ZONE\n    resourceGroupName: $AZURE_DNS_ZONE_RESOURCE_GROUP\n    spPassword: password\n    subscriptionId: this comes from `az account show` then the id field.\n    tenantId: tenant\n")),Object(c.b)("h3",{id:"cloudflare"},"Cloudflare"),Object(c.b)("p",null,"The flag is ",Object(c.b)("inlineCode",{parentName:"p"},"cloudflare"),", as in "),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"opctl init ... --dns-provider cloudflare\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This guide has been adapted from the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cert-manager.io/docs/configuration/acme/dns01/cloudflare/"}),"cert-manager docs")," "))),Object(c.b)("p",null,"Currently only API Tokens are supported."),Object(c.b)("p",null,"To create an API Token, login to your CloudFlare account and go to\n",Object(c.b)("em",{parentName:"p"},"User Profile > API Tokens > API Tokens"),". "),Object(c.b)("p",null,"The following settings are recommended:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Permissions:",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Zone - DNS - Edit"),Object(c.b)("li",{parentName:"ul"},"Zone - Zone - Read"))),Object(c.b)("li",{parentName:"ul"},"Zone Resources:",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Include - All Zones")))),Object(c.b)("p",null,"Once you create your token, copy it."),Object(c.b)("p",null,"Here's how the ",Object(c.b)("inlineCode",{parentName:"p"},"params.yaml")," should look with the above token."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"certManager:\n  cloudflare:\n    apiToken: <api-token goes here>\n    email: <yourCloudflareEmail@example.com>\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"If your token has an non-alphanumerical character, surround the token with single quotes."),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"certManager:\n  cloudflare:\n    apiToken: '<api-token goes here>'\n    email: <yourCloudflareEmail@example.com>\n")))),Object(c.b)("h3",{id:"google-clouddns"},"Google CloudDNS"),Object(c.b)("p",null,"The flag is ",Object(c.b)("inlineCode",{parentName:"p"},"clouddns"),", as in "),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"opctl init ... --dns-provider clouddns\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This guide has been adapted from the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cert-manager.io/docs/configuration/acme/dns01/google/"}),"cert-manager docs")," "))),Object(c.b)("p",null,"This guide assumes you have ",Object(c.b)("inlineCode",{parentName:"p"},"gcloud")," installed and set to the correct project and zone."),Object(c.b)("p",null,"First set your project id so we can easily reference it"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"export PROJECT_ID=myproject-id\n")),Object(c.b)("h4",{id:"create-service-account"},"Create service account"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'gcloud iam service-accounts create dns01-solver --display-name "dns01-solver"\n')),Object(c.b)("p",null,"Then,"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"gcloud projects add-iam-policy-binding $PROJECT_ID \\\n   --member serviceAccount:dns01-solver@$PROJECT_ID.iam.gserviceaccount.com \\\n   --role roles/dns.admin\n")),Object(c.b)("h4",{id:"get-credentials"},"Get credentials"),Object(c.b)("p",null,"Create the ",Object(c.b)("inlineCode",{parentName:"p"},"dns01-solver")," service account if you have not already."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"gcloud iam service-accounts create dns01-solver\n")),Object(c.b)("p",null,"Now, we get the credential data we need."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"gcloud iam service-accounts keys create key.json \\\n   --iam-account dns01-solver@$PROJECT_ID.iam.gserviceaccount.com\n")),Object(c.b)("p",null,"This command will save the credentials into ",Object(c.b)("inlineCode",{parentName:"p"},"key.json"),"."),Object(c.b)("p",null,"Open up that file and copy its contents.\nPaste them into your ",Object(c.b)("inlineCode",{parentName:"p"},"params.yaml"),", so you should have something like this"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'certManager:\n  clouddns:\n    projectId: my-project-id\n    serviceAccountKey: |\n      {\n        "type": "service_account",\n        "project_id": "my-project-id",\n        "private_key_id": "private_key_id",\n        "private_key": "private_key",\n        "client_email": "client_email",\n        "client_id": "client_id",\n        "auth_uri": "https://accounts.google.com/o/oauth2/auth",\n        "token_uri": "https://oauth2.googleapis.com/token",\n        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",\n        "client_x509_cert_url": "cert_url"\n      }\n')),Object(c.b)("h3",{id:"route53"},"Route53"),Object(c.b)("p",null,"The flag is ",Object(c.b)("inlineCode",{parentName:"p"},"route53"),", as in "),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"opctl init ... --dns-provider route53\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This guide has been adapted from the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cert-manager.io/docs/configuration/acme/dns01/route53/"}),"cert-manager docs")," "))),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This guide assumes you have a hosted zone set up in Route53."))),Object(c.b)("h4",{id:"set-up-a-iam-role"},"Set up a IAM Role"),Object(c.b)("p",null,"In order to solve the DNS01 challenge, cert-manager needs permissions to add records to Route53."),Object(c.b)("p",null,"Create a IAM policy with the following permissions:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": "route53:GetChange",\n            "Resource": "arn:aws:route53:::change/*"\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n              "route53:ChangeResourceRecordSets",\n              "route53:ListResourceRecordSets"\n            ],\n            "Resource": "arn:aws:route53:::hostedzone/*"\n        },\n        {\n            "Effect": "Allow",\n            "Action": "route53:ListHostedZonesByName",\n            "Resource": "*"\n        }\n    ]\n}\n')),Object(c.b)("h4",{id:"credentials"},"Credentials"),Object(c.b)("p",null,"You have two options for the set up - either create a user or a role and attach that policy from above. Using a role is considered best practice because you do not have to store permanent credentials in a secret."),Object(c.b)("p",null,"We currently only support providing an accessKeyID and secretAccessKey for credentials."),Object(c.b)("h4",{id:"cross-account-access"},"Cross Account Access"),Object(c.b)("p",null,"Example: Account A manages a Route53 DNS Zone. Now you want account X to be able to manage records in that zone."),Object(c.b)("p",null,"First, create a role with the policy above (let\u2019s call the role dns-manager) and attach a trust relationship like the one below. Make sure role cert-manager in account X exists:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Principal": {\n        "AWS": "arn:aws:iam::XXXXXXXXXXX:role/cert-manager"\n      },\n      "Action": "sts:AssumeRole"\n    }\n  ]\n}\n')),Object(c.b)("p",null,"This allows the role cert-manager in account X to manage the Route53 DNS Zone in account A."),Object(c.b)("h4",{id:"resulting-yaml"},"Resulting Yaml"),Object(c.b)("p",null,"Finally, with everything setup as above, you can configure your yaml as follows,"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"certManager:\n  route53:\n    access_key: <aws-access-key>\n    region: <aws-region>\n    secret_key: <aws-secret-key>\n")))}s.isMDXComponent=!0},119:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),c=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var s=c.a.createContext({}),b=function(e){var t=c.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=b(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(a),u=n,m=d["".concat(r,".").concat(u)]||d[u]||p[u]||o;return a?c.a.createElement(m,i(i({ref:t},s),{},{components:a})):c.a.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var s=2;s<o;s++)r[s]=a[s];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);