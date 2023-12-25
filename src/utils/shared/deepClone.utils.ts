export const deepClone = <T>(initial: T): T => {
  return JSON.parse(JSON.stringify(initial));
};
