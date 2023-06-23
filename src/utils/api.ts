export const fetchData = async (endpoint: string) => {
  console.log(`https://localhost:3001/${endpoint}`);
  // take=12
  const res = await fetch(`http://localhost:3001/${endpoint}`);
  return res.json();
};
