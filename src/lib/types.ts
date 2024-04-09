export const isString = (value: unknown): value is string => typeof value === 'string'
export const isNumber = (value: unknown): value is number => typeof value === 'number'
export const isBigInt = (value: unknown): value is BigInt => typeof value === 'bigint'
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean'
export const isSymbol = (value: unknown): value is symbol => typeof value === 'symbol'
export const isUndefined = (value: unknown): value is undefined => typeof value === 'undefined'
export const isObject = (value: unknown): value is object => typeof value === 'object'
export const isNull = (value: unknown): value is null => value === null

export const getPrototype = (value: any): string => Object.prototype.toString.apply(value).replace(/\[object (.*)\]/, '$1')

export const isFunction = (value: unknown): value is Function => typeof value === 'function'
export const isMap = (value: unknown): value is Map<any, any> => getPrototype(value) === 'Map'
export const isSet = (value: unknown): value is Set<any> => getPrototype(value) === 'Set'
export const isArray = (value: unknown): value is Array<any> => Array.isArray(value)
export const isWeakMap = (value: unknown): value is WeakMap<any, any> => getPrototype(value) === 'WeakMap'
export const isWeakRef = (value: unknown): value is WeakRef<any> => getPrototype(value) === 'WeakRef'
export const isWeakSet = (value: unknown): value is WeakSet<any> => getPrototype(value) === 'WeakSet'

export const toString = (value: any): string => (value)
export const toNumber = (value: any): number => Number(value)
export const toBoolean = (value: any): boolean => !!value
export const toSymbol = (value: any) => Symbol(toString(value))
export const toUndefined = () => undefined
export const toNull = () => null