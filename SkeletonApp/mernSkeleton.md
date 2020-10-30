### Differences among webpack modules
* **Source: https://stackoverflow.com/questions/42294827/webpack-vs-webpack-dev-server-vs-webpack-dev-middleware-vs-webpack-hot-middlewar**

1. webpack
As you've described, Webpack is a module bundler, it bundles various module formats primarily so they can be run in a browser. It offers both a CLI and Node API.

``
webpack(webpackConfigFile)
``
2. webpack-dev-middleware
Webpack Dev Middleware is middleware which can be mounted in an express server to serve the latest compilation of your bundle during development. This uses webpack's Node API in watch mode and instead of outputting to the file system it outputs to memory.

``
webpackDevMiddleware(webpack(webpackConfigFile), {
    publicPath:webpackConfigFile.output.publicPath 
}
`` 

For comparison, you might use something like express.static instead of this middleware in production.

3. webpack-dev-server
Webpack Dev Server is itself an express server which uses webpack-dev-middleware to serve the latest bundle and additionally handles hot module replacement (HMR) requests for live module updates in the client.

4. webpack-hot-middleware
Webpack Hot Middleware is an alternative to webpack-dev-server but instead of starting a server itself it allows you to mount it in an existing / custom express server alongside webpack-dev-middleware.

``
webpackDevMiddleware(webpack(webpackConfigFile)
``
5. webpack-hot-server-middleware
Just to confuse things even more, there's also Webpack Hot Server Middleware which is designed to be used alongside webpack-dev-middleware and webpack-hot-middleware to handle hot module replacement of server rendered apps.

### Pitfalls
1. devtool="eval-source-map" => devtool: 'cheap-module-source-map'
* Reason: The Chrome policy against eval() and its relatives like setTimeout(String), setInterval(String), and new Function(String). Source: https://developer.chrome.com/extensions/contentSecurityPolicy
2. `Accept` vs `Content-Type`
* Accept and Content-type are both headers sent from a client(browser say) to a service.
* Accept header is a way for a client to specify the media type of the response content it is expecting and Content-type is a way to specify the media type of request being sent from the client to the server.
* Source: http://www.java-allandsundry.com/2012/08/accept-header-vs-content-type-header.html
3. `sessionStorage` vs `localStorage`
* `sessionStorage`: auth state is remembered only in the current window tab.
* `localStorage`: auth state is remembered only across window tabs.

### Built-in React Hooks
**Usage** React Hooks helps functional components use state and lifecycle methods like class component in vannila React
1. `useState()`
* Initialize useState() equals to this.state
* Invoke useState() equal to this.setState()
2. 