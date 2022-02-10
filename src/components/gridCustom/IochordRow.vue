<template>
  <tr
    :class="{ active: row.index == table.selectedRow, VueTables__row: true }"
    v-bind="props.rowAttrs.attrs"
    @click="props.rowEvents.click"
  >
    <vt-child-row-toggler
      :row-id="props.rowId"
      v-if="props.childRowTogglerFirst"
    />
    <vt-table-cell
      v-for="(column, i) in props.columns"
      :key="i"
      :column="column"
    />
    <vt-child-row-toggler
      :row-id="props.rowId"
      v-if="props.childRowTogglerLast"
    />
  </tr>
</template>

<script>
import VtTableCell from "vue-tables-2-premium/compiled/components/VtTableCell";
import VtChildRowToggler from "vue-tables-2-premium/compiled/components/VtChildRowToggler";
export default {
  name: "IochordRow",
  props: ["props"],
  components: { VtTableCell, VtChildRowToggler },
  data() {
    return {
      row: this.$parent.$parent.$props,
      table: this.$parent.$parent.$parent.$parent.$parent.$parent.$parent
        .$parent.$parent.$data,
    };
  },
};
</script>

<style scoped>
.active {
  background-color: #e3f2fd;
}
</style>