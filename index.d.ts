/**
Get the [iTerm2](https://www.iterm2.com) version.

@returns The iTerm2 version. If you're not running in iTerm2, it will return `undefined`.

@example
```
import iterm2Version from 'iterm2-version';

console.log(iterm2Version());
//=> '3.5.10'
```
*/
export default function iterm2Version(): string | undefined;
