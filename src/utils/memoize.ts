import equal from "fast-deep-equal"
import memoizeOne from "memoize-one"

export const memoize = (fn: (this: any, ...newArgs: any[]) => any) => memoizeOne(fn, equal)
