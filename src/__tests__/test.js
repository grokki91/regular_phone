import validatePhone from '../index';

describe('Check function validatePhone', () => {
  test('Check Russian number with symbols "-()"', () => {
    const expectedPhone = '+79270000000';
    expect(validatePhone('8 (927) 000-00-00')).toBe(expectedPhone);
  });
  test('Check Russian number with symbols "+7"', () => {
    const expectedPhone = '+79600000000';
    expect(validatePhone('+7 960 000 00 00')).toBe(expectedPhone);
  });
  test('Check China number', () => {
    const expectedPhone = '+860000000000';
    expect(validatePhone('+86 000 000 0000')).toBe(expectedPhone);
  });
});
