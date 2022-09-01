<template>
  <ion-page>
    <ion-content>
      <swiper @swiper="setSwiperInstance" class="swiper">
        <swiper-slide>
          <registrar-fuentes-de-agua
            :image="dataAgua.image"
            :textData="dataAgua.textData"
            :title="dataAgua.title"
            @selection=nextSlide
          />
        </swiper-slide>
        <swiper-slide>
          <registro-foto />
        </swiper-slide>
      </swiper>
      <div :style="{ textAlign: 'center' }">
        <ion-button @click="prevtSlide"> prev </ion-button>
        <ion-button @click="nextSlide"> next </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>
  
<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { IonContent, IonPage, IonButton } from "@ionic/vue";

import "swiper/css";
import "@ionic/vue/css/ionic-swiper.css";
import RegistroFoto from "@/Components/RegistroFoto.vue";
import RegistrarFuentesDeAgua from "@/Components/RegistrarFuentesDeAgua.vue";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    IonContent,
    IonPage,
    RegistroFoto,
    RegistrarFuentesDeAgua,
    IonButton,
  },
  setup() {

    const data = {
      data1: false,
      data2: false,
      data3: false
    }

    const slides = ref();
    
    const setSwiperInstance = (swiper: any) => {
      slides.value = swiper;
      slides.value.allowTouchMove = false;
      console.log(slides.value);
    };

    const nextSlide = () => {
      slides.value.slideNext();
      // slides.value.slideTo(2);
      console.log("next");
      console.log(data.data1);
      data.data1 = true
      console.log(data.data1);
    };

    const prevtSlide = () => {
      slides.value.slidePrev();
      // slides.value.slideTo(0);
      console.log(slides.value.allowTouchMove);
      console.log("prev");
    };

    const dataAgua = {
      image:
        "https://www.proyectoadelaida.org/wp-content/uploads/2021/07/AVEFENIX28JUNIO-1024x791.jpg",
      title: "¿Existen cuerpos de agua visibles en el área?",
      textData:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };

    return { setSwiperInstance, nextSlide, prevtSlide, dataAgua };
  },

  data() {
    return {
      test: true
    }
  }
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
  transform: scale(2);
} */
.swiper {
  height: 100%;
}
</style>