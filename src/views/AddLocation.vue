<template>
  <div class="component">
    <BtnBack />
    <div class="component-container">
      <div class="container-header">Locatie toevoegen</div>
      <p>Selecteer wat u wilt toevoegen:</p>
      <ComboBox
          :options="locationOptions"
          @selectChange="selectedLocationChange"
          placeholder="selecteer een optie"
      />
      <AddCity v-if="selectedLocation == 'Stad'" />
      <AddBuilding v-if="selectedLocation == 'Gebouw'" />
      <AddRoom v-if="selectedLocation == 'Ruimte'" />
    </div>
  </div>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import InputField from "@/components/standardUi/InputField.vue";
import BtnFinish from "@/components/standardUi/BtnFinish.vue";
import AddCity from "@/components/locationRegistration/AddCity.vue";
import AddBuilding from "@/components/locationRegistration/AddBuilding.vue";
import AddRoom from "@/components/locationRegistration/AddRoom.vue";
import ComboBox from "@/components/standardUi/ComboBox.vue";
import BtnBack from "@/components/standardUi/BtnBack.vue";

@Options({
  components: {
    ComboBox,
    InputField,
    BtnFinish,
    AddCity,
    AddBuilding,
    AddRoom,
    BtnBack,
  },
})
export default class AddLocation extends Vue {
  private selectedLocation: String = "";
  private locationOptions: Array<String> = new Array<String>(
      "Stad",
      "Gebouw",
      "Ruimte"
  );

  selectedLocationChange(input: string): void {
    this.selectedLocation = input;
  }
}
</script>
<style lang="scss" scoped>
@import "@/styling/main.scss";

.container-header {
  margin-bottom: 1em;
}

.component-container {
  justify-content: flex-start;
  row-gap: 1em;
  min-width: 500px;
  @media only screen and (max-width: 600px) {
    min-width: 0;
  }
}

.page-wrapper {
  min-height: 80vh;
  display: flex;
  padding: 2em 2em;
  @media only screen and (max-width: 600px) {
    padding: 0 0;
  }
}
.component {
  width: 35%;
}
@media only screen and (max-width: 1700px) {
  .component {
    width: 50%;
  }
}
@media only screen and (max-width: 1250px) {
  .component {
    width: 70%;
  }
}
@media only screen and (max-width: 900px) {
  .component {
    width: 95%;
  }
}
</style>
