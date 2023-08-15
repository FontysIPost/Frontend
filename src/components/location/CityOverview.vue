<template>
  <div class="component">
    <btn-back />
    <h1>Steden Overzicht</h1>
    <SearchContainerLocation />
    <CityOverviewTable/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BtnBack from "@/components/standardUi/BtnBack.vue";
import CityOverviewTable from "@/components/location/CityOverviewTable.vue";
import SearchContainerLocation from "@/components/SearchContainerLocation.vue";
import SearchContainerCityBuilding from "@/components/SearchContainerCityBuilding.vue";
import LocationOverviewTable from "@/components/location/LocationOverviewTable.vue";
@Options({
  components: {
    BtnBack,
    LocationOverviewTable,
    CityOverviewTable,
    SearchContainerLocation,
    SearchContainerCityBuilding
  },
})
export default class CityOverview extends Vue {}
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
