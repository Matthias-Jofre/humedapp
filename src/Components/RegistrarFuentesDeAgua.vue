<template>
  <div>
    <!-- <h1>{{ image }}</h1> -->
    <img class="container_2" :src="image" />
    <!-- <img src="{{ image }}" /> -->
    <div id="container">
      <strong class="titulo"> {{ title }} </strong>
      <p class="container_1">
        <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. -->
        {{ textData }}
      </p>
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-button
              expand="block"
              class="txt"
              color="primary"
              @click="$emit('selection', true)"
              >Si</ion-button
            ></ion-col
          >
          <ion-col size="6">
            <ion-button
              expand="block"
              class="txt"
              color="primary"
              @click="$emit('selection', false)"
              >No</ion-button
            ></ion-col
          >
        </ion-row>
      </ion-grid>
    </div>
  </div>
</template>
  <script lang="ts">
import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "RegistrarAlerta",
  components: { IonButton, IonCol, IonGrid, IonRow },
  props: {
    image: {
      type: String,
      default:
        "https://www.proyectoadelaida.org/wp-content/uploads/2021/07/AVEFENIX28JUNIO-1024x791.jpg",
      required: true,
    },
    title: {
      type: String,
      default: "Lorem ipsum title",
      required: true,
    },
    textData: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      required: true,
    },
  },
  //   data() {
  //     return {
  //         textData: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  //     }
  //   }
});
</script>
  
<style scoped>
.txt {
  font-family: "Roboto", sans-serif;
  font-weight: bolder;
  height: 50px;
}
#container {
  text-align: center;
  padding: 0px 10px;
  /* margin-top: 30px; */
}
/* img {
  margin-bottom: 40px;
}
p {
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 50px;
} */
.titulo {
  font-family: "Comfortaa", cursive;
  font-weight: lighter;
  text-transform: uppercase;
  font-size: 20px;
}
.container_1 {
  font-family: "Roboto", sans-serif;
  text-align: center;
  padding: 10px 50px 10px;
}
.container_2 {
  text-align: center;
  padding: 20px 0px;
}
</style>
  