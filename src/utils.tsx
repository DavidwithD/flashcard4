export const saveJson = (key: string, data: any) =>
  data ? (localStorage[key] = JSON.stringify(data)) : null;
export const loadJson = (key: string) => {
  const val = localStorage[key];
  return val ? JSON.parse(val) : undefined;
};

const combine = (f1: (arg: any) => any, f2: (arg: any) => any) => (arg: any) =>
  f2(f1(arg));
export const combineAll = (...fs: ((arg: any) => any)[]) =>
  fs.reduce((f1, f2) => combine(f1, f2));
