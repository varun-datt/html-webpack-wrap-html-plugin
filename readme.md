# HtmlWebpackWrapHtmlPlugin
This is a webpack plugin that simplifies wrap HTML files to serve your webpack bundles. 
Enhances html-webpack-plugin functionality by add `{before:"<!--before-->",after:"<!--after-->"}` option to allow you to wrap html content.
## install by npm
```npm
npm i --save-dev HtmlWebpackPlugin HtmlWebpackWrapHtmlPlugin
```

## Basic usage
Require the plugin in you webpack config:
```js
var HtmlWebpackPlugin = require('HtmlWebpackPlugin');
var HtmlWebpackWrapHtmlPlugin = require('HtmlWebpackWrapHtmlPlugin');
```
Add the plugin in you webpack config as fllow:
```js
plugins:[
	new HtmlWebpackPlugin({
		filename:"index.html",
		template:"src/index.html",
		before:"<!--you html before  text-->",
		after:"<!--you html after  text-->"
	}),
	new HtmlWebpackWrapHtmlPlugin()
]

```
## License
[MIT](http://couto.mit-license.org/)

