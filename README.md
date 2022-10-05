# Website

This is the repository for the documentation website of Modelstar. It is currently deployed at https://docs.modelstar.io.

## Quickstart

Install the dependencies using:
```
npm install 
```

Run the server locally using:

```
npm start
```

## Deployment to GitHub Pages

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

# Notes:

1. Favicon generator with links and scripts: https://favicon.io/favicon-converter/
