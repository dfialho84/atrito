# K8s

## Installing Kind

Install Kind:

```sh
$ [ $(uname -m) = x86_64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.23.0/kind-linux-amd64
$ chmod +x ./kind
$ sudo mv ./kind /usr/local/bin/kind
```

Create a simple cluster:

```sh
$ kind create cluster
```

### Installing Kubectl

Download and install Kubectl:

```sh
$ curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
$ sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
```

Check installation:

```sh
$ kubectl version --client --output=yaml
```

### Utils

Base64 encode variable

```sh
$ echo -n 'value' | base64
```

All resources on cluster:

```sh
$ kubectl api-resources
```
