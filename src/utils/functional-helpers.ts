export const pipe = (...funcs) => funcs.reduce((fn1, fn2) => (arg) => fn2(fn1(arg)));

export const typedPipe = <A, B, C>(ab: (a: A) => B, bc: (b: B) => C): ((a: A) => C) => {
    return pipe(ab, bc);
}