import { ref, toRefs, reactive } from "vue";
import IUser from "@/types/user";
import useFetch from "./use-fetch";

const users = reactive({
  list: ref<IUser[]>([]),
});

function useUserList() {
  const submitted = async (numUser: number, gender: string) => {
    const { person } = await useFetch(numUser, gender);
    users.list = person;
  };
  return {
    ...toRefs(users),
    submitted,
  };
}

export default useUserList;
