<template>
  <div id="app">
    <IochordGrid msg="Hello Vue in CodeSandbox!" />
  </div>
</template>

<script>
import IochordGrid from "./components/IochordGrid";

export default {
  name: "App",
  components: {
    IochordGrid,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 20px auto 0;
  width: 800px;
}
</style>
