async function useFetch<Type>(obj: string): Promise<Type> {
  let person: Type = [] as unknown as Type;
  const fetchData = async () => {
    try {
      const response = await fetch(obj);
      const json = await response.json();
      person = json.results;
    } catch (errors) {
      console.log(errors);
    }
  };
  await fetchData();
  return person;
}

export default useFetch;
