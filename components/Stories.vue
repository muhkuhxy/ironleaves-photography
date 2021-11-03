<template>
  <SectionParent class="">
    <IconBase class="text-sunset w-full h-16 mt-8">
      <IconArrow />
    </IconBase>
    <SectionHeader class="my-8 text-center">
      <template #roofline>Stories</template>
      <span class="text-bluegray">Echte Emotionen</span>
    </SectionHeader>

    <IlStory :slides="slides[0]">
      <template #image>
        <div class="relative lg:w-1/2 flex-initial">
          <img
            class="w-7/8 border-8 border-solid border-white filter drop-shadow"
            src="~/assets/images/IMG_20190206_161314.jpg"
            alt="Happy couple">
          <SvgSingleBranch class="w-1/4 text-emerald fill-current absolute right-0 bottom-0 transform -translate-x-1 translate-y-4" />
        </div>
      </template>

      <template #title>Valerie&nbsp;&amp; Max</template>

      <template #content>
        <p class="max-w-prose">
          Das Pärchen, das mir wohl das größste Vertrauen entgegen gebracht und
          mich komplett bei ihrer aufregenden Reise bis zur Hochzeit
          mitgenommen hat. Neben der kompletten Papeterie durfte ich auch
          hautnah bei den Planungen mit dabei sein.
        </p>
        <p class="max-w-prose mt-4">
          Unvergessen wird für mich immer der Moment sein, als ich mit Valerie und
          ihrem Vater kurz vor der Zeremonie im Standesamt vor der noch
          geschlossenen Tür stand. Sekunden, bevor er sie zu Max führen würde.
        </p>
        <p class="max-w-prose mt-4">
          Der unperfekte Wald- und Wiesenstil hat perfekt zu den beiden gepasst
          und wurde von Anfang an auch in der Papeterie berücksichtigt. Alles wirkt
          wie aus einem Guss.
        </p>
      </template>
    </IlStory>

    <IlSpacer :ms="4" />

    <IlStory :slides="slides[1]">
      <template #image>
        <div class="relative lg:w-1/2 flex-initial lg:order-2">
          <img
            class="w-5/6 ml-auto border-8 border-solid border-white filter drop-shadow"
            src="~/assets/images/Sandra-und-Jonas-Standesamt-Shooting-3695.jpg"
            alt="Happy couple">
          <SvgSingleFlower class="w-1/4 text-bluegray fill-current absolute left-0 bottom-0 transform translate-y-6 translate-x-4" />
        </div>
      </template>

      <template #title>Sandra&nbsp;&amp; Jonas (Standesamt)</template>

      <template #content>
        <p class="max-w-prose">
          Das Pärchen, das mir wohl das größte Vertrauen
          entgegen gebracht und mich komplett bei ihrer
          aufregenden Reise bis zur Hochzeit
          mitgenommen hat. Neben der kompletten
          Papeterie durfte ich auch hautnah bei den
          Planungen mit dabei sein.
        </p>
      </template>
    </IlStory>

    <IlSpacer :ms="4" />

    <IlStory :slides="slides[2]">
      <template #image>
        <div class="relative lg:w-1/2 flex-initial">
          <img
            class="w-5/6 border-8 border-solid border-white filter drop-shadow"
            src="~/assets/images/Samira-und-Kerem-Shooting-1173.jpg"
            alt="Happy couple">
          <SvgFlowerSunset class="w-1/4 text-sunset fill-current absolute right-0 bottom-0 transform -translate-x-1 translate-y-3" />
        </div>
      </template>

      <template #title>Samira&nbsp;&amp; Kerem</template>

      <template #content>
        <p class="max-w-prose">
          Das Pärchen, das mir wohl das größte Vertrauen
          entgegen gebracht und mich komplett bei ihrer
          aufregenden Reise bis zur Hochzeit
          mitgenommen hat. Neben der kompletten
          Papeterie durfte ich auch hautnah bei den
          Planungen mit dabei sein.
        </p>
      </template>
    </IlStory>

    <IlSpacer :ms="4" />

    <IlStory :slides="slides[3]">
      <template #image>
        <div class="relative lg:w-1/2 flex-initial lg:order-2">
          <img
            class="w-5/6 ml-auto border-8 border-solid border-white filter drop-shadow"
            src="~/assets/images/Sandra-und-Jonas-Hochzeit-Shooting-1067.jpg"
            alt="Happy couple">
          <SvgBranchSunset class="w-3/10 text-sunset fill-current absolute left-0 bottom-0 transform translate-x-2 translate-y-4" />
        </div>
      </template>

      <template #title>Sandra&nbsp;&amp; Jonas (Kirche)</template>

      <template #content>
        <p class="max-w-prose">
          Das Pärchen, das mir wohl das größte Vertrauen
          entgegen gebracht und mich komplett bei ihrer
          aufregenden Reise bis zur Hochzeit
          mitgenommen hat. Neben der kompletten
          Papeterie durfte ich auch hautnah bei den
          Planungen mit dabei sein.
        </p>
      </template>
    </IlStory>

    <IconBase class="text-sunset w-full h-16 mt-8 mb-12">
      <IconArrow />
    </IconBase>

  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
const slides = [
  [
    'Valerie-und-Max-4.jpg',
    'Valerie-und-Max-54.jpg',
    'Valerie-und-Max-701.jpg',
    'Valerie-und-Max-703.jpg',
    'Valerie-und-Max-712.jpg',
    'Valerie-und-Max-713.jpg',
    'Valerie-und-Max-730.jpg',
    'Valerie-und-Max-Shooting-117.jpg',
    'Valerie-und-Max-Shooting-159.jpg',
    'Valerie-und-Max-Shooting-1.jpg',
    'Valerie-und-Max-Shooting-2.jpg',
    'Valerie-und-Max-Shooting-69.jpg',
  ],
  [
    'Sandra-und-Jonas-Standesamt-Reportage-1.jpg',
    'Sandra-und-Jonas-Standesamt-Reportage-2.jpg',
    'Sandra-und-Jonas-Standesamt-Reportage-4917.jpg',
    'Sandra-und-Jonas-Standesamt-Reportage-5313.jpg',
    'Sandra-und-Jonas-Standesamt-Reportage-5430.jpg',
    'Sandra-und-Jonas-Standesamt-Shooting-3695.jpg',
    'Sandra-und-Jonas-Standesamt-Shooting-3876.jpg',
    'Sandra-und-Jonas-Standesamt-Shooting-3917.jpg',
    'Sandra-und-Jonas-Standesamt-Shooting-6105.jpg',
  ],
  [
    'Samira-und-Kerem-1.jpg',
    'Samira-und-Kerem-2.jpg',
    'Samira-und-Kerem-3.jpg',
    'Samira-und-Kerem-Shooting-1173.jpg',
    'Samira-und-Kerem-Shooting-9867.jpg'
  ],
  [
    'Sandra-und-Jonas-Hochzeit-Reportage-1.jpg',
    'Sandra-und-Jonas-Hochzeit-Reportage-1200568.jpg',
    'Sandra-und-Jonas-Hochzeit-Reportage-1200570.jpg',
    'Sandra-und-Jonas-Hochzeit-Reportage-1200657.jpg',
    'Sandra-und-Jonas-Hochzeit-Reportage-1211662.jpg',
    'Sandra-und-Jonas-Hochzeit-Reportage-1211796.jpg',
    'Sandra-und-Jonas-Hochzeit-Reportage-1865.jpg',
    'Sandra-und-Jonas-Hochzeit-Reportage-1889.jpg',
    'Sandra-und-Jonas-Hochzeit-Reportage-2926.jpg',
    'Sandra-und-Jonas-Hochzeit-Shooting-0874.jpg',
    'Sandra-und-Jonas-Hochzeit-Shooting-1067.jpg',
  ]
]
export default Vue.extend({
  computed: {
    slides: () => slides
  },
})
</script>

