# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[Build a Portfolio Website with React.js | LinkTree Clone](https://youtu.be/opfMRWpZRYk)


$ node -v
v15.14.0
$ npm -v
7.7.6
$ npm install -g create-react-app
$ npm install -g npm@7.14.0
create-react-app portfolio-plataformas
cd portfolio-plataformas
npm start # http://localhost:3000/

### Reactjs code snippets

In VSC: `ext install xabikos.ReactSnippets`


I am usin github integration with VSC, so I just pushed this folder / project with 2 clicks (push and select public repository)


installing some libraries
npm install @iconify/icons-simple-icons @iconify/react bootstrap node-sass react-router-dom

create index.scss in /src

https://react-bootstrap.github.io/getting-started/introduction#sass
npm install react-bootstrap
/* The following line can be included in a src/index.scss */

@import "~bootstrap/scss/bootstrap";


## Estilos

index.scss

en los commits 4 / 5 npm start tira por ejemplo:
Error from chokidar (/home/diego/_desarrollo/portfolio-plataformas/node_modules/hoist-non-react-statics/node_modules/react-is/cjs): Error: ENOSPC: System limit for number of file watchers reached, watch '/home/diego/_desarrollo/portfolio-plataformas/node_modules/hoist-non-react-statics/node_modules/react-is/cjs'

Eliminar node_modules carpeta.
correr npm install.
- *lo resolví temporalmente reiniciando*

### VSC shows how to solve this:

https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc


cat /proc/sys/fs/inotify/max_user_watches
8192
nano /etc/sysctl.conf
    fs.inotify.max_user_watches=524288
sudo sysctl -p
fs.inotify.max_user_watches = 524288


## Iconos
https://iconify.design/icon-sets/
https://simpleicons.org/
