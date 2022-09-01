<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="container">
        <div v-if="$route.params.id === 'Inicio'">
          <inicio-page />
        </div>

        <div v-if="$route.params.id === 'Registrar Humedal'">

          <div v-if="test === true">
            <registrar-fuentes-de-agua
              :image="dataAgua.image"
              :textData="dataAgua.textData"
              :title="dataAgua.title"
              @selection="checkAnswer"
            />
          </div>

          <div v-if="photo1 === true">
            <registro-foto/>
          </div>

          <div v-if="test2 === true">
            <registrar-fuentes-de-agua
              :image="dataFlora.image"
              :textData="dataFlora.textData"
              :title="dataFlora.title"
              @selection="checkAnswer2"
            />
          </div>
          <div v-if="test3 === true">
            <registrar-fuentes-de-agua
              :image="dataFauna.image"
              :textData="dataFauna.textData"
              :title="dataFauna.title"
              @selection="checkAnswer3"
            />
          </div>
          <div v-if="test4 === true">
            <registrar-fuentes-de-agua
              :image="dataPueblos.image"
              :textData="dataPueblos.textData"
              :title="dataPueblos.title"
              @selection="checkAnswer4"
            />
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import InicioPage from "./InicioPage.vue";
import RegistrarFuentesDeAgua from "@/Components/RegistrarFuentesDeAgua.vue";
import RegistroFoto from "@/Components/RegistroFoto.vue";

export default defineComponent({
  name: "FolderPage",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    InicioPage,
    RegistrarFuentesDeAgua,
    RegistroFoto
},
  // watch: {
  //   question(value, oldValue) {
  //     console.log(value);
  //     console.log('Funcionando');

  //   }
  // },
  setup() {
    const dataAgua = {
      image:
        "https://www.proyectoadelaida.org/wp-content/uploads/2021/07/AVEFENIX28JUNIO-1024x791.jpg",
      title: "¿Existen cuerpos de agua visibles en el área?",
      textData:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };
    const dataFlora = {
      image:
        "https://www.proyectoadelaida.org/wp-content/uploads/2021/07/AVEFENIX28JUNIO-1024x791.jpg",
      title: "¿Existe flora visible en el área?",
      textData:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };
    const dataFauna = {
      image:
        "https://www.proyectoadelaida.org/wp-content/uploads/2021/07/AVEFENIX28JUNIO-1024x791.jpg",
      title: "¿Existen fauna visible en el área?",
      textData:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };
    const dataPueblos = {
      image:
        "https://www.proyectoadelaida.org/wp-content/uploads/2021/07/AVEFENIX28JUNIO-1024x791.jpg",
      title: "¿Viven pueblos originarios en el área?",
      textData:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };
    return { dataAgua, dataFlora, dataFauna, dataPueblos };
  },
  methods: {
    checkAnswer(num: any) {
      this.test = num;
      if (this.test === false) {
        this.test2 = true;
      } else {
        this.photo1 = true
      }
      console.log(num);
    },
    checkAnswer2(num: any) {
      this.test2 = num;
      if (this.test2 === false) {
        this.test3 = true;
      }
      console.log(num);
    },
    checkAnswer3(num: any) {
      this.test3 = num;
      if (this.test3 === false) {
        this.test4 = true;
      }
      console.log(num);
    },
    checkAnswer4(num: any) {
      // this.test = num
      console.log(num);
    },
  },
  data() {
    return {
      test: true,
      test2: false,
      test3: false,
      test4: false,
      photo1: false
    };
  },
  // data() {
  //   return {
  //     imagen: '',
  //     titulo: '',
  //     cuerpo: ''

  //   }
  // },
  // methods: {
  //   example() {
  //     this.titulo = this.dataFlora.title
  //     this.cuerpo = this.dataFlora.textData
  //     this.imagen = this.dataFlora.image
  //   },
  // },
  // created() {
  //   this.titulo = this.dataAgua.title
  //   this.cuerpo = this.dataAgua.textData
  //   this.imagen = this.dataAgua.image
  // }
});
</script>

<style scoped>
/* #container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
} */
</style>
