import sign from '../src/sign';

describe('sign', () => {
  test('sign of 3 is 1', () => {
    expect(sign(3)).toBe(1);
  });

  test('sign of "4" is 1', () => {
    expect(sign("4")).toBe(1);
  });

  test('sign of -5 is -1', () => {
    expect(sign(-5)).toBe(-1);
  });

  test('sign of 0 is 0', () => {
    expect(sign(0)).toBe(0);
  });

  test('sign of NaN is NaN', () => {
    expect(isNaN(sign(NaN))).toBe(true);
  });

  test('sign of "foo" is NaN', () => {
    expect(isNaN(sign("foo"))).toBe(true);
  });

  test('sign of nothing is NaN', () => {
    expect(isNaN(sign())).toBe(true);
  });
});
