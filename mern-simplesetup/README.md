"# Simple Setup" 
## Set Up Environment For MERN Stack
### Key Modules
* React: `react`, `react-dom`
* Express: `express`
* MongoDB: `mongodb` driver, and MongoDB installation on the cloud or on the local machine
### devDependency Modules
* Babel: `@babel/core`, `babel-loader`, `@babel/preset-env`, `@babel/preset-react`
* Webpack: `webpack`, `webpack-cli`, `webpack-node-externals`, `webpack-dev-middleware`, `webpack-hot-middleware`
* React: `react-hot-loader`, `@hot-loader/react-dom`
### Configuration Files
* `.babelrc`: To specify presets and plugins needed for transpilling the lastest JS and JSX
* `webpack.config.client.js`: To config Webpack to bundle and hot-load React code during development
* `webpack.config.server.js`: To config Webpack to bundle server-side code
* `webpack.config.client.production.js`: Similar to client-side config for development, but without the hot-reloading plugin and debug configuration
* `nodemon.json`: To watch for changes in server files during development, and then execute compile and build commands as necessary
* `server/devBundle.js`: To initialize Webpack to complie the client-side code when the server is run. The `compile` method will then be exported to `server.js` to be used as middleware


