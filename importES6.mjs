import { name, getValue } from './exportES6.mjs';

getValue(name)

///////////////

import { makeCake as createCake, findAnswer } from './exportES6.mjs';

createCake(findAnswer)

import { makeCake as generateCake } from './makeCake2.mjs';
import { makeCake as introduceCake } from './makeCake3.mjs';

generateCake(findAnswer)
introduceCake(findAnswer)

///////////////

import * as MyModule from './exportES6.mjs';

MyModule.eatItToo();
MyModule.getValue(MyModule.name)
MyModule.makeCake(MyModule.findAnswer)

///////////////

import random from './exportES6.mjs';

random()