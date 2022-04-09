<template>
  <div>
    <p>Paragraf 1</p>
    <p>Paragraf 2</p>
    <div v-if="ok">
      <label for="Username">Username</label>
      <input placeholder="Enter your Username" key="username-input" />
    </div>
    <div v-else>
      <label>Email </label>
      <input type="text" placeholder="Enter your Username" />
    </div>
    <button @click="ok = !ok">Toggle Ok</button>
    <h1 v-show="ok">Ini pake v-show</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: "-4 aa",
      ok: false,
    };
  },
};
</script>
