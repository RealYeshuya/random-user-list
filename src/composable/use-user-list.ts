import { ref, toRefs, reactive } from "vue";
import IUser from "@/types/user";

const users = reactive({
  list: ref<IUser[]>([]),
});

function useUserList() {
  const submitted = async (numUser: number, gender: string) => {
    const response = await fetch(
      `https://randomuser.me/api/?results=${numUser}&gender=${gender}`
    );
    const json = await response.json();
    const person = json.results;
    console.log(person);
    users.list = person;
    // const person = json.results;
    // users.list = ref(person);
  };
  return {
    submitted,
    ...toRefs(users),
  };
}

export default useUserList;
