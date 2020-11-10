/**
 * unpack the returned type of the function
 * see https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#type-inference-in-conditional-types
 * ```typescript
 * type A = TsrUnpackMethod<string>;  // result: string
 * type B = TsrUnpackMethod<string[]>;  // result: string[]
 * type C = TsrUnpackMethod<() => string>;  // result: string
 * ```
 */
export type TsrUnpackMethod<T> =
    T extends (...args: any[]) => infer R ? R :
      T;
