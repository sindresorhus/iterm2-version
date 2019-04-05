import {expectType} from 'tsd';
import iterm2Version = require('.');

expectType<string | undefined>(iterm2Version());
