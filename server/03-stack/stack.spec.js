
// Initialize MaxStackSize as part of constructor
const makeStack = () => {
  let MaxStackSize = 5;
  let queue = 0;
  let stackValues = [];
  const isEmpty = () => queue === 0;
  const push = (input) => {
  if (queue === MaxStackSize) throw new Error('Stack should not exceed ' + MaxStackSize);
  queue++;
  stackValues.push(input);
  };
  const pop = () => {
    if (queue === 0) throw new Error('Stack cannot be less than 0.');
    queue--;
    return stackValues.pop();
  };
  const size = () => queue;
  const setCapacity = (capacity) => {
    if (capacity <= 0) return false;
    MaxStackSize = capacity;
    return true;
  };
  return {
    isEmpty,
    push,
    pop,
    size,
    setCapacity
  };
};

let stack;

beforeEach(() => {
  stack = makeStack();
});
describe.only('the stack spec', () => {
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
    for (let i = 0; i < 5; i++) {
      stack.push();
    }

    const overflowFunction = () => {
      stack.push();
    };
    overflowFunction.should.throw('Stack should not exceed ' + 5);
  });

  it('under-flows', () => {

    const underflowFunction = () => {
      stack.pop();
    };
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
    stack.setCapacity(10).should.be.true();
    stack.setCapacity(0).should.be.false();
    stack.setCapacity(-10).should.be.false();
  });

  it('test overflow with a new stack capacity', () => {
    stack.setCapacity(10);
    for (let i = 0; i < 10; i++) {
        stack.push();
      }

      const overflowFunction = () => {
        stack.push();
      };
      overflowFunction.should.throw('Stack should not exceed ' + 10);
    });
});
