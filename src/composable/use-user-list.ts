import { ref, toRefs, reactive } from "vue";
import { IUser } from "@/types/user";
import useFetch from "./use-fetch";

const users = reactive({
  list: ref<IUser[]>([]),
});

function useUserList() {
  const submitted = async (numUser: number, gender: string) => {
    const params = new URLSearchParams({
      results: numUser.toString(),
      gender: gender,
    });

    const url = `https://randomuser.me/api/?${params.toString()}`;

    const { person } = await useFetch(url);
    users.list = person;
  };
  return {
    ...toRefs(users),
    submitted,
  };
}

export default useUserList;
