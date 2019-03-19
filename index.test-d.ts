import {expectType} from 'tsd-check';
import iterm2Version from '.';

expectType<string | undefined>(iterm2Version());
