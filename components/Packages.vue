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

      <IlSpacer />

      <div class="bg-emerald lg:bg-transparent text-white lg:grid lg:gap-1 lg:grid-cols-4">

        <IlPackage
          :img-src="require('~/assets/images/old/Valerie-und-Max-712@2x.jpg')"
          :open="open[0]"
          @change="toggle(0)">
          <template #title>Grafik-<br class="hidden lg:inline">Paket</template>
          <template #content>
            <p>
              Ihr braucht individuelle Papeterie, die perfekt zu Euch passt? Gemeinsam erarbeiten wir uns einen einzigartigen Stil. Ich kümmere mich dann um den Rest und gebe das Ganze in den Druck oder bastel es für euch.
            </p>
            <p>65 &euro; / Stunde</p>
          </template>
        </IlPackage>

        <hr class="mx-8 lg:hidden">

        <IlPackage
          :img-src="require('~/assets/images/old/Sandra-und-Jonas-Standesamt-Reportage-2.jpg')"
          :open="open[1]"
          @change="toggle(1)">
          <template #title>Standesamt-Paket</template>
          <template #content>
            <p>
              Ihr braucht eigentlich nur kurz fotografische Unterstützung für einen ganz besonderen Moment? Kein Ding! In 2 Stunden ist in den meisten Fällen nicht nur die Zeremonie und der Sektempfang drinnen, sondern auch ein kleines Pärchenshooting.
            </p>
            <p>Ab 600 &euro;</p>
          </template>
        </IlPackage>

        <hr class="mx-8 lg:hidden">

        <IlPackage
          :img-src="require('~/assets/images/old/Valerie-und-Max-54.jpg')"
          :open="open[2]"
          @change="toggle(2)">
          <template #title>Reportage-<br class="hidden lg:inline">Paket</template>
          <template #content>
            <p>
              Ihr plant das volle Programm und wollt euch später auch an die Vorbereitung erinnern? Bei der Reportage bin ich von Anfang an hautnah dabei und halte eure Aufregung beim Anziehen und Schminken (Getting Ready) bis zur großen Party spät in die Nacht fest!
            </p>
            <p>Preis auf Anfrage</p>
          </template>
        </IlPackage>

        <hr class="mx-8 lg:hidden">

        <IlPackage
          :img-src="require('~/assets/images/old/Sandra-und-Jonas-Hochzeit-Reportage-1.jpg')"
          :open="open[3]"
          @change="toggle(3)">
          <template #title>All-inclusive-Paket</template>
          <template #content>
            <p>
              Es soll alles perfekt sein und zueinander passen? Ihr wollt eure Fotografin schon lange vor der Party kennenlernen, damit ihr euch dann vor der Kamera maximal wohlfühlt? Im All-Inclusive-Paket kümmere ich mich um Eure Papeterie, unterstütze die Planung und bin am Tag Eurer Hochzeit den ganzen Tag dabei!
            </p>
            <p>Preis auf Anfrage</p>
          </template>
        </IlPackage>

      </div>

    </SectionContent>

    <IlSpacer :responsive="false" :ms="4" />

  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    open: [false, false, false, false]
  }),
  methods: {
    toggle(index: number) {
      this.open = this.open.map((open: boolean, i: number) => !open && i === index)
    }
  }
})
</script>
