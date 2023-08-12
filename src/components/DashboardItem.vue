<template>
  <div class="dashboard-item">
    <div class="dashboard-generic">
      <h2 class="dashboardText">{{ labelText }}</h2>
      <img class="slot" :src="source" alt="icon" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    destRoute: String,
    labelText: String,
    source: String
  },
})
export default class DashboardItem extends Vue {}
</script>

<style scoped lang="scss">
@import "src/styling/main.scss";

.dashboard-item {
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: $shadow;
  border-radius: $border-radius;
  font-family: $font-family;
  cursor: pointer;
}

.dashboard-generic {
  margin: auto;
}

.dashboardText {
  font-size: 1.5em;
  width: 175px;
  margin: auto;
}

.menuimage {
  margin: 10px;
  width: 100px;
}

.slot {
  width: 50px;
  margin: 10px;
}
</style>
 