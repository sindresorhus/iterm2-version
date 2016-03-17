'use strict';
const path = require('path');
const fs = require('fs');
const appPath = require('app-path');
const plist = require('plist');

module.exports = () => {
	const fp = path.join(appPath.sync('iTerm'), 'Contents/Info.plist');
	return plist.parse(fs.readFileSync(fp, 'utf8')).CFBundleVersion;
};
