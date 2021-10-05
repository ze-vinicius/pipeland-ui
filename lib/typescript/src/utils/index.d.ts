declare const merge: <T extends Partial<Record<keyof T, unknown>>>(a: T, b: T) => T;
export { merge };
