# Personal Portfolio with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and was made following this video / tutorial: [Build a Portfolio Website with React.js | LinkTree Clone](https://youtu.be/opfMRWpZRYk).  

It's the evolution of this [project](https://github.com/diegobollini/links-like-a-tree) I have also forked (using HTML5 and SCSS).

## node, dependencies & create app

```bash
$ node -v
v15.14.0
$ npm -v
7.7.6
$ npm install -g create-react-app
$ npm install -g npm@7.14.0
$ npm -v
7.14.0
$ create-react-app personal-portfolio
$ cd personal-portfolio
$ npm install
$ npm start # http://localhost:3000/
```

### (Useful) reactjs code snippets for visual studio

Install extension: `xabikos.ReactSnippets`

### github

I am using github integration with vsc, so I just pushed this folder / project with just 2 clicks (first push and then select public repository)... Done!

## node libraries

```bash
# install libraries
$ npm install @iconify/icons-simple-icons @iconify/react bootstrap node-sass react-router-dom react-bootstrap
```

## issues: chokidar

```bash
Error from chokidar (/home/diego/_desarrollo/portfolio-plataformas/node_modules/hoist-non-react-statics/node_modules/react-is/cjs): Error: ENOSPC: System limit for number of file watchers reached, watch '/home/diego/_desarrollo/portfolio-plataformas/node_modules/hoist-non-react-statics/node_modules/react-is/cjs'
```

What I did: [link](https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc)

```bash
$ cat /proc/sys/fs/inotify/max_user_watches
8192
$ nano /etc/sysctl.conf
    fs.inotify.max_user_watches=524288
$ sudo sysctl -p
fs.inotify.max_user_watches = 524288
```

## deployment with github pages

npm install gh-pages --save-dev
package.json

"homepage": "http://diegobollini.github.io/personal-portfolio",

  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",

npm run deploy

