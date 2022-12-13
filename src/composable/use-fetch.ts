import { IUser } from "@/types/user";
import { reactive } from "vue";

let person = reactive<IUser[]>([]);

async function useFetch(url: string) {
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      person = json.results;
    } catch (errors) {
      console.log(errors);
    }
  };
  await fetchData();
  return { person };
}

export default useFetch;
