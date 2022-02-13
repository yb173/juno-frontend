export const isObject = (arg: unknown): arg is object =>
  typeof arg === 'object' && arg !== null;

export const isNumber = (arg: unknown): arg is number =>
  typeof arg === 'number';

export const isBoolean = (arg: unknown): arg is boolean =>
  typeof arg === 'boolean';

export const isString = (arg: unknown): arg is string =>
  typeof arg === 'string';

export const isDateString = (arg: unknown): arg is string => {
  if (typeof arg !== 'string') {
    return false;
  }
  const date = new Date(arg);
  if (date.toString() === 'Invalid Date') {
    return false;
  }

  return true;
};

export const isArray = <T>(
  arg: unknown,
  typeGuardFn: (v: unknown) => v is T,
): arg is T[] => Array.isArray(arg) && arg.every((v) => typeGuardFn(v));
