
const makeStack = (maxStack = 6) => {
  if (maxStack < 1) throw new Error('Not a positive stack capacity.');
  //let queue = 0;
  let stackValue = [];
  const isEmpty = () => stackValue.length === 0;
  const size = () => stackValue.length;
  const push = (input) => {
    if (stackValue.length >= maxStack) throw new Error('Stack cannot exceed a max of 6.');
    //queue++;
    stackValue.push(input);
  };
  const pop = () => {
    if (stackValue.length === 0) throw new Error('Stack cannot be less than 0.');
    //queue--;
    return stackValue.pop();
  };
  return {
    isEmpty,
    size,
    push,
    pop
  };
};

let stack;

describe('the stack', () => {
  beforeEach(() => {
    stack = makeStack();
  });
  it('starts empty', () => {
    stack.isEmpty().should.be.true();
  });

  it('starts with stack size 0', () => {
    stack.size().should.equal(0);
  });

  it('is not be empty when pushed', () => {
    stack.push();
    stack.isEmpty().should.be.false();
  });

  it('leaves stack size 1 when pushed', () => {
    stack.push();
    stack.size().should.equal(1);
  });

  it('leaves stack empty when pushed and popped', () => {
    stack.push();
    stack.pop();
    stack.isEmpty().should.be.true();
  });

  it('leaves stack size 0 when pushed and popped', () => {
    stack.push();
    stack.pop();
    stack.size().should.equal(0);
  });

  it('overflows', () => {
    stack = makeStack(6);
    stack.push();
    stack.push();
    stack.push();
    stack.push();
    stack.push();
    stack.push();
    const overflowFunction = () => stack.push();
   overflowFunction.should.throw('Stack cannot exceed a max of 6.');
  });

  it('under-flows', () => {
    const underflowFunction = () => stack.pop();
    underflowFunction.should.throw('Stack cannot be less than 0.');
  });

  it('pops the same one pushed', () => {
    stack.push('A');
    stack.pop().should.equal('A');
  });

  it('pops the same two pushed', () => {
    stack.push('A');
    stack.push('B');
    stack.pop().should.equal('B');
    stack.pop().should.equal('A');
  });

  it('accepts only positive capacity', () => {
    (() => {stack = makeStack(-10);}).should.throw('Not a positive stack capacity.');
    (() => {stack = makeStack(0);}).should.throw('Not a positive stack capacity.');
  });
});
