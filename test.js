import test from 'ava';
import m from './';

test(t => {
	if (process.env.CI) {
		t.pass();
		return;
	}

	const version = m();
	t.true(version.length > 0);
	t.is(version[0], '2');
	t.true(m().length > 0);
});
