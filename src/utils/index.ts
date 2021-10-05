const merge = <T extends Partial<Record<keyof T, unknown>>>(a: T, b: T): T => {
  const result = { ...a, ...b };
  Object.keys(a).forEach((key) => {
    if (!a[key] || typeof b[key] !== 'object') return;

    Object.assign(result, {
      [key]: Object.assign(a[key], b[key]),
    });
  });
  return result;
};

export { merge };
