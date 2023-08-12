<template>
  <div class="h-container">
    <div class="container-group">
      <div class="header">Start</div>
      <hr />
      <Dashboard />
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import Dashboard from "@/components/DashboardView.vue";
import axios from "axios";
const HomeView = defineComponent({
  components: {
    Dashboard
  },
  data() {
    return {
      email: String,
      role: Number
    };
  },
  methods: {
    registerClicked() : void {
      this.$router.push("/registratie");
    },
    searchClicked() : void {
      this.$router.push("/overzicht");
    },
    scanClicked() : void {
      this.$router.push("/pakket/1");
    },
    locationClicked() : void {
      this.$router.push("/locaties");
    },
    logout(){
      localStorage.clear();
      this.$router.push("/login");
    }
  },
  mounted() {
    //axios get
    const config = {
      'headers': {'Authorization': 'Bearer ' + localStorage.getItem('token')}
    }
    axios.get('https://localhost:44369/api/Authentication/auth', config )
    .catch(() => {
      this.$router.push("/login");
    })
  }
});
export default HomeView;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/styling/main.scss";

.container-group {
  margin: 2em;
  margin-bottom: 4em;
}

.container-group {
  .header {
    font-family: $font-family;
    font-size: 2em;
    font-weight: 600;
    text-align: left;
  }

  hr {
    width: 75vw;
    border: 0;
    border-top: 3px solid $gray-color;
    opacity: 0.2;
    margin: 1em 0;
  }
}
.flex-container {
  display: flex;
  flex-wrap: nowrap;
}
.flex-container > div {
  display: flex;
  align-items: center;
  justify-content: center;
}
.email-inline{
  margin-right: 10px;
}
</style>
