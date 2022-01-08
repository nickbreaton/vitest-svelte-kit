export function getValue<T>(value: T | (() => T)): T {
    return typeof value === "function" ? (value as any)() : value
}
