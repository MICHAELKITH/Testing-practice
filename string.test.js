import { stringLength, checkStringLength, reverseString, capitalize } from './string';
import calculator from './calculator';

describe('test of String functions', () => {
  test('Length of String', () => {
    expect(stringLength('hello')).toBe(5);
    expect(stringLength('myself')).toBe(6);
  });

  test('if string length > 1 and < 11', () => {
    expect(checkStringLength('hello')).toBeTruthy();
    expect(checkStringLength('i was there')).toBeFalsy();
  });

  test('reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('he was there')).toBe('ereht saw eh');
  });

  test('capitalise a String first charachter', () => {
    expect(capitalize('foul-play')).toBe('Foul-play');
  });
});

describe('calculator operations', () => {
  test('addition of two elements', () => {
    expect(calculator.add(5, 3)).toBe(8);
    expect(calculator.add(20, 87)).toBe(107);
    expect(calculator.add(333, 333)).toBe(666);
    expect(calculator.add(879, 5457)).toBe(6336);
  });

  test('substract value 2 from value 1', () => {
    expect(calculator.substract(5, 3)).toBe(2);
    expect(calculator.substract(8546, 9358)).toBe(-812);
    expect(calculator.substract(37, 24)).toBe(13);
    expect(calculator.substract(564, 410)).toBe(154);
  });

  test('division', () => {
    expect(calculator.divide(1, 0)).toBeNull();
    expect(calculator.divide(874, 4)).toBe(218.5);
    expect(calculator.divide(56, 3)).toBeCloseTo(18.67);
  });

  test('multiplication of two elements', () => {
    expect(calculator.multiply(59, 74)).toBe(4366);
    expect(calculator.multiply(300, 0)).toBe(0);
    expect(calculator.multiply(0, 798)).toBe(0);
  });
});
