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
Copyright © 2016 zman <hxfdarling@hotmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

