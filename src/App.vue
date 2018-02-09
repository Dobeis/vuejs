<template>
  <v-app id="inspire">
    <v-toolbar dark color="teal darken-3" app absolute clipped-left>
      <span class="title">Task&nbsp;
        <span class="text">Keep</span>
      </span>
      <v-spacer></v-spacer>
      <v-btn icon dark>
        <v-icon>person</v-icon>
      </v-btn>
    </v-toolbar>
    <v-btn fixed dark fab bottom right color="teal darken-4" v-on:click="dialog()">
      <v-icon>add</v-icon>
      <v-dialog v-model="dialog" persistent max-width="500px">

      </v-dialog>
    </v-btn>
    <v-content>
      <v-container grid-list-lg fluid fill-height class="grey lighten-4">
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        dialog: false
      };
    },
    incluirTask(task) {
      axios
        .post("http://api-nodejs-mlab.herokuapp.com/new")
        .then(res => {
          this.tasks = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
</script>

<style>
  #keep main .container {
    height: 660px;
  }

  .navigation-drawer__border {
    display: none;
  }

  .text {
    font-weight: 400;
  }
</style>