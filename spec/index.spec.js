/* eslint-env jasmine */
var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var rm_rf = require('rimraf');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackWrapHtmlPlugin = require('../');
var OUTPUT_DIR = path.join(__dirname, '../dist');
describe('HtmlWebpackWrapHtmlPlugin', function() {
	beforeEach(function(done) {
		rm_rf(OUTPUT_DIR, done);
	});
	var before = fs.readFileSync(path.join(__dirname, 'fixtures/before.txt')),
		after = fs.readFileSync(path.join(__dirname, 'fixtures/after.txt'));
	it('should insert before.txt before html and after.txt after html', function(done) {
		webpack({
			entry: {
				app: path.join(__dirname, 'fixtures', 'entry.js'),
			},
			output: {
				path: OUTPUT_DIR,
				filename: '[name].js'
			},
			module: {

			},
			plugins: [
				new HtmlWebpackPlugin({
					before: before,
					after: after
				}),
				new HtmlWebpackWrapHtmlPlugin()
			]
		}, function(err) {
			expect(err).toBeFalsy();
			var htmlFile = path.resolve(__dirname, '../dist/index.html');
			fs.readFile(htmlFile, 'utf8', function(er, data) {
				expect(er).toBeFalsy();
				var html = data.toString();
				var beforeReg = new RegExp('^' + before),
					afterReg = new RegExp(after + '$');
				expect(beforeReg.exec(html).length).toBe(1);
				expect(afterReg.exec(html).length).toBe(1);
				done();
			});
			done();
		});
	});
});