import { add } from '../src/hello';

describe('hello world', () => {
  it('hello', () => {
    expect(true).toBe(true);
  });

  it('add', () => {
    expect(add(1, 2)).toBe(3);
  });
});
