<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-toolbar>
        <ion-title class="titulo">{{ titulo }}</ion-title>
      </ion-toolbar>
      <div>
        <p class="container_1">{{ parrafo }}</p>

        <ion-fab class="your-class1" horizontal="center" slot="fixed">
          <ion-fab-button @click="takePhoto()">
            <ion-icon :icon="camera"></ion-icon>
          </ion-fab-button>
        </ion-fab>

        <ion-grid class="separate">
          <ion-row>
            <ion-col size="6" :key="photo" v-for="photo in photos">
              <ion-img :src="photo.webviewPath"></ion-img>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-button expand="block" class="your-class">Siguiente</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import {
  IonTitle,
  IonToolbar,
  IonContent,
  IonPage,
  IonFab,
  IonFabButton,
} from "@ionic/vue";
import { camera } from "ionicons/icons";
import {
  IonIcon,
  IonButton,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { usePhotoGallery, UserPhoto } from "@/composables/usePhotoGallery";

export default defineComponent({
  name: "RegistroFoto",
  components: {
    IonTitle,
    IonToolbar,
    IonContent,
    IonPage,
    IonFab,
    IonFabButton,
    IonIcon,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
  },
  props: {
    titulo: {
      type: String,
      default: "Lorem ipsum title",
      required: true,
    },
    parrafo: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      required: true,
    },
  },
  setup() {
    const { photos, takePhoto } = usePhotoGallery();

    return {
      camera,
      takePhoto,
      photos,
    };
  },
});
</script>

<style scoped>
.your-class {
  position: absolute;
  left: 0;
  bottom: 30px;
  right: 0;
  font-family: "Roboto", sans-serif;
  font-weight: bolder;
  height: 50px;
  padding: 0 50px;
}

.titulo {
  font-family: "Comfortaa", cursive;
  text-align: center;
  font-weight: lighter;
  text-transform: uppercase;
  font-size: 20px;
  margin-top: 100px;
}
.container_1 {
  font-family: "Roboto", sans-serif;
  text-align: center;
  padding: 10px 50px 10px;
}
.separate {
  margin-top: 90px;
}
</style>