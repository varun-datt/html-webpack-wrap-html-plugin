'use strict';
var assert = require('assert');

function HtmlWebpackWrapHtmlPlugin(options) {
	assert.equal(options, undefined, "HtmlWebpackWrapHtmlPlugin not need options");
}
HtmlWebpackWrapHtmlPlugin.prototype.apply = function(compiler) {
	var self = this;
	compiler.plugin('compilation', function(compilation) {
		compilation.plugin('html-webpack-plugin-after-html-processing', function(htmlPluginData, callback) {
			var options = htmlPluginData.plugin.options;
			if (options.before) {
				htmlPluginData.html = options.before + "\n" + htmlPluginData.html;
			}
			if (options.after) {
				htmlPluginData.html += "\n" + options.after;
			}

			callback();
		});
	});
};
module.exports = HtmlWebpackWrapHtmlPlugin;