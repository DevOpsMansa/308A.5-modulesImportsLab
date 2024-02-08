export const name = 'Module File Value';

export function getValue(arg) {
  console.log(arg)
}

//////////////

let findAnswer = 'The answer is cake';

function makeCake(arg) {
  console.log(arg)
}

function eatItToo() {
  console.log('Yum!')
}

export { findAnswer, makeCake, eatItToo };

//////////////

export default function iLoveCartoons() {
  console.log('I love cartoons!')
}