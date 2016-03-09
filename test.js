import test from 'ava';
import m from './';

test(async t => {
	if (process.env.CI) {
		t.pass();
		return;
	}

	const version = await m();
	t.true(version.length > 0);
	t.is(version[0], '2');
});
