import {expectType} from 'tsd';
import iterm2Version from './index.js';

expectType<string | undefined>(iterm2Version());
