<template>
  <td
    :tabindex="props.tabIndex"
    @keypress.enter="props.toggle"
    @click="props.toggle"
  >
    <span
      v-if="props.toggleable"
      :class="`VueTables__child-row-toggler ${props.class()}`"
    ></span>
  </td>
</template>

<script>
export default {
  name: "IochordRowToggler",
  props: ["props"],
};
</script>

<style scoped>
.VueTables__child-row-toggler {
  display: block;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 20px solid #adadad;
}
</style>