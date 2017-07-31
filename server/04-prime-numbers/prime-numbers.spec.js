function primeFactorsOf(number) {
  if (number === 1) return [];
  return [number];
}

describe.only('the prime numbers canary spec', () => {
  it('return none for 1', () => {
    primeFactorsOf(1).should.deepEqual([]);
  });

  it('return 2 for 2', () => {
    primeFactorsOf(2).should.deepEqual([2]);
  });

  it('return 3 for 3', () => {
    primeFactorsOf(3).should.deepEqual([3]);
  });
  it('return 2, 2 for 4');
  it('return 5 for 5');
  it('return 2, 3 for 6');
  it('return 7 for 7');
  it('return 2, 2, 2 for 8');
  it('return 3, 3 for 9');
});
