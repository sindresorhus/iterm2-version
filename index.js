'use strict';
const path = require('path');
const fs = require('fs');
const appPath = require('app-path');
const plist = require('plist');

let version;

module.exports = () => {
	if (!version) {
		const fp = path.join(appPath.sync('iTerm'), 'Contents/Info.plist');
		version = plist.parse(fs.readFileSync(fp, 'utf8')).CFBundleVersion;
	}

	return version;
};
