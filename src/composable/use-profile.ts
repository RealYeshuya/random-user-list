import { toRefs, reactive, ref } from "vue";
import IUser from "@/types/user";
import useUserList from "./use-user-list";

function useProfile() {
  const { list } = useUserList();
  const person = ref<IUser[]>([]);

  function profile(id: string) {
    person.value.unshift({
      name: {
        first: list.value[id].name.first,
        last: list.value[id].name.last,
        title: list.value[id].name.title,
      },
      gender: list.value[id].gender,
      phone: list.value[id].phone,
      email: list.value[id].email,
      picture: {
        large: list.value[id].picture.large,
      },
      location: {
        street: {
          number: list.value[id].location.street.number,
          name: list.value[id].location.street.name,
        },
        city: list.value[id].location.city,
        state: list.value[id].location.state,
        country: list.value[id].location.country,
      },
      id: {
        name: list.value[id].id.name,
        value: list.value[id].id.value,
      },
      nationality: list.value[id].nationality,
    });
  }

  return { list, person, profile };
}

export default useProfile;
