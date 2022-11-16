<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div class="form">
    <form>
      <input type="text" id="fname" name="fname" />
      <select id="gender" name="gender">
        <option value="">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input type="submit" value="Generate" />
    </form>
  </div>
  <div class="background">What</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    msg: String,
  },
});
</script>
