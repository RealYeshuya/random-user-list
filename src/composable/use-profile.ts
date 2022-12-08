import { ref } from "vue";
import IUser from "@/types/user";
import useUserList from "./use-user-list";

function useProfile() {
  const { list } = useUserList();
  const person = ref<IUser[]>([]);

  function profile(id: string) {
    const data = list.value[id];

    person.value.unshift({
      name: {
        first: data.name.first,
        last: data.name.last,
        title: data.name.title,
      },
      gender: data.gender,
      phone: data.phone,
      email: data.email,
      picture: {
        large: data.picture.large,
      },
      location: {
        street: {
          number: data.location.street.number,
          name: data.location.street.name,
        },
        city: data.location.city,
        state: data.location.state,
        country: data.location.country,
      },
      id: {
        name: data.id.name,
        value: data.id.value,
      },
      nationality: data.nationality,
    });
  }

  return { list, person, profile };
}

export default useProfile;
