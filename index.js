
class HtmlWebpackWrapHtmlPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('HtmlWebpackWrapHtmlPlugin', compilation => {
    // compilation.options.htmlElements = compilation.options.htmlElements || {};
      compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tapAsync('HtmlWebpackWrapHtmlPlugin',
        (htmlPluginData, callback) => {
          const options = htmlPluginData.plugin.options;
          if (options.before) {
            htmlPluginData.html = options.before + "\n" + htmlPluginData.html;
          }
          if (options.after) {
            htmlPluginData.html += "\n" + options.after;
          }

          callback(null, htmlPluginData);
        }
      );
    });
  }
}

module.exports = HtmlWebpackWrapHtmlPlugin;
