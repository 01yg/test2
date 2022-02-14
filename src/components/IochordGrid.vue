<template>
  <div>
    <v-client-table
      ref="vct"
      :columns="columns"
      :data="data"
      :options="options"
      @row-click="onClickRow"
      v-bind="$attrs"
      @pagination="onChangePagination"
    >
      <a
        slot="uri"
        slot-scope="props"
        target="_blank"
        :href="props.row.uri"
        :class="{ active: props.index == selectedRow }"
        >click {{ JSON.stringify(props.rowAttrs) }}</a
      >
      <div slot="child_row" slot-scope="props">
        The link to {{ props.row.name }} is
        <a :href="props.row.uri">{{ props.row.uri }}</a>
      </div>
    </v-client-table>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "IochordGrid",
  props: {
    msg: String,
    data: [],
  },
  methods: {
    onClickRow: function (row) {
      this.selectedRow = row.index;
    },
    onChangePagination: function (row) {
      console.log("onChangePagination");
      console.log(row);
    },
  },
  created() {
    console.log("created");
  },
  data() {
    return {
      selectedRow: null,
      columns: ["department", "postion", "name"],
      options: {
        filteringbycolumn: false,
        headings: {
          department: "부서",
          postion: "직금",
          name: "이름",
        },
        selectable: {
          mode: "single", // or 'multiple'
          only: function (row) {
            return true; // any condition
          },
          selectAllMode: "all", // or 'page',
          programmatic: true,
        },
        pagination: {
          virtual: true,
        },
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<style>
.VueTables__wrapper {
  max-height: 200px;
  overflow-y: scroll;
}
</style>