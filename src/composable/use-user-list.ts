import { ref } from "vue";
import { IUser } from "@/types/user";
import useFetch from "./use-fetch";
import apiNames from "@/constants/api-name";

const list = ref<IUser[]>([]);

function useUserList() {
  const submitted = async (numUser: number, gender: string) => {
    const params = new URLSearchParams({
      results: numUser.toString(),
      gender: gender,
    });

    const url = `${apiNames.URL}${params.toString()}`;

    const output = await useFetch<IUser[]>(url);
    list.value = output;
  };
  return {
    list,
    submitted,
  };
}

export default useUserList;
