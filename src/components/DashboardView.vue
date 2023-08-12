<template>
  <div class="m-container">
    <DashboardItem
      @click="registerClicked()"
      class="item"
      labelText="Registreren"
      :source="getImgUrl('register.png')"
    />
    <DashboardItem
      @click="searchClicked()"
      class="item"
      labelText="Zoeken"
      :source="getImgUrl('search.png')"
    />
    <DashboardItem
      @click="locationClicked()"
      class="item"
      labelText="Locaties"
      :source="getImgUrl('map.png')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DashboardItem from "@/components/DashboardItem.vue";


const Dashboard = defineComponent({
  components: {
    DashboardItem
  },
  data() {
    return {};
  },
  methods: {
    getImgUrl(pic) {
      return require("@/assets/svg/" + pic);
    },
    registerClicked(): void {
      this.$router.push("/registratie");
    },
    searchClicked(): void {
      this.$router.push("/overzicht");
    },
    scanClicked(): void {
      if (
        "mediaDevices" in navigator &&
        "getUserMedia" in navigator.mediaDevices
      ) {
        // ok, browser supports it
        alert("support");
      }
    },
    locationClicked(): void {
      this.$router.push("/locaties");
    },

  },
});
export default Dashboard;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/styling/main.scss";

.m-container {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  column-gap: 1.5em;
  row-gap: 1.5em;
}

@media only screen and (max-width: 519px) {
  .m-container {
    justify-content: center;
  }
}

.slot {
  width: 50px;
  margin: 10px;
}
</style>
