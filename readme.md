# iterm2-version

> Get the [iTerm2](https://www.iterm2.com) version

Note: The `2` in iTerm2 is [part of the name](https://en.wikipedia.org/wiki/ITerm2) and does not indicate the version.

## Install

```sh
npm install iterm2-version
```

## Usage

```js
import iterm2Version from 'iterm2-version';

console.log(iterm2Version());
//=> '3.5.10'
```

If you're not running in iTerm2, it will return `undefined`.

Works over SSH by querying the terminal via escape sequences when environment variables are not available.

## API

### iterm2Version()

Returns a `string | undefined` with the iTerm2 version.
