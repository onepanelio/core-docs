---
title: Filesyncer
sidebar_label: Filesyncer
description: Filesyncer
---

## Sync Files from Object Storage to Workspace
1. From your workspace click the onepanel icon located on the lower right of the screen.

2. The bottom panel should appear and you should be able to see the **Sync Files** section ![sync files](/img/filesyncer/sync-files.png)

3. In **Workspace path** type a directory name you want the synced files to be saved into. ![workspace path example](/img/filesyncer/workspace-path-example.png) 

4. Then, in **Object storage location** select **Browse** ![object storage location](/img/filesyncer/object-storage-location.png) 

5. Select the directory you want to sync to your workspace and click **Confirm** ![browse files](/img/filesyncer/browse-files.png) 

6. Once complete click **Sync to workspace**

## Sync Files from Workspace to Object Storage
1. Under **workspace path** select **Browse**

	![workspace path](/img/filesyncer/workspace-path.png)

2. This'll open a window which includes all folders available in the workspace. ![browse files from workspace](/img/filesyncer/browse-files-ws.png)

3. select the folder you want to sync into your object storage and click **Confirm** ![workspace path to object storage](/img/filesyncer/workspace-path-object-storage.png)

4. Once complete click **Sync to Object Storage**

## Custom Configuration

Users can add another filesyncer container to templates that checks files at a certain interval in a path and uploads them to an object storage prefix

example:
```yaml
containers:
...
 - name: sys-filesyncer-upload
    image: onepanel/filesyncer:v0.20.0
    imagePullPolicy: Always
    args:
      - upload
      - -path=/share/<path> # path in /share
      - -prefix=<prefix>  # prefix in object storage
      - -host=localhost:9000
      - -interval=10 # interval in seconds
    volumeMounts:
      - name: share
        mountPath: /share
      - name: sys-namespace-config
        mountPath: /etc/onepanel
        readOnly: true
```