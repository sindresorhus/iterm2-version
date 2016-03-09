'use strict';
const path = require('path');
const fs = require('fs');
const appPath = require('app-path');
const pify = require('pify');
const plist = require('plist');

module.exports = () => appPath('iTerm')
	.then(fp => pify(fs.readFile)(path.join(fp, 'Contents/Info.plist'), 'utf8'))
	.then(data => plist.parse(data).CFBundleVersion);
