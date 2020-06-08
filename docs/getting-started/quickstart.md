---
title: Quick start
sidebar_label: Quick start
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

It's easy to get started with Onepanel. First, you install the CLI (`opctl`) and then using `opctl`, you generate a `params.yaml` file and update it to configure your deployment. Once complete, you can access your deployment from any browser using your Kubernetes authentication token. Finally, you can run a Workflow or create a Workspace.

:::important
The steps in the Quick start allow you to quickly setup a Onepanel cluster for testing. To setup a production cluster with TLS and auto scaling enabled see [instructions for your cloud provider](/docs/deployment/overview#installing-on-public-cloud)
:::

## Step 0: Understand the concepts
First, take a look at [concepts](/docs/getting-started/concepts/namespaces) to understand the different components in Onepanel.

## Step 1: Create a Kubernetes cluster
Next, create a Kubernetes cluster in one of the following cloud providers:

<Tabs
  defaultValue="aks"
  values={[
    { label: 'Azure AKS', value: 'aks', },
    { label: 'Amazon EKS', value: 'eks', },
    { label: 'Google Cloud GKE', value: 'gke', },
  ]
}>
<TabItem value="aks">

:::note
Make sure [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) (`az`) is installed before proceeding.
:::

Run this `az` command to create a bare minimum cluster with 2 `Standard_D4s_v3` nodes:

```bash
az aks create --resource-group <resource-group> --name <cluster-name> \
    --node-count 2 \
    --node-vm-size Standard_D4s_v3 \
    --node-osdisk-size 100 \
    --min-count 2 \
    --max-count 2 \
    --enable-cluster-autoscaler \
    --network-plugin azure \
    --network-policy azure \
    --enable-addons monitoring \
    --generate-ssh-keys
```

You can then get access credentials by running:

```
az aks get-credentials --resource-group <resource-group> --name <cluster-name> --admin
```

</TabItem>
<TabItem value="eks">

:::note
Make sure [Amazon EKS CLI](https://eksctl.io/introduction/#installation) (`eksctl`) is installed before proceeding.
:::

Run this `eksctl` commands to create a bare minimum cluster with 2 `m5.xlarge` nodes:

```bash
eksctl create cluster --name=<cluster-name> --region <region> \
    --nodes 2  \
    --node-type m5.xlarge \
    --node-volume-size 100 \
    --nodes-min 2 \
    --nodes-max 2 \
    --asg-access \
    --managed \
    --ssh-access
```

The `eksctl` command above will automatically retrieve your cluster's access credentials but you can also get them by running:

```
eksctl utils write-kubeconfig --cluster=<cluster-name> --region <region>
```

</TabItem>
<TabItem value="gke">

:::note
Make sure [Google Cloud SDK](https://cloud.google.com/sdk/install) (`gcloud`) is installed before proceeding.
:::

Run this `gcloud` command to create a bare minimum cluster with 2 `n1-standard-4` nodes:

```bash
gcloud container --project <project-name> clusters create <cluster-name> --zone <zone> \
    --num-nodes 2 \
    --machine-type n1-standard-4 \
    --disk-size 100 \
    --min-nodes 0 \
    --max-nodes 2 \
    --enable-autoscaling \
    --enable-network-policy \
    --enable-stackdriver-kubernetes \
    --addons HorizontalPodAutoscaling,HttpLoadBalancing
```

The command above will automatically retrieve your cluster's access credentials but you can also get them by running:

```
gcloud container clusters get-credentials <cluster-name> --zone <zone>
```

</TabItem>
</Tabs>

## Step 2: Install Onepanel

1. Download the latest `opctl` for your operating system from [our release page](https://github.com/onepanelio/core/releases/latest).

<Tabs
  defaultValue="linux"
  values={[
    { label: 'Linux', value: 'linux', },
    { label: 'macOS', value: 'macos', },
  ]
}>
<TabItem value="linux">

```bash
# Download the binary
curl -sLO https://github.com/onepanelio/core/releases/download/latest/opctl-linux-amd64

# Make binary executable
chmod +x opctl-linux-amd64

# Move binary to path
mv ./opctl-linux-amd64 /usr/local/bin/opctl

# Test installation
opctl version
```

</TabItem>
<TabItem value="macos">

```bash
# Download the binary
curl -sLO https://github.com/onepanelio/core/releases/download/latest/opctl-macos-amd64

# Make binary executable
chmod +x opctl-macos-amd64

# Move binary to path
mv ./opctl-macos-amd64 /usr/local/bin/opctl

# Test installation
opctl version
```

</TabItem>
</Tabs>

2. Run the following command to initialize a `params.yaml` template for your provider:

<Tabs
  defaultValue="aks"
  values={[
    { label: 'Azure AKS', value: 'aks', },
    { label: 'Amazon EKS', value: 'eks', },
    { label: 'Google Cloud GKE', value: 'gke', },
  ]
}>
<TabItem value="aks">

```bash
opctl init --provider aks
```

</TabItem>
<TabItem value="eks">

```bash
opctl init --provider eks
```

</TabItem>
<TabItem value="gke">

```bash
opctl init --provider gke
```

</TabItem>
</Tabs>

3. Populate `params.yaml` by following the instructions in the template, you can also refer to [configuration file sections](/docs/deployment/configuration/files#sections) for more detailed information.

4. Finally, run the following command to deploy Onepanel to your cluster:

```bash
opctl apply
```

:::note
If the command completes but it indicates that your cluster is not ready, you can check status again by running `opctl app status`. If you're still seeing issues, visit our [Troubleshooting](/docs/deployment/troubleshooting/overview) page.
:::

5. Once the deployment completes, the CLI will display the IP and wildcard domain you need to use to setup your DNS. You can also get this information again by running:

```bash
opctl app status
```

6. Create the appropriate DNS record in your DNS provider based on the instructions above.

:::tip
If you don't have a domain name handy or you're waiting for your DNS record to propogate, you can set up a [hosts file](https://en.wikipedia.org/wiki/Hosts_(file)) to quickly test the deployment.
:::

7. Wait a few minutes and check the URL mentioned in the instructions above. Your applications should load with a screen prompting you to enter a token.

:::note
If the application is not loading, visit our [Troubleshooting](/docs/deployment/troubleshooting/overview) page for some steps that can help resolve most issues. If you are still having issues, join our [Slack community](https://join.slack.com/t/onepanel-ce/shared_invite/zt-eyjnwec0-nLaHhjif9Y~gA05KuX6AUg) or open an issue in [GitHub](https://github.com/onepanelio/core/issues).
:::

8. Use the following command to get your auth token to log into Onepanel:

```bash
opctl auth token
```

## Step 3: Create a simple Workflow
Let's first create a simple Directed Acyclic Graph (DAG) Workflow Template:

1. Click **Workflows** in the top menu.

<img src="/img/quickstart-231711.png" alt="drawing" width="400px"/>


2. Click **Create Template**.

<img src="/img/quickstart-231935.png" alt="drawing" width="400px"/>

3. Enter "Test DAG" for "Template Name", and select "DAG". This will pre-fill a sample DAG.

![](/img/quickstart-232332.png)

4. Click **Save** to save your template.

5. You should now be on the "Workflow details" page. Click **Execute Workflow**.

![](/img/quickstart-232622.png)

6. A modal will be displayed, click **Execute**.

![](/img/quickstart-232824.png)

7. The workflow will start executing. You can click on every task to see details and running logs.

![](/img/quickstart-232904.png)

8. You have now setup Onepanel and run a simple Workflow.
