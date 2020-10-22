---
title: Contributing
sidebar_label: Contributing
description: Contribute to Onepanel by creating issues, updating documentation or submitting code
---

Welcome to Onepanel CE Project! We are excited to have you as part of the community and welcome all contributions.

## Getting started as a contributor
This document outlines project structure, guidelines and serves as a single source of truth for contributions. Our goal is to make it as easy for everyone to contribute to the code base, documentation, and components.

## Code of conduct
Make sure to read and observe our [Code of Conduct](https://github.com/onepanelio/core/blob/master/CODE_OF_CONDUCT.md).

## Coding conventions
All code should be written in the languages and frameworks listed below and follow that language's conventions. SDKs for different languages are an exception and should follow the best practices for that language.

### Go
- [Effective Go](https://golang.org/doc/effective_go.html)
- [Go code review comments](https://github.com/golang/go/wiki/CodeReviewComments)

### TypeScript and Angular
- [Angular coding style guide](https://angular.io/guide/styleguide)

### SDKs
All SDKs should be generated with [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator-cli) using our generated [API specification file](https://github.com/onepanelio/core/blob/master/api/api.swagger.json). See our Python SDK's [Makefile](https://github.com/onepanelio/python-sdk/blob/master/Makefile) for reference.

## Documentation style guide
We welcome all contributions and follow these highlights from [Google developer documentation style guide](https://developers.google.com/style/highlights).

Our documentation site is built on [Docusaurus](https://v2.docusaurus.io/).

## Making pull requests

When making a pull request, prefix the name with one of the following [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) types:

 * **fix** - fixing something
 * **feature** - adding a feature
 * **clean** - cleaning up code
 * **chore** - something mundane like updating a version number
 * **docs** - updating documents
 * **tests** - adding tests
  
An example is: 

```
fix: issue where workspace page crashed upon three refreshes
```

## Project repositories
Onepanel consists of the following repositories. For more information on making contributions, see `CONTRIBUTING.md` in each repository.

### Platform
- [Backend](https://github.com/onepanelio/core/) (this repository) - Code base for backend (Go)
- [Frontend](https://github.com/onepanelio/core-ui/) - Code base for frontend (Angular + TypeScript)
- [CLI](https://github.com/onepanelio/cli/) - Code base for installation and management CLI (Go)
- [Manifests](https://github.com/onepanelio/core-ui/) - Kustomize manifests used by installation and management CLI (YAML)

### SDKs
- [Python SDK](https://github.com/onepanelio/python-sdk/) - Python SDK code and documentation (Python)

### Templates
- [Templates](https://github.com/onepanelio/templates) - Various Workspace, Workflow, Task and Sidecar Templates

### Documentation
- [Documentation](https://github.com/onepanelio/core-docs/) - The repository for documentation site
- [API Documentation](https://github.com/onepanelio/core-api-docs/) - API documentation if you choose to use the API directly
