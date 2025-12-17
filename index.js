import path from 'node:path';
import fs from 'node:fs';
import process from 'node:process';
import appPath from 'app-path';
import plist from 'plist';
import {getVersionFromTerminal} from './utilities.js';

let cachedVersion;

export default function iterm2Version() {
	if (cachedVersion) {
		return cachedVersion;
	}

	// Fast path: environment variables (set by iTerm2 in local shells)
	if (process.env.TERM_PROGRAM === 'iTerm.app' && process.env.TERM_PROGRAM_VERSION) {
		cachedVersion = process.env.TERM_PROGRAM_VERSION;
		return cachedVersion;
	}

	// Query terminal via escape sequence (works over SSH)
	const terminalVersion = getVersionFromTerminal(100);
	if (terminalVersion) {
		cachedVersion = terminalVersion;
		return cachedVersion;
	}

	// Fallback: read from iTerm2 app bundle (macOS only)
	if (process.platform === 'darwin') {
		try {
			const filePath = path.join(appPath.sync('iTerm'), 'Contents/Info.plist');
			cachedVersion = plist.parse(fs.readFileSync(filePath, 'utf8')).CFBundleVersion;
			return cachedVersion;
		} catch {}
	}
}
