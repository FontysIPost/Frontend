<template>
  <div class="component">
    <btn-back />
    <h1>Gebouwen Overzicht</h1>
    <SearchContainerLocation />
    <BuildingOverviewTable/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BtnBack from "@/components/standardUi/BtnBack.vue";
import BuildingOverviewTable from "@/components/location/BuildingOverviewTable.vue";
import SearchContainerLocation from "@/components/SearchContainerLocation.vue";
import SearchContainerBuilding from "@/components/SearchContainerBuilding.vue";
import LocationOverviewTable from "@/components/location/LocationOverviewTable.vue";
@Options({
  components: {
    BtnBack,
    LocationOverviewTable,
    BuildingOverviewTable,
    SearchContainerLocation,
    SearchContainerBuilding
  },
})
export default class BuildingOverview extends Vue {}
</script>

<style scoped lang="scss">
@import "@/styling/main.scss";
.component {
width: 60%;
}
@media only screen and (max-width: 930px) {
  .component {
    width: 95%;
  }
}
</style>
