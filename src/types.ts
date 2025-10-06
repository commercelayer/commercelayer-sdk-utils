
export type NonEmptyString<T extends string> = T extends '' ? never: T

export type NonEmptyArray<T> = [T, ...T[]]
