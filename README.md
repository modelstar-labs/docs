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
$ GIT_USER=$GITHUB_USERNAME GIT_PASS=$GITHUB_KEY npm run deploy
```

# Notes:

1. Favicon generator with links and scripts: https://favicon.io/favicon-converter/
