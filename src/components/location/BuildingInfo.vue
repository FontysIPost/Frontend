<template>
    <AddBuilding v-if="ColumnType == building" :buildingId="buildingId" @location-changed="ReloadTable" :title="updateBuildingTitle"/>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import AddCity from "@/components/locationRegistration/AddCity.vue";
import { Emit, Prop } from "vue-property-decorator";
import AddBuilding from "@/components/locationRegistration/AddBuilding.vue";
import AddRoom from "@/components/locationRegistration/AddRoom.vue";
import { ColumnType } from "@/classes/table/ColumnType";

function EnumProp(d: string | number, e: Record<any, any>) {
  // <- Record is changed
  return {
    default: d,
    validator: (v) => e[v] !== undefined,
  };
}

@Options({
  components: {
    AddCity,
    AddBuilding,
    AddRoom
  },
  emits: [
    "reload-table"
  ]
})
export default class BuildingInfo extends Vue {
  private building: ColumnType = ColumnType.BUILDING;

  private updateBuildingTitle: string = "Wijzig een gebouw";

  @Prop()
  public cityId: string = "";

  @Prop()
  public buildingId: string = "";

  @Prop()
  public roomId: string = "";

  @Prop(EnumProp(ColumnType.BUILDING, ColumnType))
  ColumnType!: ColumnType;

  ReloadTable(): void {
    this.$emit("reload-table");
  }
}
</script>

<style lang="scss" scoped>
@import "@/styling/main.scss";
</style>