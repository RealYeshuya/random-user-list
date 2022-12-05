import IUser from "@/types/user";
import { reactive, ref } from "vue";

let person = reactive<IUser[]>([]);

async function useFetch(num: number, gender: string) {
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://randomuser.me/api/?results=${num}&gender=${gender}`
      );
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
