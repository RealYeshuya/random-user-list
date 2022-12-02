<template>
  <div
    v-for="(profile, index) in person"
    :key="index"
    class="container mx-auto my-40"
  >
    <div>
      <div
        class="bg-white relative shadow rounded-lg w-4/6 md:w-4/6 lg:w-3/6 xl:w-3/6 mx-auto"
      >
        <div class="flex justify-center">
          <img
            :src="picture[index]"
            alt=""
            class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
          />
        </div>

        <div class="mt-16">
          <h1 class="font-bold text-center text-3xl text-gray-900">
            {{ fullName[index] }}
          </h1>
          <p class="text-center text-sm text-gray-400 font-medium">
            {{ profileId[index] }}
          </p>
          <p>
            <span> </span>
          </p>
          <div class="my-5 px-6">
            <a
              href="#"
              class="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
              >Connect with
              <span class="font-bold">@{{ firstName[index] }}</span></a
            >
          </div>
          <div class="flex justify-between items-center my-5 px-6">
            <a
              href=""
              class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
              >Facebook</a
            >
            <a
              href=""
              class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
              >Twitter</a
            >
            <a
              href=""
              class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
              >Instagram</a
            >
            <a
              href=""
              class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
              >Email</a
            >
          </div>

          <div class="w-full">
            <h3 class="font-medium text-gray-900 text-left px-6">
              Information
            </h3>
            <div
              class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm"
            >
              <a
                href="#"
                class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
              >
                <img
                  src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                  class="rounded-full h-6 shadow-md inline-block mr-2"
                />
                ADDRESS:
                <span class="text-gray-500 text-xs">
                  {{ location[index] }}
                </span>
              </a>

              <a
                href="#"
                class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
              >
                <img
                  src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                  class="rounded-full h-6 shadow-md inline-block mr-2"
                />
                EMAIL:
                <span class="text-gray-500 text-xs">{{ profile.email }}</span>
              </a>

              <a
                href="#"
                class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
              >
                <img
                  src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                  class="rounded-full h-6 shadow-md inline-block mr-2"
                />
                PHONE NO.:
                <span class="text-gray-500 text-xs">{{ profile.phone }}</span>
              </a>

              <a
                href="#"
                class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
              >
                <img
                  src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                  class="rounded-full h-6 shadow-md inline-block mr-2"
                />
                GENDER:
                <span
                  v-if="gender[index] === 'male'"
                  class="text-gray-500 text-xs"
                  >He/Him
                </span>
                <span v-else class="text-gray-500 text-xs">She/Her </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import useProfile from "@/composable/use-profile";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const id = ref();
    const { person, profile } = useProfile();

    return { id, profile, person };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.profile(this.id);
  },
  computed: {
    picture: function (): string[] {
      return this.person.map(function (person) {
        return person.picture.large;
      });
    },
    fullName: function (): string[] {
      return this.person.map(function (person) {
        return person.name.first + " " + person.name.last;
      });
    },
    profileId: function (): string[] {
      return this.person.map(function (person) {
        return person.id.name + person.id.value;
      });
    },
    firstName: function (): string[] {
      return this.person.map(function (person) {
        return person.name.first;
      });
    },
    location: function (): string[] {
      return this.person.map(function (person) {
        return (
          person.location.street.name +
          " " +
          person.location.street.number +
          ", " +
          person.location.city +
          ", " +
          person.location.state +
          ", " +
          person.location.country
        );
      });
    },
    email: function (): string[] {
      return this.person.map(function (person) {
        return person.email;
      });
    },
    phoneNumber: function (): string[] {
      return this.person.map(function (person) {
        return person.phone;
      });
    },
    gender: function (): string[] {
      return this.person.map(function (person) {
        return person.gender;
      });
    },
  },
});
</script>
