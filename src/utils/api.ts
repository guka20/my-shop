export const fetchData = async (endpoint: string) => {
  const res = await fetch(`https://dummyjson.com/${endpoint}?limit=12`);
  return res.json();
};
