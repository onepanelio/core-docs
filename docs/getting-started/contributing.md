---
title: Contributing
sidebar_label: Contributing
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

## Commits

All commits should follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) as closely as possible.

## Pull Requests

When making a pull request, 

1. Prefix the name with the type of commit (fix, feature, docs, etc)
2. Add a /kind label in the description (enhancement, bug, etc)


### Prefix the name with the type

The types are

  * **fix** - fixing something
  * **feature** - adding a feature
  * **clean** - cleaning up code
  * **chore** - something mundane like updating a version number
  * **docs** - updating documents
  * **tests** - adding tests
  
An example is: 

```
fix: issue where workspace page crashed upon three refreshes.
```

### Add a /kind label

A /kind label helps further identify what the pull request is for


## Project repositories
Onepanel consists of the following repositories. See `CONTRIBUTING.md` file in each repository for more information.

### Platform
- [Core API](https://github.com/onepanelio/core/) - Code base for backend (Go)
- [Core UI](https://github.com/onepanelio/core-ui/) - Code base for UI (Angular + TypeScript)
- [CLI](https://github.com/onepanelio/cli/) - Code base for Go CLI for installation and management (Go)
- [Manifests](https://github.com/onepanelio/core-ui/) - Kustomize manifests used by CLI for installation and management (YAML)

### SDKs
- [Python SDK](https://github.com/onepanelio/python-sdk/) - Python SDK for automation

### Documentation
- [Documentation](https://github.com/onepanelio/core-docs/) - The repository for this site
- [API Documentation](https://github.com/onepanelio/core-api-docs/) - Documentation if you choose to use the API directly
