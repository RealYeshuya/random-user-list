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

    const url = `${apiNames.URL}/api/?${params.toString()}`;

    list.value = await useFetch<IUser[]>(url);
  };
  return {
    list,
    submitted,
  };
}

export default useUserList;
