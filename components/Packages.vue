<template>
  <SectionParent>
    <IconBase class="text-sunset w-full h-16">
      <IconArrow />
    </IconBase>

    <SectionContent>
      <SectionHeader class="text-center text-emerald">
        <template #roofline>Pakete</template>
        Genau, was ihr braucht!
      </SectionHeader>
    </SectionContent>

      <div class="bg-emerald text-white">
        <div class="">
          <h2 class="px-8 py-4 text-xl font-bold flex justify-between cursor-pointer"
            @click="active = !active">
            Grafik-Paket
            <span class="md:hidden transition-all transform duration-300 ease-linear"
              :class="[active ? '-rotate-90' : 'rotate-90']">&#10095;</span>
          </h2>
          <transition name="grow">
            <div v-if="active" class="">
              <img src="~/assets/images/Valerie-und-Max-712@2x.jpg" class="object-cover">
              <div class="p-8">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, doloremque. Error et facere iusto deserunt nam, possimus deleniti aut asperiores dolores architecto harum, ratione doloribus libero magnam voluptas? Necessitatibus, voluptas?</p>
                <p class="mt-6">75 &euro; / Stunde</p>
              </div>
            </div>
          </transition>
        </div>
        <hr class="mx-8">

        <div class="">
          <h2 class="px-8 py-4 text-xl font-bold flex justify-between">
            Standesamt-Paket
            <span class="md:hidden transition-all rotate-90 transform duration-500 ease-linear">
              &#10095;
            </span>
          </h2>
        </div>
        <hr class="mx-8">
        <div class="">
          <h2 class="px-8 py-4 text-xl font-bold flex justify-between">
            Reportage-Paket
            <span class="md:hidden transition-all rotate-90 transform duration-500 ease-linear">
              &#10095;
            </span>
          </h2>
        </div>
        <hr class="mx-8">
        <div class="">
          <h2 class="px-8 py-4 text-xl font-bold flex justify-between">
            All-inclusive-Paket
            <span class="md:hidden transition-all rotate-90 transform duration-500 ease-linear">
              &#10095;
            </span>
          </h2>
          <transition name="grow">
            <div v-if="active" class="">
              <img src="~/assets/images/Valerie-und-Max-712@2x.jpg" class="object-cover">
              <div class="p-8">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, doloremque. Error et facere iusto deserunt nam, possimus deleniti aut asperiores dolores architecto harum, ratione doloribus libero magnam voluptas? Necessitatibus, voluptas?</p>
                <p class="mt-6">75 &euro; / Stunde</p>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <IlSpacer :ms="4" />

  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    active: false
  })
})
</script>

<style lang="postcss" scoped>
.grow-enter-active, .grow-leave-active {
  transition: all .3s ease-in-out;
}
.grow-enter, .grow-leave-to {
  transform: scaleY(0);
}
.grow-enter-to {
  transform: scaleY(1);
}
</style>
