import {
  isObject,
  isNumber,
  isString,
  isBoolean,
  isDateString,
  isArray,
} from './typeUtils';

describe('typeUtils', () => {
  describe('isObject', () => {
    it('オブジェクトである場合', () => {
      expect(isObject({})).toBe(true);
    });
    it('null の場合', () => {
      expect(isObject(null)).toBe(false);
    });
    it('undefined の場合', () => {
      expect(isObject(undefined)).toBe(false);
    });
  });

  describe('isNumber', () => {
    it('数値の場合', () => {
      expect(isNumber(0)).toBe(true);
    });
    it('数値でない場合', () => {
      expect(isNumber('0')).toBe(false);
    });
  });

  describe('isString', () => {
    it('文字列の場合', () => {
      expect(isString('string')).toBe(true);
    });
    it('文字列でない場合', () => {
      expect(isString(0)).toBe(false);
    });
  });

  describe('isBoolean', () => {
    it('ブール値の場合', () => {
      expect(isBoolean(true)).toBe(true);
    });
    it('ブール値でない場合', () => {
      expect(isBoolean('string')).toBe(false);
    });
  });

  describe('isDateString', () => {
    it('日付文字列の場合', () => {
      expect(isDateString('2022-01-24T00:00:00Z')).toBe(true);
    });
    it('日付文字列ではない場合', () => {
      expect(isDateString('string')).toBe(false);
    });
  });

  describe('isArray', () => {
    it('配列で要素の型が数値型）', () => {
      const array = [1, 2, 3];
      expect(isArray(array, isNumber)).toBe(true);
    });
    it('配列だが要素の型が数値型でない', () => {
      const array = ['1', '2', '3'];
      expect(isArray(array, isNumber)).toBe(false);
    });
    it('配列でない場合', () => {
      expect(isArray('string', isNumber)).toBe(false);
    });
  });
});
