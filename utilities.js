import process from 'node:process';
import {queryXTVERSIONSync} from 'terminal-query';

export const extractVersion = string => {
	if (typeof string !== 'string' || !string) {
		return;
	}

	return string.trim().match(/iTerm2 ([\d.]+)/)?.[1];
};

const getWriteStream = () => {
	if (process.stdout.isTTY) {
		return process.stdout;
	}

	if (process.stderr.isTTY) {
		return process.stderr;
	}
};

export const getVersionFromTerminal = timeoutMilliseconds => {
	const stdout = getWriteStream();
	if (!stdout) {
		return;
	}

	return extractVersion(queryXTVERSIONSync({timeoutMilliseconds, stdout}));
};
