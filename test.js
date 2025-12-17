import process from 'node:process';
import test from 'ava';
import {extractVersion} from './utilities.js';
import iterm2Version from './index.js';

test('iterm2Version', t => {
	if (process.env.CI) {
		t.pass();
		return;
	}

	const version = iterm2Version();
	t.true(version.length > 0);
	t.is(version[0], '3');
});

test('extractVersion - parses iTerm2 response', t => {
	t.is(extractVersion('iTerm2 3.5.10'), '3.5.10');
	t.is(extractVersion(' iTerm2 3.5.10 '), '3.5.10');
	t.is(extractVersion('iTerm2 3.5.0beta1'), '3.5.0');
});

test('extractVersion - returns undefined for non-iTerm2 responses', t => {
	t.is(extractVersion(), undefined);
	t.is(extractVersion(undefined), undefined);
	t.is(extractVersion(''), undefined);
	t.is(extractVersion('random data'), undefined);
	t.is(extractVersion('xterm 1.0'), undefined);
});
