import test from 'ava';
import iTerm2Version from './index.js';

test('main', t => {
	if (process.env.CI) {
		t.pass();
		return;
	}

	const version = iTerm2Version();
	t.true(version.length > 0);
	t.is(version[0], '3');
	t.true(iTerm2Version().length > 0);
});
