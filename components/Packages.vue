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

        <IlPackage title="Grafik-Paket">
          <template #img>
            <img class="object-cover w-full"
              src="~/assets/images/Valerie-und-Max-712@2x.jpg">
          </template>
          <template #content>
            <p>
              Ihr braucht individuelle Papeterie? Na klar! Lasst uns darüber quatschen!
              Gemeinsam erarbeiten wir uns einen einheitlichen Stil. Ich kümmere mich
              dann um den Rest und gebe das Ganze in den Druck oder bastel es für
              euch.
            </p>
            <p>75 &euro; / Stunde</p>
          </template>
        </IlPackage>

        <hr class="mx-8">

        <IlPackage title="Standesamt-Paket">
          <template #img>
            <img class="object-cover w-full"
              src="~/assets/images/Sandra-und-Jonas-Standesamt-Reportage-2.jpg">
          </template>
          <template #content>
            <p>
              Ihr braucht eigentlich nur ganz kurz fotografische Unterstützung für einen
              ganz besonderen Moment? Kein Ding! In 2 Stunden ist in den meisten
              Fällen nicht nur die Zeremonie drinnen, sondern auch ein kleines
              Shooting.
            </p>
            <p>Ab 600 &euro; / Stunde</p>
          </template>
        </IlPackage>

        <hr class="mx-8">

        <IlPackage title="Reportage-Paket">
          <template #img>
            <img class="object-cover w-full"
              src="~/assets/images/Valerie-und-Max-54.jpg">
          </template>
          <template #content>
            <p>
              Ihr habt das volle Programm und wollt euch später auch an die
              Vorbereitung erinnern? Bei der Reportage bin ich von Anfang an
              hautnah dabei und halte eure Aufregung beim Anziehen bis zur
              großen Party spät in die Nacht fest!
            </p>
            <p>Preis auf Anfrage</p>
          </template>
        </IlPackage>

        <hr class="mx-8">

        <IlPackage title="All-inclusive-Paket">
          <template #img>
            <img class="object-cover w-full"
              src="~/assets/images/Sandra-und-Jonas-Hochzeit-Reportage-1.jpg">
          </template>
          <template #content>
            <p>
              Es soll alles perfekt sein und zueinander passen? Ihr wollt eure
              Fotografin schon lange vor der Party kennenlernen, damit ihr euch dann
              vor der Kamera maximal wohlfühlt? Im All-Inclusive-Paket misch ich
              mich voll in die Planungen mit ein und stehe euch beratend zur Seite.
            </p>
            <p>Preis auf Anfrage</p>
          </template>
        </IlPackage>

      </div>

      <IlSpacer :ms="4" />

  </SectionParent>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>
