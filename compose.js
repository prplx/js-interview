export function compose(...fns) {
  return function (value) {
    return fns.reduceRight((acc, curr) => curr(acc), value);
  };
}
