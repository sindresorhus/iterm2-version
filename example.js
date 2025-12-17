import iterm2Version from './index.js';

const version = iterm2Version();

if (version) {
	console.log(`iTerm2 version: ${version}`);
} else {
	console.log('No iTerm2 version detected.');
}
