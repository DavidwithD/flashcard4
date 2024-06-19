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

/*
 "[{\"id\":\"b1fda2ca-d92b-4b07-9fee-984d7b8f3622\",\"name\":\"日本語\",\"description\":\"\",\"cards\":[{\"id\":\"3b12db42-8ffa-40c3-96ae-b2485f8b64bb\",\"quiz\":\"彼女はピザが好きです。\",\"hint\":\"pizza\",\"answer\":\"She loves pizza\",\"note\":\"三人称単数\",\"correct\":0,\"uncorrect\":0,\"rating\":0},{\"id\":\"13cff2a5-20fa-4620-83c8-7d0f630a7eff\",\"quiz\":\"\",\"hint\":\"\",\"answer\":\"\",\"note\":\"\",\"correct\":0,\"uncorrect\":0,\"rating\":0}]}]" 
*/