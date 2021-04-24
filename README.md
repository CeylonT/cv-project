<p align="center">
  <a href="https://nextjs.org/" target="blank"><img src="https://memo8.com/wp-content/uploads/2020/04/nextjs-dark.png" width="400" alt="NextJS Logo" /></a>
</p>

## NextJS Skeleton

[NextJS](https://github.com/vercel/next.js) framework TypeScript starter
repository.

## Installation

```bash
yarn
```

## Configurations

NextJS reads configurations from `env` files.

The configuration files are located within `/envs` directory, which each
configuration are separated by environment names. For example,

```bash
├── .env.local
├── .env.production
└── .env.staging
```

The contents in `env` files will be injected to `process.env`. Please refer to
[Deployment](#Deployment) section to learn more on how to choose `env` file on
the build steps.

You must create your own `.env` file (which will be ignored from Git). Running
`yarn dev` will also copy `.env.local` to `.env` if `.env` does not exist.

You **MUST NOT** put sensitive credentials or secret tokens inside this `env`
files, as `env` file will be compiled and injected into the web bundle.

## Running the app

```bash
yarn dev
```

## Deployment

This repository also provides a CI/CD configuration via `Dockerfile` and
`cloudbuild.yaml`. You can setup a
[Cloud Build Trigger](https://console.cloud.google.com/cloud-build/triggers)
which points to `cloudbuild.yml` file to start building and deploying to
[Cloud Run](https://console.cloud.google.com/run).

Note that you will need to provide a
[Substitution Variable](https://cloud.google.com/cloud-build/docs/configuring-builds/substitute-variable-values)
called `_ENV_NAME` for the trigger, in order to choose which `.env` file to be
used (default to `staging`).

![](./public/static/images/cloudbuild.png)

In this example, setting `_ENV_NAME` to `staging` will result in using
`.env.staging` in build steps.
